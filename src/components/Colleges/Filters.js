import React, { useContext } from "react";
import { CollegeContext } from "../../context/colleges";
import { CourseContext } from "../../context/courses";
export default function Filters() {
  const {
    filters: { search, course, financialaid, fee },
    updateFilters,
    sorted
  } = useContext(CollegeContext);
  const { courses } = useContext(CourseContext);
  return (
    <section className="filters-section">
      <h2 className="section-title">search colleges</h2>
      <form className="filters-form">
        <div className="search1">
          {/* search input */}
          <div className="form-group">
            <label htmlFor="search">search university</label>
            <input
              type="text"
              name="search"
              id="search"
              className="form-control"
              value={search}
              onChange={updateFilters}
            />
          </div>
          {/* end of search form */}
          {/* select course */}
          <div className="form-group">
            <label htmlFor="course">course</label>
            <select
              name="course"
              id="course"
              className="form-control"
              value={course}
              onChange={updateFilters}
            >
              <option value="all">all</option>
              {courses.map(course => (
                <option key={course.id} value={course.course_name}>
                  {course.course_name}
                </option>
              ))}
            </select>
          </div>
          {/* end of course */}
          {/* free financialaid */}
          <div className="form-group">
            <input
              type="checkbox"
              name="financialaid"
              id="financialaid"
              checked={financialaid}
              onChange={updateFilters}
            />
            <label htmlFor="financialaid">free financial aid</label>
          </div>
        </div>
        {/* end of free financialaid */}
        {/* fee */}
        <div className="fee-group">
          <p>Fee</p>
          <label className="radio1">
            <input
              type="radio"
              name="fee"
              id="all"
              value="all"
              checked={fee === "all"}
              onChange={updateFilters}
            />
            all
          </label>
          <label className="radio1">
            <input
              type="radio"
              name="fee"
              value="0"
              checked={fee === 0}
              onChange={updateFilters}
            />
            $20,000 - $30,000
          </label>
          <label className="radio1">
            <input
              type="radio"
              name="fee"
              value="30000"
              checked={fee === 30000}
              onChange={updateFilters}
            />
            $30,000 - $40,000
          </label>
          <label className="radio1">
            <input
              type="radio"
              name="fee"
              value="40000"
              checked={fee === 40000}
              onChange={updateFilters}
            />
            Over $40,000
          </label>
        </div>
        {/* end of fee */}
      </form>
      <h6>total colleges :{sorted.flat().length} </h6>
      <hr />
    </section>
  );
}
