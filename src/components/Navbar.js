import React from "react";
import { Link } from "react-router-dom";

import logo from ".././images/logo.png";

const Navbar = () => {
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
          </ul>
        </div>
      </nav>
    );
}

export default Navbar