import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Mortys from "../components/Mortys";
import { fetchMortys } from "../utils/fetchMortys";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: [],
      allData: [],
      page: 1,
      maxPages: 0,
      loading: true
    };
  }

  componentDidMount() {
    const { page } = this.state;
    fetchMortys(page).then(response => {
      const { results, info } = response;
      this.setState({
        pageData: results,
        maxPages: info.pages,
        loading: false
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      const { page } = this.state;
      fetchMortys(page).then(response => {
        const { results, info } = response;
        this.setState({
          pageData: results,
          maxPages: info.pages,
          loading: false
        });
      });
    }
  }

  handleNextClick = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
      loading: true
    });
  };

  handlePrevClick = () => {
    const { page } = this.state;
    this.setState({
      page: page - 1,
      loading: true
    });
  };

  handlePageNumberClick = e => {
    this.setState({
      page: Number(e.target.id) + 1
    });
  };

  render() {
    const { pageData, page, maxPages, loading, allData } = this.state;
    return (
      <div>
        <Header />
        {loading ? (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-border text-primary"
              style={{ width: 8 + "rem", height: 8 + "rem" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            <Pagination
              handleNextClick={this.handleNextClick}
              handlePrevClick={this.handlePrevClick}
              handlePageNumberClick={this.handlePageNumberClick}
              page={page}
              maxPages={maxPages}
            />
            <Mortys data={pageData} allData={allData} />
          </div>
        )}
      </div>
    );
  }
}

export default AppContainer;
