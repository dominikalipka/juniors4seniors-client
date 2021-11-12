import React from "react";
import { Link } from "react-router-dom";

import SeniorsList from "./seniors/SeniorsList";

const Navbar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/seniors" style={{ textDecoration: "none" }}>
              Seniors in need
            </Link>
          </li>
          <li>test2</li>
        </ul>
      </nav>
    );
}

export default Navbar