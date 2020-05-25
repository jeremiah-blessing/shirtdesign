import React from "react";
import { Table, Segment, Header, Image, Icon } from "semantic-ui-react";

export default function Summary() {
  const imgUrl = "https://jeremiah-blessing.github.io/shirtdesign/front.png";
  return (
    <Segment raised color="teal" padded>
      <Header style={{ fontFamily: "Playfair Display" }} color="teal" as="h1">
        Order Summary
      </Header>
      <div style={{ marginTop: 30 }}></div>
      <Table basic="very" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">
              <Icon name="rupee" />
              Sub-Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image src={imgUrl} rounded size="mini" />
                <Header.Content>
                  White Shirt
                  <Header.Subheader>S,XL</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell textAlign="right">5200</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image src={imgUrl} rounded size="mini" />
                <Header.Content>
                  White Shirt
                  <Header.Subheader>S,M,L</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell textAlign="right">500</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image src={imgUrl} rounded size="mini" />
                <Header.Content>
                  White Shirt
                  <Header.Subheader>S,M,L,XL</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell textAlign="right">1500</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <div style={{ marginTop: 30 }}></div>
      <Header as="h1" color="teal">
        <Icon name="rupee sign" />
        <Header.Content>
          7,500
          <Header.Subheader>Total</Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
}
