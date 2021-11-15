import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddNeed from "../needs/AddNeed";

class SeniorProfile extends React.Component {
  state = {};

  getSenior = () => {
    const { params } = this.props.match;

    axios
      .get(`http://localhost:5005/api/seniors/${params.id}`)
      .then((seniorFromAPI) => {
        const theSenior = seniorFromAPI.data;
        this.setState(theSenior);
      })
      .catch((err) => {
        console.log(err);
      });      
  };

  assignUserToSenior = () => {
    console.log(this.props.currentUser);
    const helper = this.props.currentUser._id

    const { params } = this.props.match;

    axios
      .put(`http://localhost:5005/api/seniors/${params.id}`, { helper })
      .then(() => this.getSenior())
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSenior();
  }

  render() {
    return (
      <div>
        <div className="senior-profile-container">
          <div className="center-div">
            <img src={this.state.image} alt="" />
            {this.state.helper ? (
              <p></p>
            ) : (
              <button
                onClick={() => this.assignUserToSenior()}
                className="square-button"
              >
                I want to help
              </button>
            )}
          </div>
          <div>
            <h2>{this.state.name}</h2>

            <h4>Location: {this.state.location}</h4>
            <h4>Contact: {this.state.contact}</h4>
            {this.state.needsList && this.state.needsList.length > 0 && (
              <h4>Needs:</h4>
            )}
            {this.state.needsList &&
              this.state.needsList.map((need, index) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/seniors/${this.state._id}/needs/${need._id}`}
                  >
                    <div className="senior-profile-need" key={index}>
                      {need.title}
                    </div>
                  </Link>
                );
              })}
            <div>
              <AddNeed theSenior={this.state} getSenior={this.getSenior} />{" "}
            </div>
          </div>
        </div>

        <div className="increase-bottom-margin">
          <Link
            style={{ textDecoration: "none" }}
            className="form-button"
            to={"/seniors"}
          >
            Back to Seniors
          </Link>
        </div>
      </div>
    );
  }
}

export default SeniorProfile;
