import React from "react";
import axios from "axios";

class AddSenior extends React.Component {
    state = {
        name: '',
        location: '',
        contact: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const location = this.state.location;
        const contact = this.state.contact;

        axios
          .post(`http://localhost:5005/api/seniors`, {
            name,
            location,
            contact,
          })
          .then(() => {
            this.props.getData();
            this.props.handleClickButton();
            this.setState({
              name: "",
              location: "",
              contact: "",
            });
          })
          .catch((error) => console.log(error));
    }


    render() {
        return (
          <div>
            <form onSubmit={this.handleFormSubmit}>
              <label>
                Name:
                <input
                  required
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                Location:
                <input
                  required
                  type="text"
                  name="location"
                  value={this.state.location}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                Contact:
                <input
                  required
                  type="text"
                  name="contact"
                  value={this.state.contact}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>

              <button>SUBMIT</button>
            </form>
          </div>
        );
    }
}

export default AddSenior;