import React, { Component } from "react";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";

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
            <div className="navbar-nav ml-auto">
              {localStorage.getItem("x-auth") ? (
                <div>
                  Welcome {localStorage.getItem("firstname").toUpperCase()}
                </div>
              ) : (
                <React.Fragment>
                  <SignUpModal />
                  <SignInModal />
                </React.Fragment>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  };
}

export default Header;
