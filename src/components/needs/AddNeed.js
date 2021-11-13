import React from "react";
import axios from "axios";

class AddNeed extends React.Component {
  state = {
    title: "",
    description: "",
    buttonForFormClicked: false,
  };

  toggleForm = () => {
    if (!this.state.buttonForFormClicked) {
      this.setState({ buttonForFormClicked: true });
    } else {
      this.setState({ buttonForFormClicked: false });
    }
  };

  showAddNeedForm = () => {
    if (this.state.buttonForFormClicked) {
      return (
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>
              <input
                placeholder="Title"
                required
                type="text"
                name="title"
                value={this.state.title}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <label>
              <input
                placeholder="Description"
                required
                type="text"
                name="description"
                value={this.state.description}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <button className="square-button-small">Submit</button>
          </form>
        </div>
      );
    }
  };

  handleChange = (event) => {
      const {name, value} = event.target;
      this.setState({[name]: value})
  }

  handleFormSubmit = (event) => {
      event.preventDefault();
      const title = this.state.title;
      const description = this.state.description;
      const seniorId = this.props.theSenior._id;
      axios
        .post(`http://localhost:5005/api/needs`, {
          title,
          description,
          seniorId,
        })
        .then(() => {
          this.props.getSenior();
          this.setState({ title: "", description: "" });
          this.toggleForm()
        })
        .catch((error) => console.log(error));
  } 

  render() {
    return (
      <div>
        <button className="square-button-small" onClick={() => this.toggleForm()}>
          Add new need
        </button>
        {this.showAddNeedForm()}
      </div>
    );
  }
}

export default AddNeed