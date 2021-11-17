import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

class UserProfile extends React.Component {
  state = {
    usersSeniors: [],
  };

  getSeniors = () => {
    const helper = this.props.currentUser._id;
    let seniorsAssignedtoUser = [];
    axios
      .get(`${process.env.REACT_APP_API_URL}/seniors`, {
        withCredentials: true,
      })
      .then((seniorsFromAPI) => {
        let allSeniors = seniorsFromAPI.data;
        for (let i = 0; i < allSeniors.length; i++) {
          if (allSeniors[i].helper === helper) {
            seniorsAssignedtoUser.push(allSeniors[i]);
          }
        }
        this.setState({ usersSeniors: seniorsAssignedtoUser });
        console.log(this.props.currentUser);
      });
  };

  //   getAllSeniors = () => {
  //     axios
  //       .get(`http://localhost:5005/api/seniors`)
  //       .then((seniorsFromAPI) => {
  //         return this.setState({ seniorsList: seniorsFromAPI.data });
  //       })
  //       .then(() => this.getSeniorsAssignedToUser());
  //   };

  //   getSeniorsAssignedToUser = () => {
  //     const helper = this.props.currentUser._id;
  //     let allSeniors = this.state.seniorsList;
  //     let seniorsAssignedtoUser = [];

  //     for (let i = 0; i < allSeniors.length; i++) {
  //       if (allSeniors[i].helper === helper) {
  //         seniorsAssignedtoUser.push(allSeniors[i]);
  //       }
  //     }
  //     console.log(seniorsAssignedtoUser);
  //   };

  componentDidMount() {
    this.getSeniors();
  }

  render() {
    let username = this.props.currentUser.username;
    return (
      <div>
        <h2 className="webpage-title">
          Welcome, {username.charAt(0).toUpperCase() + username.slice(1)}!
        </h2>
        <h3 className="webpage-subtitle">People you look after:</h3>
        <div className="seniors-container">
          {this.state.usersSeniors.length > 0 ? (
            this.state.usersSeniors.map((senior, index) => {
              return (
                <div className="single-senior" key={index}>
                  <div>
                    <img src={senior.imageUrl} alt="" />
                  </div>
                  <div>
                    <h3>{senior.name}</h3>
                    <h4>Location: {senior.location}</h4>
                    <h4>Contact: {senior.contact}</h4>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/seniors/${senior._id}`}
                    >
                      <button className="square-button-small">
                        Senior's profile
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <p></p>
          )}
        </div>
      </div>
    );
  }
}

export default UserProfile;
