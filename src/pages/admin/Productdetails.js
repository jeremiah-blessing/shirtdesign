import React, { Component } from "react";
import { Grid, Table, Image, Button, Icon } from "semantic-ui-react";

export default class Productdetails extends Component {
  render() {
    return (
      <Grid stackable container>
        <Grid.Column width={4}>
          <Image
            src="https://react.semantic-ui.com/images/wireframe/image.png"
            fluid
            rounded
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Table unstackable color="teal">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Size</Table.HeaderCell>
                <Table.HeaderCell>Nos.</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>M</Table.Cell>
                <Table.Cell>30</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>L</Table.Cell>
                <Table.Cell>15</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>XL</Table.Cell>
                <Table.Cell>20</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column width={6}>
          <Grid stackable columns={1}>
            <Grid.Column>
              <Button icon labelPosition="right" color="teal">
                <Icon name="download" />
                Download Assets
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button icon labelPosition="right" color="teal">
                <Icon name="image" />
                View Design
              </Button>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}
