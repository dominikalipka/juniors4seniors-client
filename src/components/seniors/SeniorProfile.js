import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddNeed from "../needs/AddNeed";

class SeniorProfile extends React.Component {
    state={};

    getSenior = () => {
        const {params} = this.props.match;

        axios
          .get(`http://localhost:5005/api/seniors/${params.id}`)
          .then((seniorFromAPI) => {
            const theSenior = seniorFromAPI.data;
            this.setState(theSenior);
            console.log(theSenior)
          })
          .catch((err) => {
            console.log(err);
          });
    }

    componentDidMount() {
        this.getSenior()
    }

    render() {
        return (
          <div>
            <div>
              <h2>{this.state.name}</h2>
              <h4>Location: {this.state.location}</h4>
              <h4>Contact: {this.state.contact}</h4>
              {this.state.needsList && this.state.needsList.length > 0 && <h4>Needs:</h4>}
              {this.state.needsList &&
                this.state.needsList.map((need, index) => {
                  return (
                    <div key={index}>
                      <Link to={`/seniors/${this.state._id}/needs/${need._id}`}>
                        {need.title}
                      </Link>
                    </div>
                  );
                })}
            </div>
            <div>
              <AddNeed theSenior={this.state} getSenior={this.getSenior} />{" "}
            </div>
            <div>
              <Link to={"/seniors"}>Back to Seniors</Link>
            </div>
          </div>
        );
    }
}

export default SeniorProfile