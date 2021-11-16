import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddSenior from "./AddSenior";

class SeniorsList extends React.Component {
  state = {
    seniorsList: [],
    buttonForFormClicked: false,
  };

  getAllSeniors = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/seniors`, {
        withCredentials: true,
      })
      .then((seniorsFromAPI) => {
        this.setState({ seniorsList: seniorsFromAPI.data });
        console.log(seniorsFromAPI);
      });
  };

  handleClickButton = () => {
    this.setState((prevState) => ({
      buttonForFormClicked: !prevState.buttonForFormClicked,
    }));
  };

  componentDidMount() {
    this.getAllSeniors();
  }
  render() {
    return (
      <div>
        <h2 className="webpage-title">Seniors in need</h2>
        <div>
          {this.props.userIsLoggedIn === true ? (
            <button className="form-button" onClick={this.handleClickButton}>
              Add new senior
            </button>
          ) : (
            <div><p className='error-msg'>In order to read more information about seniors, please log in.</p></div>
          )}

          <div>
            {this.state.buttonForFormClicked === true ? (
              <AddSenior
                handleClickButton={() => this.handleClickButton()}
                getData={() => this.getAllSeniors()}
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="seniors-list-container">
          {this.state.seniorsList.map((senior) => {
            return (
              <div key={senior._id}>
                <img src={senior.image} alt="" />
                <h3>{senior.name}</h3>
                <h4>{senior.location}</h4>
                {this.props.userIsLoggedIn === true ? (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/seniors/${senior._id}`}
                  >
                    <p className="square-button">Read more</p>
                  </Link>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SeniorsList