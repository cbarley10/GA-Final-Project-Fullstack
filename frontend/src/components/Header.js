import React, { Component } from "react";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import { signOut } from "../utils/logInAndOut";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rick and Morty Dictionary"
    };
  }

  handleSignOut = e => {
    e.preventDefault();
    signOut();
  };

  render = () => {
    const { handleGetFavorites } = this.props;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
          <div className="container">
            <a href="/" className="navbar-brand">
              {this.state.name}
            </a>
            <div className="navbar-nav ml-auto">
              {localStorage.getItem("x-auth") ? (
                <React.Fragment>
                  <button
                    onClick={handleGetFavorites}
                    className="btn btn-primary"
                  >
                    View Favorites
                  </button>
                  <span className="welcome">
                    Welcome {localStorage.getItem("firstname")}!
                  </span>
                  <button
                    onClick={this.handleSignOut}
                    className="btn btn-light"
                  >
                    Logout
                  </button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <SignUpModal />
                  <SignInModal />
                </React.Fragment>
              )}
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  };
}

export default Header;
