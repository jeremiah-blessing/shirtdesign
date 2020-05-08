import React from "react";
import { Segment, Icon, Modal, Header, Button, Grid } from "semantic-ui-react";
import Productdetails from "./Productdetails";

export default function Viewdetails() {
  return (
    <Modal
      trigger={
        <Button
          content="More Details"
          icon="info"
          labelPosition="right"
          color="teal"
          size="mini"
        />
      }
    >
      <Modal.Header>
        Order ID : 51fd5d42-b756-4545-886c-f192544fc030
      </Modal.Header>
      <Modal.Content>
        <Segment>
          {/* N Number of multiple orders */}
          <Productdetails />
          <Productdetails />
          {/* Other stuffs */}
          <Grid>
            <Grid.Column textAlign="center">
              <Modal
                trigger={
                  <Button icon labelPosition="right" color="blue">
                    <Icon name="address card" />
                    Contact Details
                  </Button>
                }
                size="mini"
              >
                <Modal.Header>Contact Details</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <Header>Tom Markley</Header>
                    <p>
                      10/2, Ranganaathan Street,
                      <br />
                      Jonathan Apartments
                    </p>
                    <p>Tamil Nadu, India</p>
                    <Header as="h5">+91 95663323432</Header>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid>
        </Segment>
      </Modal.Content>
    </Modal>
  );
}
