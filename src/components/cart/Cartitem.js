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
  Modal,
} from "semantic-ui-react";

export default class Cartitem extends Component {
  constructor(props) {
    super(props);
    this.state = { modalopen: false, changed: false, subtotal: 0, sizes: [] };
  }
  componentDidMount() {
    const { product } = this.props;
    var total = 0;
    product.details.forEach((size) => {
      total += size.price * size.quantity;
    });
    this.setState({ sizes: product.details, subtotal: total });
  }
  handleQuantityChange = (e, data) => {
    var tempSizes = this.state.sizes;
    var tempCurrent = tempSizes.map((tempSize) => {
      if (tempSize.size === data.name)
        if (data.value === "") return { ...tempSize, quantity: 0 };
        else return { ...tempSize, quantity: data.value };
      else return tempSize;
    });
    var total = 0;
    tempCurrent.forEach((size) => {
      total += size.price * size.quantity;
    });
    this.setState({ sizes: tempCurrent, subtotal: total, changed: true });
  };

  render() {
    const { product } = this.props;
    return (
      <>
        <Modal
          open={this.state.modalopen}
          size="small"
          closeOnDimmerClick
          onClose={() => this.setState({ modalopen: false })}
          closeIcon
        >
          <Modal.Header>Designs</Modal.Header>
          <Modal.Content>
            <Image.Group size="medium">
              {product.designs.map((design) => (
                <Image src={design} />
              ))}
            </Image.Group>
          </Modal.Content>
        </Modal>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header inverted as="h1">
              White Shirt
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
                onClick: () => this.setState({ modalopen: true }),
              }}
              rounded
              src={product.designs[0]}
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
                {product.details.map((size) => (
                  <Table.Row key={size.size}>
                    <Table.Cell>
                      <Input
                        fluid
                        labelPosition="right"
                        type="number"
                        name={size.size}
                        placeholder="Quanitity"
                        onChange={this.handleQuantityChange}
                      >
                        <Label basic>{size.size.toUpperCase()}</Label>
                        <input defaultValue={size.quantity} />
                        <Label color="teal"> ₹ {size.price} each</Label>
                      </Input>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h1" inverted>
              <Icon name="rupee" />
              <Header.Content>
                {this.state.subtotal}
                <Header.Subheader>Sub Total</Header.Subheader>
              </Header.Content>
            </Header>
            <Button
              basic
              inverted
              icon
              labelPosition="right"
              onClick={() =>
                this.props.deleteCartItem(this.props.product.productID)
              }
            >
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
