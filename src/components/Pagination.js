import React, { Component } from "react";
import { VISIBLE_PAGE_NUMS } from "../constants";
import { startingIndex } from "../utils/pagination";
import DropdownOptions from "./DropdownOptions";

class Pagination extends Component {
  render() {
    const {
      handleNextClick,
      handlePrevClick,
      page,
      maxPages,
      handlePageNumberClick,
      handleFilterChange,
      currentFilter
    } = this.props;

    const renderPageNumbers = [...Array(maxPages)]
      .map((_, index) => (
        <button
          key={index}
          id={index}
          onClick={handlePageNumberClick}
          className={page === index + 1 ? "current" : ""}
        >
          {index + 1}
        </button>
      ))
      .splice(
        startingIndex(page, maxPages, VISIBLE_PAGE_NUMS),
        VISIBLE_PAGE_NUMS
      );

    return (
      <div className="container page">
        <p>
          <strong>page:</strong> {page}/{maxPages}
        </p>
        <p>
          {currentFilter ? (
            <div>
              <strong>Filtering By: </strong> {currentFilter.toUpperCase()}
            </div>
          ) : null}
        </p>
        <DropdownOptions handleFilterChange={handleFilterChange} />
        {currentFilter ? null : (
          <div className="page-numbers">{renderPageNumbers}</div>
        )}
        {page === 1 ? null : (
          <button className="previous" onClick={handlePrevClick}>
            back
          </button>
        )}
        {page === maxPages ? null : (
          <button className="next" onClick={handleNextClick}>
            next
          </button>
        )}
      </div>
    );
  }
}

export default Pagination;
