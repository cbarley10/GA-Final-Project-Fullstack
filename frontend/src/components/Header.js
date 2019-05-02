import React, { Component } from "react";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rick and Morty Dictionary"
    };
  }

  handleSignOut = e => {
    e.preventDefault();
    console.log(localStorage.getItem("x-auth"));
    let config = {
      headers: {
        "Content-type": "application/json",
        "x-auth": localStorage.getItem("x-auth")
      }
    };
    axios.delete("http://localhost:4000/users/me/token", config).then(res => {
      if (res.status === 200) {
        localStorage.removeItem("x-auth");
        localStorage.removeItem("firstname");
        window.location.reload();
      }
    });
  };

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
                <React.Fragment>
                  <span className="welcome">
                    Welcome {localStorage.getItem("firstname")}!
                  </span>
                  <button onClick={this.handleSignOut}>Logout</button>
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
      </div>
    );
  };
}

export default Header;
