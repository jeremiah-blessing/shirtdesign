import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebaseConfig";
import "firebase/auth";

export default class Login extends Component {
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/signedIn",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false,
      },
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };
  render() {
    return (
      <div className="login-page">
        <Header as="h2" icon>
          <Icon name="user" color="teal" />
          Login
          <Header.Subheader>Login to Place / Manage Orders</Header.Subheader>
        </Header>
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}
