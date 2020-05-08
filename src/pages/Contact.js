import React, { useState } from "react";
import {
  Segment,
  Grid,
  Message,
  Form,
  Button,
  Icon,
  Header,
  Container,
} from "semantic-ui-react";

export default function Contact() {
  const [formState, setFormState] = useState(false);
  return (
    <Container>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon textAlign="center">
            <Icon name="mail" color="teal" />
            Contact Us
            <Header.Subheader>Send your Queries!</Header.Subheader>
          </Header>
          <Form success={formState} size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="your name"
                type="password"
                label="Name"
              />
              <Form.Input
                fluid
                icon="at"
                iconPosition="left"
                placeholder="E-mail address"
                label="E-Mail"
              />

              <Form.Field label="Message" control="textarea" rows="3" />
              <Button
                color="teal"
                fluid
                size="large"
                onClick={() => setFormState(!formState)}
              >
                Send Message
              </Button>
            </Segment>
            <Message
              success
              header="Your message is sent"
              content="you can exit this page"
            />
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
}
