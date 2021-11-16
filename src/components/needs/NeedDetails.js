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
        `${process.env.REACT_APP_API_URL}/seniors/${params.id}/needs/${params.needId}`
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
        `${process.env.REACT_APP_API_URL}/seniors/${params.id}/needs/${params.needId}`
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
        <div className="need-container">
          <h3 className="webpage-subtitle">Need: {this.state.title}</h3>
          <p>Details: {this.state.description}</p>
          <div className="need-btns">
            <button
              className="square-button-small"
              onClick={this.handleClickButton}
            >
              Edit need
            </button>
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
            <button
              className="square-button-small"
              onClick={() => this.deleteNeed(this.state._id)}
            >
              Delete need
            </button>
          </div>
        </div>
        <Link to={`/seniors/${this.props.match.params.id}`}>
          <button className="form-button">Back to Senior</button>
        </Link>
      </div>
    );
  }
}

export default NeedDetails