import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Homepage from "./components/Homepage";
import SeniorsList from "./components/seniors/SeniorsList";
import React from "react";
import SeniorProfile from "./components/seniors/SeniorProfile";
import NeedDetails from "./components/needs/NeedDetails";
import UserProfile from "./components/auth/UserProfile";

import authService from "./components/auth/auth-service";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: null,
  };

  getTheUser = (userObj, loggedIn) => {
    this.setState({
      user: userObj,
      isLoggedIn: loggedIn,
    });
  };

  fetchUser = () => {
    if (this.state.user === null) {
      authService
        .loggedin()
        .then((data) => {
          console.log(data);
          if (data) {
            this.setState({
              user: data,
              isLoggedIn: true,
            });
          } else {
            this.setState({
              user: null,
              isLoggedIn: false,
            });
          }
        })
        .catch((err) => {
          this.setState({
            user: null,
            isLoggedIn: false,
          });
        });
    }
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <Navbar
          userData={this.state.user}
          userIsLoggedIn={this.state.isLoggedIn}
          getUser={this.getTheUser}
        />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/signup"
            render={(props) => <Signup {...props} getUser={this.getTheUser} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} getUser={this.getTheUser} />}
          />
          <Route exact path="/seniors">
            <SeniorsList userIsLoggedIn={this.state.isLoggedIn} />
          </Route>
          <Route
            exact
            path="/seniors/:id"
            render={(props) => (
              <SeniorProfile {...props} currentUser={this.state.user} />
            )}
          ></Route>
          <Route
            exact
            path="/seniors/:id/needs/:needId"
            component={NeedDetails}
          ></Route>
          <Route
            exact
            path="/account"
            render={(props) => (
              <UserProfile {...props} currentUser={this.state.user} />
            )}
          ></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
