import React from "react";
import axios from "axios";

class AddSenior extends React.Component {
    state = {
        name: '',
        location: '',
        contact: '',
        image:''
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
        const image = this.state.image

        axios
          .post(`${process.env.REACT_APP_API_URL}/seniors`, {
            name,
            location,
            contact,
            image,
          })
          .then(() => {
            this.props.getData();
            this.props.handleClickButton();
            this.setState({
              name: "",
              location: "",
              contact: "",
              image: "",
            });
          })
          .catch((error) => console.log(error));
    }


    render() {
        return (
          <div>
            <form onSubmit={this.handleFormSubmit}>
              <label>
                
                <input
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                <input
                  placeholder="Location"
                  required
                  type="text"
                  name="location"
                  value={this.state.location}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                <input
                  placeholder="Contact"
                  required
                  type="text"
                  name="contact"
                  value={this.state.contact}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                <input
                  placeholder="Image"
                  required
                  type="text"
                  name="image"
                  value={this.state.image}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>

              <button className="square-button-small">SUBMIT</button>
            </form>
          </div>
        );
    }
}

export default AddSenior;