import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Mortys from "../components/Mortys";
import { MAIN_URL } from "../constants";
import { fetchMortys, fetchAllMortys } from "../utils/fetchMortys";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      page: 1,
      maxPages: 0,
      loading: true,
      currentFilter: ""
    };
  }

  componentDidMount() {
    const { page } = this.state;
    fetchMortys(page).then(response => {
      const { results, info } = response;
      this.setState({
        characters: results,
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
          characters: results,
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
      page: Number(e.target.id) + 1,
      loading: true
    });
  };

  handleFilterChange = e => {
    let selected = e.target.value;
    let filterBy = e.target.id;

    this.setState({
      loading: true,
      currentFilter: selected
    });

    if (filterBy === "species") {
      fetchAllMortys(MAIN_URL, []).then(res => {
        this.setState({
          characters: res.filter(
            item => item.species.toLowerCase() === selected
          ),
          loading: false
        });
      });
    } else {
      fetchAllMortys(MAIN_URL, []).then(res => {
        this.setState({
          characters: res.filter(
            item => item.status.toLowerCase() === selected
          ),
          loading: false
        });
      });
    }
  };

  render() {
    const { characters, page, maxPages, loading, currentFilter } = this.state;
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
              handleFilterChange={this.handleFilterChange}
              currentFilter={currentFilter}
            />
            <Mortys data={characters} />
          </div>
        )}
      </div>
    );
  }
}

export default AppContainer;
