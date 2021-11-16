import React from "react";
import authService from "./auth-service";
import { Link } from 'react-router-dom';


class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    message: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    authService
      .signup(username, password)
      .then((response) => {
        this.setState({
          username: "",
          password: "",
        });
        this.props.getUser(response, true);
      })
      .catch((error) => {
           this.setState({
            message:
              "Password needs to have at least 8 characters and must contain at least one number, one lowercase and one uppercase letter. Username must be unique.",
          });
        console.log(error);
      });
  };

  render() {
    return (
      <div className="center">
        <h3>Sign up</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="txt-field">
            <input
              required
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <span></span>
            <label>Username:</label>
          </div>
          <div className="txt-field">
            <input
              required
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <span></span>
            <label>Password:</label>
          </div>

          {this.state.errorMsg && (
            <p className="error-msg-auth">{this.state.errorMsg}</p>
          )}
          <button type="submit"> Sign up </button>

          <div className="signup-link">
            Already have an account?
            <Link to={"/login"}>Login</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;