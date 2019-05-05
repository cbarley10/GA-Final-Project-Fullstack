import React from "react";
import Modal from "react-responsive-modal";
import addUser from "../utils/addUser";

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      firstname: "",
      lastname: "",
      email: "",
      password: ""
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
    const { firstname, lastname, email, password } = this.state;

    addUser(firstname, lastname, email, password).then(res => {
      const { headers } = res;
      localStorage.setItem("firstname", firstname);
      localStorage.setItem("x-auth", headers["x-auth"]);
      window.location.reload();
    });

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      open: false
    });
  };

  render() {
    const { open, firstname, lastname, email, password } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.onOpenModal}>Sign Up</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h5 className="modal-title">Sign Up</h5>
          <div className="modal-body">
            <form
              action="localhost:4000/user"
              method="POST"
              onSubmit={this.onSubmit}
            >
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  placeholder="First Name"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  placeholder="Last Name"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
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
      </React.Fragment>
    );
  }
}

export default SignupModal;
