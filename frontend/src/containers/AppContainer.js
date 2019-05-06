import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Mortys from "../components/Mortys";
import Message from "../components/Message";
import { MAIN_URL } from "../constants";
import { fetchMortys, fetchAllMortys } from "../utils/fetchMortys";
import postMorty from "../utils/addFavorite";
import fetchFavorites from "../utils/fetchFavorites";

let localResults = localStorage.getItem("results");
class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      page: 1,
      maxPages: 0,
      loading: true,
      currentFilter: null,
      userFavorites: false,
      errorMessage: null,
      successMessage: null,
      favoritedItems: []
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
    fetchFavorites().then(res => {
      this.setState({
        favoritedItems: [...res]
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
      loading: true,
      currentFilter: ""
    });
  };

  handlePrevClick = () => {
    const { page } = this.state;
    this.setState({
      page: page - 1,
      loading: true,
      currentFilter: ""
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
    this.setState(
      {
        loading: true,
        currentFilter: selected
      },
      () => {
        setTimeout(() => {
          if (!localStorage.getItem("results")) {
            fetchAllMortys(MAIN_URL, []).then(res => {
              this.setState({
                characters: res.filter(
                  item => item[filterBy].toLowerCase() === selected
                ),
                loading: false
              });
            });
          } else {
            this.setState({
              characters: JSON.parse(localResults).filter(
                item => item[filterBy].toLowerCase() === selected
              ),
              loading: false
            });
          }
        }, 1000);
      }
    );
  };

  handleCardClick = item => {
    const { favoritedItems } = this.state;
    return () => {
      postMorty(item)
        .then(res => {
          if (localStorage.getItem("x-auth")) {
            console.log(res);
            this.setState(
              {
                successMessage: `Success! ${item.name} favorited.`,
                favoritedItems: [...favoritedItems].concat(res.data)
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    successMessage: null
                  });
                }, 3000);
              }
            );
          }
        })
        .catch(err => {
          const { status, statusText } = err.response;

          if (status === 401) {
            this.setState(
              {
                errorMessage: `${statusText}: Sign in or sign up to view favorites!`
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    errorMessage: null
                  });
                }, 3000);
              }
            );
          } else {
            this.setState(
              {
                errorMessage: `${statusText}: Already favorited this item!`
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    errorMessage: null
                  });
                }, 3000);
              }
            );
          }
        });
    };
  };

  handleGetFavorites = () => {
    const { favoritedItems } = this.state;
    this.setState(
      {
        loading: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            characters: [...favoritedItems],
            loading: false,
            userFavorites: true
          });
        }, 1000);
      }
    );
  };

  render() {
    const {
      characters,
      page,
      maxPages,
      loading,
      currentFilter,
      errorMessage,
      successMessage,
      userFavorites,
      favoritedItems
    } = this.state;
    return (
      <div>
        <Header handleGetFavorites={this.handleGetFavorites} />
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
          <React.Fragment>
            <Message
              errorMessage={errorMessage}
              successMessage={successMessage}
            />
            <Pagination
              handleNextClick={this.handleNextClick}
              handlePrevClick={this.handlePrevClick}
              handlePageNumberClick={this.handlePageNumberClick}
              page={page}
              maxPages={maxPages}
              handleFilterChange={this.handleFilterChange}
              currentFilter={currentFilter}
              userFavorites={userFavorites}
            />
            <Mortys
              data={characters}
              handleCardClick={this.handleCardClick}
              favoritedItems={favoritedItems}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default AppContainer;
