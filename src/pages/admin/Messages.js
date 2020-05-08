import React, { Component } from "react";
import { Segment, Label } from "semantic-ui-react";

export default class Messages extends Component {
  render() {
    return (
      <>
        <Segment color="teal">
          <Label
            as="a"
            content="tomfrancis@gmail.com"
            icon="mail"
            size="large"
            color="teal"
          />
          <Label
            as="a"
            content="12 March"
            icon="calendar alternate"
            size="large"
            color="teal"
          />

          <Segment secondary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Segment>
        </Segment>
        <Segment color="teal">
          <Label
            as="a"
            content="michaelgota@gmail.com"
            icon="mail"
            size="large"
            color="teal"
          />
          <Label
            as="a"
            content="15 March"
            icon="calendar alternate"
            size="large"
            color="teal"
          />

          <Segment secondary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Segment>
        </Segment>
        <Segment color="teal">
          <Label
            as="a"
            content="bob@gmail.com"
            icon="mail"
            size="large"
            color="teal"
          />
          <Label
            as="a"
            content="1 March"
            icon="calendar alternate"
            size="large"
            color="teal"
          />

          <Segment secondary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Segment>
        </Segment>
      </>
    );
  }
}
