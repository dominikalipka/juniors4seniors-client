import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav>
        <div className='logo'>juniors4seniors</div>
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