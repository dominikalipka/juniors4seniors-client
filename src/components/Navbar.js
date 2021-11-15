import React from "react";
import { Link } from "react-router-dom";
import authService from "./auth/auth-service";

import logo from ".././images/logo.png";

class Navbar extends React.Component {
  logoutUser = () => {
    authService.logout().then(() => {
      this.props.getUser(null, false);
    });
  };

  render() {
    const { userData, userIsLoggedIn } = this.props;

    if (userData !== null && userData !== undefined) {
      return (
        <nav>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo">
              <img src={logo} alt="logo" />
              juniors4seniors
            </div>
          </Link>
          <div>
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/seniors" style={{ textDecoration: "none" }}>
                  Seniors in need
                </Link>
              </li>
              <li>
                <Link to="/account" style={{ textDecoration: "none" }}>
                  My account
                </Link>
              </li>
              <li>
                <button className="nav-auth" onClick={() => this.logoutUser()}>
                  <Link style={{ textDecoration: "none" }} to="/">
                    Log out
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo">
              <img src={logo} alt="logo" />
              juniors4seniors
            </div>
          </Link>
          <div>
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/seniors" style={{ textDecoration: "none" }}>
                  Seniors in need
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/login">
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}

export default Navbar;
