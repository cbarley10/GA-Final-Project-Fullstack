import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { handleNextClick, handlePrevClick, page, maxPages } = this.props;
    return (
      <div className="container page">
        <p>
          <strong>page:</strong> {page}
        </p>
        {page === 1 ? null : (
          <button className="previous" onClick={handlePrevClick}>
            previous
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
