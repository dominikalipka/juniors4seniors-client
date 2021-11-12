import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SeniorProfile extends React.Component {
    state={};

    getSenior = () => {
        const {params} = this.props.match;

        axios
          .get(`http://localhost:5005/api/seniors/${params.id}`)
          .then((seniorFromAPI) => {
            const theSenior = seniorFromAPI.data;
            this.setState(theSenior);
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
              <h4>{this.state.location}</h4>
              <h4>{this.state.contact}</h4>
            </div>
            <div>
              <Link to={"/seniors"}>Back to Seniors</Link>
            </div>
          </div>
        );
    }
}

export default SeniorProfile