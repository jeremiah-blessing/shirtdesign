import React, { Component } from "react";
import { Segment, Header, Grid, Button, Icon, Popup } from "semantic-ui-react";

export default class Payment extends Component {
  render() {
    return (
      <Segment basic>
        <Header style={{ fontFamily: "Playfair Display" }} color="teal" as="h1">
          Payment Method
        </Header>
        <div style={{ marginTop: 30 }}></div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Popup
                content="Pay online now in Payment Portal"
                header="Pay Online"
                trigger={
                  <Button labelPosition="left" icon color="teal" size="huge">
                    Pay Online <Icon name="rupee" />
                  </Button>
                }
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Popup
                content="Place the order now and Pay later"
                header="Pay Later"
                trigger={
                  <Button labelPosition="left" icon color="teal" size="huge">
                    Pay later <Icon name="truck" />
                  </Button>
                }
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div style={{ marginTop: 60 }}></div>
        <Button
          labelPosition="left"
          icon
          color="blue"
          basic
          onClick={() => this.props.changePageState(1)}
        >
          Go back <Icon name="arrow left" />
        </Button>
      </Segment>
    );
  }
}
