import React from "react";

import happy from ".././images/happy.jpg";

class About extends React.Component {
  render() {
    return (
      <div>
        <h2 className="webpage-title">Welcome!</h2>
        <div className="about">
          <div>
            <img src={happy} alt="" />
          </div>
          <div>
            <h4>This website was created to help seniors in need.</h4>
            <p>
              Sometimes they need material support (e.g. clothes or cosmetics),
              sometimes they need help (with buying food, going to the
              doctor), sometimes all they need is a companion.
            </p>
            <p>
              {" "}
              If you are logged-in you can read details about all the seniors.
            </p>
            <p>
              If you click "I want to help" in the profile of a particular senior
              you will be assigned as their helper, and you will be able to edit their needs. You can add new needs if the senior would like help with something else.
              You can edit a need if something changed. You can
              delete a need if the need has been met.
            </p>
            <h3>Help us change the world today!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
