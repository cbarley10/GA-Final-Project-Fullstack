import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rick and Morty Dictionary"
    };
  }
  render = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
          <div className="container">
            <a href="/" className="navbar-brand">
              {this.state.name}
            </a>
          </div>
        </nav>
      </div>
    );
  };
}

export default Header;
