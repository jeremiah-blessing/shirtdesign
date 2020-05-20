import React, { Component } from "react";
import Divider from "../Divider";
import {
  Image,
  Button,
  Header,
  Icon,
  Grid,
  Input,
  Table,
  Label,
} from "semantic-ui-react";

export default class Cartitem extends Component {
  render() {
    return (
      <>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header inverted as="h1">
              Brown Shirt
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image
              label={{
                as: "a",
                color: "blue",

                content: "View all",
                icon: "th",
                ribbon: true,
                onClick: () => alert(1),
              }}
              rounded
              src="https://www.rushordertees.com/design/ZoomImage.php?src=3082864_f&style=4980&colorCode=00&x=240&y=300&width=880&height=880&scale=1.7&watermark=false"
              size="medium"
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <Table unstackable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Select Sizes</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Input
                      fluid
                      labelPosition="right"
                      type="number"
                      placeholder="Quanitity"
                    >
                      <Label basic>S</Label>
                      <input />
                      <Label> ₹ 180 each</Label>
                    </Input>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Input
                      fluid
                      labelPosition="right"
                      type="number"
                      placeholder="Quanitity"
                    >
                      <Label basic>M</Label>
                      <input />
                      <Label> ₹ 190 each</Label>
                    </Input>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Input
                      fluid
                      labelPosition="right"
                      type="number"
                      placeholder="Quanitity"
                    >
                      <Label basic>L</Label>
                      <input />
                      <Label> ₹ 200 each</Label>
                    </Input>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Input
                      fluid
                      labelPosition="right"
                      type="number"
                      placeholder="Quanitity"
                    >
                      <Label basic>XL</Label>
                      <input />
                      <Label> ₹ 250 each</Label>
                    </Input>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h1" inverted>
              <Icon name="rupee" />
              <Header.Content>
                7500
                <Header.Subheader>Sub Total</Header.Subheader>
              </Header.Content>
            </Header>
            <Button basic inverted icon labelPosition="right">
              Delete Product
              <Icon name="trash alternate" />
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Divider />
      </>
    );
  }
}
