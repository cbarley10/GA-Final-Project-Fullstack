import React, { Component } from "react";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import { signOut } from "../utils/logInAndOut";
import { Welcome } from "../styled-components/Welcome";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "The App"
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
        <nav
          className="navbar navbar-expand-sm navbar-dark mb-3 py-0"
          style={{
            background:
              "url(https://2static.fjcdn.com/large/pictures/e9/95/e995f5_5964659.jpg)",
            backgroundPosition: "50% 40%",
            backgroundSize: "cover"
          }}
        >
          <div className="container" style={{ zIndex: 1 }}>
            <a href="/" className="navbar-brand">
              <img src="/logo.png" alt="logo" />
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
                  <Welcome>
                    Welcome {localStorage.getItem("firstname")}!
                  </Welcome>
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
