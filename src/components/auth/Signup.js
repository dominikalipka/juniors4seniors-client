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
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Username:
            <input
              required
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password:
            <input
              required
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          {this.state.message ? (<p className='error-msg'>{this.state.message}</p>) : <p></p>}
          <button type="submit"> Signup </button>
        </form>

        <p>
          Already have an account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;