import React from "react";
import Modal from "react-responsive-modal";
import { signIn } from "../utils/logInAndOut";

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: "",
      password: "",
      firstname: ""
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    signIn(email, password).then(res => {
      const { headers, data } = res;
      localStorage.setItem("x-auth", headers["x-auth"]);
      localStorage.setItem("firstname", data.firstname);
      window.location.reload();
    });

    this.setState({
      email: "",
      password: "",
      open: false
    });
  };

  render() {
    const { open, email, password } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Sign In</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h5 className="modal-title">Sign In</h5>
          <div className="modal-body">
            <form
              action="localhost:4000/user/signin"
              method="POST"
              onSubmit={this.onSubmit}
            >
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  placeholder="example@example.com"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="form-control"
                  placeholder="password"
                  autoComplete="on"
                  onChange={this.onChange}
                />
              </div>
              <input type="submit" className="btn btn-primary" value="submit" />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SignupModal;
