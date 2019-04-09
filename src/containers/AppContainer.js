import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Mortys from "../components/Mortys";
import { fetchMortys } from "../data/fetchMortys";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: []
    };
  }

  componentDidMount() {
    let mainUrl = `https://rickandmortyapi.com/api/character?page=1`;
    fetchMortys(mainUrl).then(response => {
      this.setState({
        myData: response
      });
    });
  }

  render() {
    const { myData } = this.state;
    return (
      <div>
        <Header />
        <Mortys data={myData} />
        <Pagination />
      </div>
    );
  }
}

export default AppContainer;
