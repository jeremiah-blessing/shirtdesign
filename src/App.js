import React, { Component } from "react";
import "./App.css";
import Dashboard from "./pages/admin/Dashboard";
import Shirtdesigner from "./pages/Shirtdesigner";
import db from "./firestoreInstance";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./pages/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentClicked: "" };
  }
  componentDidMount() {
    fetch("/newentry").then((res) => res.json());
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Shirtdesigner />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
