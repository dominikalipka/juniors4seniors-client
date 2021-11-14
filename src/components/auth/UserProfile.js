import React from "react";
import axios from "axios";

class UserProfile extends React.Component {
  state = {
    seniorsList: [],
  };
  getAllSeniors = () => {
    axios
      .get(`http://localhost:5005/api/seniors`)
      .then((seniorsFromAPI) => {
        return this.setState({ seniorsList: seniorsFromAPI.data });
      })
      .then(() => this.getSeniorsAssignedToUser());
  };

  getSeniorsAssignedToUser = () => {
    const helper = this.props.currentUser._id;
    let allSeniors = this.state.seniorsList;
    let seniorsAssignedtoUser = [];

    for (let i = 0; i < allSeniors.length; i++) {
      if (allSeniors[i].helper === helper) {
         seniorsAssignedtoUser.push(allSeniors[i]);
      }
    }
    console.log(seniorsAssignedtoUser);
  };

  render() {
    return (
      <div>
        Hello
        <button onClick={this.getAllSeniors}></button>
      </div>
    );
  }
}

export default UserProfile;
