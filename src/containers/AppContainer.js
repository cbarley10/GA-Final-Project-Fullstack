import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Mortys from "../components/Mortys";
import { fetchMortys } from "../data/fetchMortys";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: [],
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
        myData: results,
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
          myData: results,
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

  render() {
    const { myData, page, maxPages, loading } = this.state;
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
              page={page}
              maxPages={maxPages}
            />
            <Mortys data={myData} />
            <Pagination
              handleNextClick={this.handleNextClick}
              handlePrevClick={this.handlePrevClick}
              page={page}
              maxPages={maxPages}
            />
          </div>
        )}
      </div>
    );
  }
}

export default AppContainer;
