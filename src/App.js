import "./App.css";

import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import SeniorsList from "./components/seniors/SeniorsList";
import React from "react";
import SeniorProfile from "./components/seniors/SeniorProfile";
import NeedDetails from "./components/needs/NeedDetails";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/seniors">
            <SeniorsList />
          </Route>
          <Route exact path="/seniors/:id" component={SeniorProfile}></Route>
          <Route
            exact
            path="/seniors/:id/needs/:needId"
            component={NeedDetails}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
