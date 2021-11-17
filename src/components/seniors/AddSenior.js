import React from "react";
import axios from "axios";
import authService from "../auth/auth-service";

class AddSenior extends React.Component {
  state = {
    name: "",
    location: "",
    contact: "",
    imageUrl: "",
    isUploading: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileUpload = (e) => {
    this.setState({ isUploading: true });

    const uploadData = new FormData();

    uploadData.append("imageUrl", e.target.files[0]);

    authService
      .handleUpload(uploadData)
      .then((response) => {
        console.log("response is: ", response);
        this.setState({ imageUrl: response.secure_url, isUploading: false });
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  handleFormSubmit = (event) => {
    // console.log(event);
    event.preventDefault();

    if (this.state.isUploading) {
      setTimeout(() => {
        // console.log("callback....");
        // console.log(event);
        this.handleFormSubmit(event);
      }, 500);
    } else {
      const name = this.state.name;
      const location = this.state.location;
      const contact = this.state.contact;
      const imageUrl = this.state.imageUrl;

      axios
        .post(
          `${process.env.REACT_APP_API_URL}/seniors`,
          {
            name,
            location,
            contact,
            imageUrl,
          },
          { withCredentials: true }
        )
        .then(() => {
          this.props.getData();
          this.props.handleClickButton();
          this.setState({
            name: "",
            location: "",
            contact: "",
            imageUrl: "",
          });
        })
        .catch((error) => console.log("Something went wrong", error));
    }
  };

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
              className="file-upload"
              required
              type="file"
              onChange={(e) => this.handleFileUpload(e)}
            />
          </label>
          {this.state.isUploading && (
            <p className="error-msg">
              Please wait, the image is being uploaded...
            </p>
          )}
          <button>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default AddSenior;
