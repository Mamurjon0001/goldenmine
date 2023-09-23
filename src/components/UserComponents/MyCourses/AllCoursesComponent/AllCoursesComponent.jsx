import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import InputUtil from "../../../../utils/FormUtils/InputUtil/InputUtil";
import SelectDropdownUtil from "../../../../utils/FormUtils/SelectDropdownUtil/SelectDropdownUtil";
import CourseCardWithOptions from "../../../Cards/CourseCardWithOptions/CourseCardWithOptions";

import searchIcon from "/icons/search.png";
import shareIcon from "/icons/share.png";
import starIcon from "/icons/star-b.png";
import plusIcon from "/icons/plus.png";
import folderIcon from "/icons/folder.png";
import { courseDataWithOptions } from "../../../../fakedata/fakedata";

import css from "./AllCoursesComponent.module.css";

const AllCoursesComponent = () => {
  const [filters, setFilers] = useState({
    sortBy: {},
    filterByCategory: {},
    filterByState: {},
    filterByInstructor: {},
  });

  const [resetBtn, setRestBtn] = useState(false);

  const sortByOptions = [
    {
      key: "Recently Accessed",
      value: "recently accessed",
    },
    {
      key: "Recently Enrolled",
      value: "recently enrolled",
    },
    {
      key: "Title: A-to-Z",
      value: "a-z",
    },
    {
      key: "Title: Z-to-A",
      value: "z-a",
    },
  ];

  const filterByCategoryOptions = [
    [
      {
        key: "Yoqtirganlarim",
        value: "yoqtirganlarim",
      },
    ],
    [
      {
        key: "Barcha kurslar",
        value: "barcha kurslar",
      },
      {
        key: "Matematika",
        value: "matematika",
      },
      {
        key: "Ingliz tili",
        value: "ingliz tili",
      },
      {
        key: "Ona tili",
        value: "ona tili",
      },
      {
        key: "Tarix",
        value: "tarix",
      },
    ],
    [
      {
        key: "kimyo",
        value: "kimyo",
      },
    ],
  ];

  const filterByStateOptions = [
    {
      key: "Tugatganlarim",
      value: "tugatganlarim",
    },
    {
      key: "O'rgnish jarayonida",
      value: "o'rganish jarayonida",
    },
    {
      key: "hali boshlanmagan",
      value: "hali boshlanmagan",
    },
  ];

  const filterByInstructorOptions = [
    {
      key: "Mamurjon Ibragimov",
      value: "mamurjon ibragimov",
    },
    {
      key: "Atoollo Mirzaabdullayev",
      value: "atoollo mirzaabdullayev",
    },
  ];

  useEffect(() => {
    if (
      Object.keys(filters.sortBy).length ||
      Object.keys(filters.filterByCategory).length ||
      Object.keys(filters.filterByState).length ||
      Object.keys(filters.filterByInstructor).length
    ) {
      return setRestBtn(true);
    }
    setRestBtn(false);
  }, [filters]);

  const resetFiltersHandler = () => {
    setFilers({
      sortBy: {},
      filterByCategory: {},
      filterByState: {},
      filterByInstructor: {},
    });
  };

  const optionsComps = [
    <div className={css.opt}>
      <div className={css.httl}>Lists</div>
      <Link to="/" className={css.ctxt}>
        Dynamics
      </Link>
      <Link to="/" className={css.ctxt}>
        NCloud
      </Link>
    </div>,
    <div className={css.opt}>
      <Link to="/" className={css.txtBox}>
        <span className={css.iconBox}>
          <img src={shareIcon} alt="icon" className={css.icon} />
        </span>
        <span className={css.txt}>Share</span>
      </Link>
      <Link to="/" className={css.txtBox}>
        <span className={css.iconBox}>
          <img src={plusIcon} alt="icon" className={css.icon} />
        </span>
        <span className={css.txt}>Create New List</span>
      </Link>
      <Link to="/" className={css.txtBox}>
        <span className={css.iconBox}>
          <img src={starIcon} alt="icon" className={css.icon} />
        </span>
        <span className={css.txt}>Favorite</span>
      </Link>
      <Link to="/" className={css.txtBox}>
        <span className={css.iconBox}>
          <img src={folderIcon} alt="icon" className={css.icon} />
        </span>
        <span className={css.txt}>Unarchive</span>
      </Link>
    </div>,
  ];

  return (
    <div className={css.outerDiv}>
      <div className={css.topBar}>
        <div className={css.filters}>
          <SelectDropdownUtil
            id="filter1"
            label="Sort by"
            filterType="sortBy"
            defaultValue={sortByOptions[0]}
            value={filters.sortBy}
            setValue={setFilers}
            multipleOptions={false}
            options={sortByOptions}
          />
          <SelectDropdownUtil
            id="filter2"
            label="Filter by"
            filterType="filterByCategory"
            defaultValue={filterByCategoryOptions[0][0]}
            value={filters.filterByCategory}
            setValue={setFilers}
            multipleOptions={true}
            options={filterByCategoryOptions}
          />
          <SelectDropdownUtil
            id="filter3"
            filterType="filterByState"
            defaultValue={filterByStateOptions[0]}
            value={filters.filterByState}
            setValue={setFilers}
            multipleOptions={false}
            options={filterByStateOptions}
          />
          <SelectDropdownUtil
            id="filter4"
            filterType="filterByInstructor"
            defaultValue={filterByInstructorOptions[0]}
            value={filters.filterByInstructor}
            setValue={setFilers}
            multipleOptions={false}
            options={filterByInstructorOptions}
          />
          <div
            className={[css.rstBtn, resetBtn ? css.activeRstBtn : ""].join(" ")}
            onClick={resetFiltersHandler}
          >
            Reset
          </div>
        </div>

        <div className={css.searchBar}>
          <InputUtil
            icon={searchIcon}
            iconPosition="right"
            placeholderTxt="Search my courses"
            extraCss={{ padding: "0.3rem", fontSize: "1rem" }}
          />
        </div>
      </div>
      <div className={css.bdy}>
        {courseDataWithOptions.map((item) => {
          return (
            <CourseCardWithOptions
              key={item.id}
              data={item}
              isOptions={true}
              options={optionsComps}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllCoursesComponent;
