import React, { Component } from "react";
import "./App.css";
import Dashboard from "./pages/admin/Dashboard";
import Shirtdesigner from "./pages/Shirtdesigner";
import db from "./firestoreInstance";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentClicked: "" };
  }
  componentDidMount() {
    fetch("/newentry")
      .then((res) => res.json())
  }
  render() {
    return (
      <div className="App">
        <Shirtdesigner />
        {/* <Dashboard /> */}
      </div>
    );
  }
}

export default App;
