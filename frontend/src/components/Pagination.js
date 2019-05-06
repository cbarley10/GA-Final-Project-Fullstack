import React, { Component } from "react";
import { VISIBLE_PAGE_NUMS } from "../constants";
import { startingIndex } from "../utils/pagination";
import DropdownOptions from "./DropdownOptions";
import {
  NumberButton,
  NextBackButton,
  PaginationContainer,
  NumberButtonContainer
} from "../styled-components/Pagination";

class Pagination extends Component {
  render() {
    const {
      handleNextClick,
      handlePrevClick,
      page,
      maxPages,
      handlePageNumberClick,
      handleFilterChange,
      currentFilter,
      userFavorites
    } = this.props;

    const renderPageNumbers = [...Array(maxPages)]
      .map((_, index) => (
        <NumberButton
          key={index}
          id={index}
          onClick={handlePageNumberClick}
          className={page === index + 1 ? "current" : ""}
        >
          {index + 1}
        </NumberButton>
      ))
      .splice(
        startingIndex(page, maxPages, VISIBLE_PAGE_NUMS),
        VISIBLE_PAGE_NUMS
      );

    if (!userFavorites) {
      return (
        <PaginationContainer className="container page">
          {currentFilter ? null : (
            <p>
              <strong>page:</strong> {page}/{maxPages}
            </p>
          )}

          {currentFilter ? (
            <span className="filter">
              <strong>Filtering By: </strong>{" "}
              <span className={currentFilter.toLowerCase()}>
                {currentFilter.toUpperCase()}
              </span>
            </span>
          ) : null}
          <DropdownOptions handleFilterChange={handleFilterChange} />
          {currentFilter ? null : (
            <NumberButtonContainer>{renderPageNumbers}</NumberButtonContainer>
          )}
          {page === 1 || currentFilter ? null : (
            <NextBackButton onClick={handlePrevClick}>back</NextBackButton>
          )}
          {page === maxPages || currentFilter ? null : (
            <NextBackButton onClick={handleNextClick}>next</NextBackButton>
          )}
        </PaginationContainer>
      );
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <a href="/" className="btn btn-secondary">
            Back to main page
          </a>
        </div>
      );
    }
  }
}

export default Pagination;
