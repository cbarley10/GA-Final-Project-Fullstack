import React, { Component } from "react";
import { paginate } from "../data/paginate";

class Pagination extends Component {
  render() {
    return (
      <div>
        <button className="previous">previous</button>
        <button className="next">next</button>
      </div>
    );
  }
}

export default Pagination;
