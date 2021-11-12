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
    axios.get(`http://localhost:5005/api/seniors`).then((seniorsFromAPI) => {
      this.setState({ seniorsList: seniorsFromAPI.data,  });
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
        <div>
          {this.state.seniorsList.map((senior) => {
            return (
              <div key={senior._id}>
                <h3>{senior.name}</h3>
                <h4>{senior.location}</h4>
                <Link to={`/seniors/${senior._id}`}>
                  <p>Read more</p>
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <button onClick={this.handleClickButton}>Add new senior</button>
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
      </div>
    );
  }
}

export default SeniorsList