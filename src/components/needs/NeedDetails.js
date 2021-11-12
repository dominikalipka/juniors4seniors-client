import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import EditNeed from "./EditNeed";

class NeedDetails extends React.Component {
  state = {
    title: "",
    description: "",
    buttonForFormClicked: false,
  };

  getNeed = () => {
    const { params } = this.props.match;

    axios
      .get(
        `http://localhost:5005/api/seniors/${params.id}/needs/${params.needId}`
      )
      .then((needFromAPI) => {
        const theNeed = needFromAPI.data;
        this.setState({
          title: theNeed.title,
          description: theNeed.description,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleClickButton = () => {
    this.setState((prevState) => ({
      buttonForFormClicked: !prevState.buttonForFormClicked,
    }));
  };

  deleteNeed = () => {
    const { params } = this.props.match;
    axios
      .delete(
        `http://localhost:5005/api/seniors/${params.id}/needs/${params.needId}`
      )
      .then(() => {
        this.props.history.push(`/seniors/${params.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getNeed();
  }

  render() {
    return (
      <div>
        <div>
          <h3>{this.state.title}</h3>
          <p>{this.state.description}</p>
          <button onClick={this.handleClickButton}>Edit need</button>
          {this.state.buttonForFormClicked === true ? (
            <EditNeed
              handleClickButton={() => this.handleClickButton()}
              theNeed={this.state}
              getData={() => this.getNeed()}
              {...this.props}
            />
          ) : (
            <div></div>
          )}
          <button onClick={() => this.deleteNeed(this.state._id)}>
            Delete need
          </button>
        </div>
        <Link to={`/seniors/${this.props.match.params.id}`}>
          Back to Senior
        </Link>
      </div>
    );
  }
}

export default NeedDetails