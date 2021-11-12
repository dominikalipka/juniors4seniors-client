import React from "react";

import oldWomenImg from ".././images/old-women.png";
import homepage1 from ".././images/homepage-1.png";
import homepage2 from ".././images/homepage-2.png";
import homepage3 from ".././images/homepage-3.png";

function Homepage () {
    return (
      <div className="homepage">
        <div className="homepage-part-one">
          <div>
            <img src={oldWomenImg} alt="" />
          </div>
          <div className="welcome">
              <h2>Some text about the website</h2>
              <p>button to login</p>
              <p>button to signup</p>

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
              <h4>Share, share, share</h4>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Homepage