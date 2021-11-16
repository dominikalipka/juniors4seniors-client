// auth/Login.js

import React, { Component } from "react";
import authService from "./auth-service";
import { Link } from "react-router-dom";

class Login extends Component {
  state = { username: "", password: "", errorMsg:'' };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    authService
      .login(username, password)
      .then((response) => {
        this.setState({ username: "", password: "", errorMsg: null });
        if (response) {
          this.props.getUser(response, true);
          this.props.history.push("/account");
        } else {
          console.log("login didnt work");
          console.log(response);
          this.setState({ errorMsg: 'Wrong credentials, try again.' });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="center">
        <h3>Login</h3>
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
          <button type="submit"> Login </button>

          <div className="signup-link">
            Don't have an account?
            <Link to={"/signup"}>Signup</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
