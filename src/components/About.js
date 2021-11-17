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
              Sometimes they need material support (like clothes or cosmetics),
              sometimes they need help (like with buying food, going to the
              doctor), sometimes all they need is companion.
            </p>
            <p>
              In here, you can find seniors in need who you can help anyhow you
              can and want.
            </p>
            <p>
              {" "}
              If you are logged in, you can read details about all the seniors.
            </p>
            <p>
              If you click "I want to help" in a profile of particular senior,
              you will be assigned as helper and you will be able to edit needs
              of this senior. You can add new needs, if the senior needs
              something new. You can edit a need if something changed. You can
              delete a need if you met that need.
            </p>
            <h3>Help us change the world today!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
