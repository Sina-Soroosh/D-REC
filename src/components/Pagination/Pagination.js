import React from "react";
import "./Pagination.css";

function Pagination({ manyPages, pageActive,changePage }) {
  return (
    <ul className="pagination-content">
      {Array(manyPages)
        .fill(0)
        .map((page, index) => (
          <li
            className={`page ${+pageActive === index + 1 ? "active" : ""}`}
            key={index}
            onClick={() => changePage(index + 1)}
          >
            <span className="page-link">{index + 1}</span>
          </li>
        ))}
    </ul>
  );
}

export default Pagination;
