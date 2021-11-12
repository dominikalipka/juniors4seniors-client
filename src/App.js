import "./App.css";
import axios from "axios";

import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SeniorsList from "./components/seniors/SeniorsList";
import React from "react";
import SeniorProfile from "./components/seniors/SeniorProfile";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/seniors">
            <SeniorsList />
          </Route>
          <Route exact path="/seniors/:id" component={SeniorProfile}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
