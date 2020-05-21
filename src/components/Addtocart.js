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
import { AuthContext } from "../Authcontext";

export default class Addtocart extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = { s: 0, m: 0, l: 0, xl: 0, imagesBlob: [] };
    this.handleCreateAndUpload = this.handleCreateAndUpload.bind(this);
  }
  handleQuantityChange = (e, data) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    const { userDetails } = this.context;
    console.log(userDetails);
  }

  handleCreateAndUpload() {
    this.setState({ imagesBlob: [] });
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
    return (
      <Modal
        dimmer="blurring"
        closeIcon
        size="small"
        onOpen={this.handleCreateAndUpload}
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
                        <Label color="teal"> ₹ 180 each</Label>
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
                        <Label color="teal"> ₹ 190 each</Label>
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
                        <Label color="teal"> ₹ 200 each</Label>
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
                        <Label color="teal"> ₹ 250 each</Label>
                      </Input>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Button color="teal" icon labelPosition="right">
                        Add to Cart
                        <Icon name="cart" />
                      </Button>
                      <Header as="h5" color="teal">
                        *Once added to Cart, design cannot be edited further.
                      </Header>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid>
        </Modal.Content>
      </Modal>
    );
  }
}
