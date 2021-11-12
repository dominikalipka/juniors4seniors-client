import React from "react";
import axios from "axios";

class EditNeed extends React.Component {
    state = {
        title: this.props.theNeed.title,
        description: this.props.theNeed.description
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        const { params } = this.props.match;

        const title = this.state.title;
        const description = this.state.description;

        axios
          .put(
            `http://localhost:5005/api/seniors/${params.id}/needs/${params.needId}`,
            { title, description }
          )
          .then(() => {
            this.props.getData();
            this.props.handleClickButton();
          })
          .catch((error) => console.log(error));


    }

    render() {
        return (
          <div>
            <h4>Edit need:</h4>
            <form onSubmit={this.handleFormSubmit}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>

              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <button>Confirm changes</button>
            </form>
          </div>
        );
    }
}

export default EditNeed