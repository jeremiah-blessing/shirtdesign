import React, { Component } from "react";
import "./App.css";
import Dashboard from "./pages/admin/Dashboard";
import Shirtdesigner from "./pages/Shirtdesigner";
import Contact from "./pages/Contact";
import firebase from "./firebaseConfig";
import db from "./firestoreInstance";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { AuthContext } from "./Authcontext";
import { Icon, Header } from "semantic-ui-react";
import Cache from "./pages/Cache";
import Cart from "./pages/Cart";

class App extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = { currentClicked: "" };
    this.handleAuthChange = this.handleAuthChange.bind(this);
  }
  handleAuthChange(status, userDetail) {
    const { handleAuth } = this.context;
    handleAuth(status, userDetail);
  }
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.handleAuthChange(true, user);
      } else {
        this.handleAuthChange(false, null);
      }
    });
  }
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div className="dummy">
              <Header as="h2" icon textAlign="center">
                <Icon name="home" circular />
                <Header.Content>Home Page</Header.Content>
                <Header.Subheader>Milestone 3</Header.Subheader>
              </Header>
            </div>
          </Route>
          <Route exact path="/shirt-designer">
            <Shirtdesigner />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/cache">
            <Cache />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/cart">
            <Cart />
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
