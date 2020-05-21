import React, { Component, createContext } from "react";
import db from "./firestoreInstance";

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: false, userDetails: null };
  }
  handleAuth = async (isSignedIn, userDetails) => {
    // HandleIfLogOut
    if (userDetails === null) {
      this.setState({
        isSignedIn: isSignedIn,
        userDetails: userDetails,
      });
    }
    // HandleIfLogIn
    else {
      this.setState({
        isSignedIn: isSignedIn,
        userDetails: userDetails,
      });
    }
  };
  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          handleAuth: this.handleAuth,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
