import React, { Component } from "react";
import { Modal, Input, Table, Button, Icon, Image } from "semantic-ui-react";

export default class Addtocart extends Component {
  constructor(props) {
    super(props);
    this.state = { s: 0, m: 0, l: 0, xl: 0 };
  }
  handleQuantityChange = (e, data) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Modal
        dimmer="blurring"
        closeIcon
        size="small"
        trigger={
          <div className="add-product-icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
            </svg>
            <span
              className="add-product-icon-container-span"
              style={{ color: "var(--primary)" }}
            >
              Cart
            </span>
          </div>
        }
      >
        <Modal.Header>Select Sizes</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://cdn.shopify.com/s/files/1/0373/5929/files/size_chart-t-shirt.jpg?v=1536326455"
          />
          <Table unstackable celled color="teal">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Select Sizes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Input
                    type="number"
                    name="s"
                    onChange={this.handleQuantityChange}
                    fluid
                    label={{ basic: true, content: "S" }}
                    labelPosition="left"
                    placeholder="Quantity"
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Input
                    type="number"
                    name="m"
                    onChange={this.handleQuantityChange}
                    fluid
                    label={{ basic: true, content: "M" }}
                    labelPosition="left"
                    placeholder="Quantity"
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Input
                    type="number"
                    name="l"
                    onChange={this.handleQuantityChange}
                    fluid
                    label={{ basic: true, content: "L" }}
                    labelPosition="left"
                    placeholder="Quantity"
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Input
                    type="number"
                    name="xl"
                    onChange={this.handleQuantityChange}
                    fluid
                    label={{ basic: true, content: "XL" }}
                    labelPosition="left"
                    placeholder="Quantity"
                  />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Button color="teal" icon labelPosition="right">
                    Add to Cart
                    <Icon name="cart" />
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Modal.Content>
      </Modal>
    );
  }
}
