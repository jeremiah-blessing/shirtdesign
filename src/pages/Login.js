import React, { Component } from "react";
import { Header, Icon, Button } from "semantic-ui-react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebaseConfig";
import { AuthContext } from "../Authcontext";
import "firebase/auth";

export default class Login extends Component {
  static contextType = AuthContext;
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        window.location.href = "/shirt-designer";
      },
      signInFailure: (error) => {
        alert("Sign in failed!");
      },
    },
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
  handleLogOut = () => {
    firebase.auth().signOut();
  };
  render() {
    const { isSignedIn } = this.context;
    return (
      <div className="login-page">
        {isSignedIn ? (
          <>
            <Header as="h2" icon>
              <Icon name="user" color="teal" />
              You are logged in
              <Header.Subheader>
                Login to Place / Manage Orders
              </Header.Subheader>
            </Header>
            <Button
              color="teal"
              size="huge"
              icon
              labelPosition="right"
              onClick={this.handleLogOut}
            >
              Log out <Icon name="log out" />
            </Button>
          </>
        ) : (
          <>
            <Header as="h2" icon>
              <Icon name="user" color="teal" />
              Login
              <Header.Subheader>
                Login to Place / Manage Orders
              </Header.Subheader>
            </Header>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </>
        )}
      </div>
    );
  }
}
