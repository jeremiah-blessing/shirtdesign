import React, { Component } from "react";
import {
  Modal,
  Input,
  Table,
  Button,
  Icon,
  Image,
  Grid,
  Label,
  Header,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authcontext";
import db from "../firestoreInstance";

export default class Addtocart extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      sizes: [
        { size: "s", price: 120, quantity: 0 },
        { size: "m", price: 160, quantity: 0 },
        { size: "l", price: 190, quantity: 0 },
        { size: "xl", price: 210, quantity: 0 },
      ],
      imagesBlob: [],
      adding: false,
      added: false,
    };
    this.handleCreateImages = this.handleCreateImages.bind(this);
  }

  handleAddToCart = async () => {
    // TODO: Handle upload ing images
    const { userDetails } = this.context;
    this.setState({ adding: true });
    await db
      .collection("cart")
      .doc(userDetails.uid)
      .collection("products")
      .doc(window.currentProduct)
      .set({ details: this.state.sizes });
    this.setState({ adding: false, added: true });
  };

  handleQuantityChange = (e, data) => {
    var tempSizes = this.state.sizes;
    var tempCurrent = tempSizes.map((tempSize) => {
      if (tempSize.size === data.name)
        if (data.value === "") return { ...tempSize, quantity: 0 };
        else return { ...tempSize, quantity: data.value };
      else return tempSize;
    });
    this.setState({ sizes: tempCurrent });
  };

  handleCreateImages() {
    var tempSizes = this.state.sizes.map((tempSize) => {
      return { ...tempSize, quantity: 0 };
    });
    this.setState({
      imagesBlob: [],
      sizes: tempSizes,
    });
    var blobs = [],
      imageLinks = this.props.imageLinks;
    var x = new window.fabric.Canvas("canvas-export", {
      height: window.canvasWidth,
      width: window.canvasWidth,
      selection: false,
    });
    imageLinks.forEach((imageLink) => {
      x.clear();
      x.loadFromJSON(
        JSON.parse(localStorage.getItem(this.props.currentProduct))[imageLink],
        () => {
          blobs.push(x.toDataURL());
          var tempImage = document.createElement("img");
          tempImage.src = x.toDataURL();
          // document.body.appendChild(tempImage);
          this.setState({
            imagesBlob: [...this.state.imagesBlob, x.toDataURL()],
          });
        }
      );
    });
  }
  render() {
    const { isSignedIn } = this.context;

    var total = 0;
    this.state.sizes.forEach((size) => (total += size.quantity * size.price));
    return (
      <Modal
        dimmer="blurring"
        closeIcon
        size={isSignedIn ? "small" : "mini"}
        onOpen={this.handleCreateImages}
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
        {isSignedIn ? (
          <>
            {" "}
            <Modal.Header>Select Sizes</Modal.Header>
            <Modal.Content>
              <Grid stackable columns={2}>
                <Grid.Column>
                  <Image.Group size="small">
                    {this.state.imagesBlob.map((imBlob, index) => (
                      <Image src={imBlob} key={index} />
                    ))}
                  </Image.Group>
                </Grid.Column>
                <Grid.Column>
                  <Table unstackable celled color="teal">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Select Sizes</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {this.state.sizes.map((size) => (
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
                              <input />
                              <Label color="teal"> ₹ {size.price} each</Label>
                            </Input>
                          </Table.Cell>
                        </Table.Row>
                      ))}

                      <Table.Row>
                        <Table.Cell>
                          <Header color="teal">Subtotal : {total} ₹ </Header>
                          <Button
                            onClick={this.handleAddToCart}
                            loading={this.state.adding}
                            color="teal"
                            icon
                            labelPosition="right"
                          >
                            {this.state.added ? "Added!" : "Add to Cart"}
                            <Icon name="cart" />
                          </Button>
                          <Header as="h5" color="teal">
                            *Once added to Cart, design cannot be edited
                            further.
                          </Header>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Grid.Column>
              </Grid>
            </Modal.Content>
          </>
        ) : (
          <>
            <Modal.Header>Log in</Modal.Header>
            <Modal.Content>
              <p>You need to be Logged in to access the Cart!</p>
            </Modal.Content>
            <Modal.Actions>
              <Button size="large" as="a" color="teal">
                <Link style={{ color: "white" }} to="/login">
                  Login
                </Link>
              </Button>
            </Modal.Actions>
          </>
        )}
      </Modal>
    );
  }
}
