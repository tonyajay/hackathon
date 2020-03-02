import React from "react";
import { CollegeContext } from "../../context/colleges";
import CollegeList from "./CollegeList";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
export default function PaginatedColleges() {
  const { sorted, page, changePage } = React.useContext(CollegeContext);

  if (sorted[page]) {
    return (
      <section>
        <CollegeList colleges={sorted[page]}></CollegeList>

        {/* buttons */}
        {sorted.length > 1 && (
          <article className="pagination-buttons">
            {/* prev button */}
            {page > 0 && (
              <button
                onClick={() => changePage(page - 1)}
                className="prev-page-btn"
              >
                <FaAngleDoubleLeft></FaAngleDoubleLeft>
              </button>
            )}
            {sorted.map((_, index) => {
              return (
                <button
                  onClick={() => changePage(index)}
                  key={index}
                  className={`page-btn ${page === index && `page-btn-current`}`}
                >
                  {index + 1}
                </button>
              );
            })}
            {/* next button */}
            {page < sorted.length - 1 && (
              <button
                onClick={() => changePage(page + 1)}
                className="next-page-btn"
              >
                <FaAngleDoubleRight></FaAngleDoubleRight>
              </button>
            )}
          </article>
        )}
      </section>
    );
  } else {
    return (
      <h3 className="search-errors">
        unfortunately your search query did not return any colleges
      </h3>
    );
  }
}
