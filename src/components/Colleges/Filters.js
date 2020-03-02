import React, { useContext } from "react";
import { CollegeContext } from "../../context/colleges";
export default function Filters() {
  const {
    filters: { search, course, financialaid, fee },
    updateFilters,
    sorted
  } = useContext(CollegeContext);
  return (
    <section className="filters-section">
      <h2 className="section-title">search colleges</h2>
      <form className="filters-form">
        <div>
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
              <option value="accounting">accounting</option>
              <option value="aerospace engieering">aerospace engieering</option>
              <option value="biology">biology</option>
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
            <label htmlFor="financialaid">free financialaid</label>
          </div>
          {/* end of free financialaid */}
        </div>
        {/* fee */}
        <div className="fee-group">
          <p>fee</p>
          <label>
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
          <label>
            <input
              type="radio"
              name="fee"
              value="0"
              checked={fee === 0}
              onChange={updateFilters}
            />
            $0 - $300
          </label>
          <label>
            <input
              type="radio"
              name="fee"
              value="300"
              checked={fee === 300}
              onChange={updateFilters}
            />
            $300 - $650
          </label>
          <label>
            <input
              type="radio"
              name="fee"
              value="650"
              checked={fee === 650}
              onChange={updateFilters}
            />
            Over $650
          </label>
        </div>
        {/* end of fee */}
      </form>
      <h6>total colleges :{sorted.flat().length} </h6>
      <hr />
    </section>
  );
}
