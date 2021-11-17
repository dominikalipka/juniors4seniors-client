import React from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";

import oldWomenImg from ".././images/old-women.png";
import homepage1 from ".././images/homepage-1.png";
import homepage2 from ".././images/homepage-2.png";
import homepage3 from ".././images/homepage-3.png";

class Homepage extends React.Component {

  render() {
  return (
    <div className="homepage">
      <div className="homepage-part-one">
        <div>
          <img src={oldWomenImg} alt="" />
        </div>
        <div className="welcome">
          <h2>Welcome!</h2>
          <p>
            <b>juniors4seniors</b> was created in order to connect seniors in
            need and people that want to provide help for those in need.
          </p>
          <p>
            All of us look after their relatives, but not every senior receives
            the help they need. Let's change that.
          </p>
          <p>
            Join <b>juniors4seniors</b> and make world a better place today!{" "}
          </p>
          {!this.props.userIsLoggedIn && (
            <div className='homepage-auth'>
              <Link style={{ textDecoration: "none" }} to="/signup">
                <button className="square-button">Sign up</button>
              </Link>

              <Link style={{ textDecoration: "none" }} to="/login">
                <button className="square-button">Log in</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="homepage-part-two">
        <h3>Sharing is caring</h3>
        <div>
          <div className="homepage-part-two-container">
            <img src={homepage1} alt="" />
            <h4>Log in to your account</h4>
          </div>
          <div className="homepage-part-two-container">
            <img src={homepage2} alt="" />
            <h4>Find senior in need near you</h4>
          </div>
          <div className="homepage-part-two-container">
            <img src={homepage3} alt="" />
            <h4>Share, care, love</h4>
          </div>
        </div>
      </div>
      <div className="homepage-part-three">
        <Footer></Footer>
      </div>
    </div>
  );
  }

}

export default Homepage;
