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
            <h2>Welcome!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sit amet tristique mi, vel congue diam. Curabitur ac rutrum magna,
              quis mollis nisl. Phasellus porta, lacus lacinia cursus efficitur,
              est sem commodo arcu, id porta urna nulla in risus. Vestibulum
              vitae erat sit amet nisi dignissim fermentum. Sed at pharetra ex,
              quis tristique neque. Integer lacinia non urna quis laoreet.{" "}
            </p>
            <button className="square-button">LOG IN</button>
            <button className="square-button">SIGN UP</button>
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
        <div className="homepage-part-three"></div>
        <div className="homepage-part-four"></div>
      </div>
    );
}

export default Homepage