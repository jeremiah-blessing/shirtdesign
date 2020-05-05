import React, { Component } from "react";
import {
  Container,
  Segment,
  Label,
  Menu,
  Item,
  Grid,
  Icon,
  Header,
  Button,
  Table,
  Image,
  Modal,
  Form,
  Divider,
  Input,
  Dropdown,
} from "semantic-ui-react";
import Navbar from "./Navbar";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "features" };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Navbar />
        <Container>
          <Segment basic>
            <Header as="h2">
              <Icon name="boxes" className="teal" />
              <Header.Content>
                Orders
                <Header.Subheader>Manage your orders</Header.Subheader>
              </Header.Content>
            </Header>
          </Segment>
          <Segment>
            <Grid container stackable>
              <Grid.Column>
                <Label as="a" className="teal">
                  <Icon name="calendar alternate outline" /> 12 March
                </Label>
                <Label as="a" className="teal">
                  <Icon name="rupee" /> Online Payment
                </Label>
              </Grid.Column>
            </Grid>
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
            {/* Individual Order Footer */}
            <Grid stackable container columns={4}>
              <Grid.Column stretched>
                <Modal
                  trigger={
                    <Button icon labelPosition="left" color="orange">
                      <Icon name="rupee" />
                      Issue Refund
                    </Button>
                  }
                  size="tiny"
                >
                  <Modal.Header>Issue Refund [Full / Partial]</Modal.Header>
                  <Modal.Content>
                    <Segment basic textAlign="center">
                      <Input
                        action={{
                          color: "orange",
                          labelPosition: "left",
                          icon: "rupee",
                          content: "Confirm Refund",
                          onClick: () => {
                            console.log(this.icon);
                          },
                          //   loading: true,
                        }}
                        actionPosition="right"
                        defaultValue="100"
                      />
                    </Segment>
                  </Modal.Content>
                </Modal>
              </Grid.Column>
              <Grid.Column stretched>
                <Modal
                  trigger={
                    <Button icon labelPosition="left" color="blue">
                      <Icon name="address card" />
                      Contact Details
                    </Button>
                  }
                >
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content image>
                    <Image
                      wrapped
                      size="medium"
                      src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                    />
                    <Modal.Description>
                      <Header>Default Profile Image</Header>
                      <p>
                        We've found the following gravatar image associated with
                        your e-mail address.
                      </p>
                      <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Grid.Column>
              <Grid.Column stretched>
                <Grid columns={2}>
                  <Grid.Column>
                    <Dropdown
                      defaultValue={{
                        key: "Jenny Hess",
                        text: "Jenny Hess",
                        value: "Jenny Hess",
                      }}
                      //   fluid
                      //   loading
                      selection
                      options={[
                        {
                          key: "Jenny Hess",
                          text: "Jenny Hess",
                          value: "Jenny Hess",
                        },
                        {
                          key: "Elliot Fu",
                          text: "Elliot Fu",
                          value: "Elliot Fu",
                        },
                        {
                          key: "Stevie Feliciano",
                          text: "Stevie Feliciano",
                          value: "Stevie Feliciano",
                        },
                      ]}
                      loading
                    />
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column stretched>
                <Label size="big" color="black">
                  Total{" "}
                  <Label.Detail>
                    <Icon name="rupee" /> 12,000
                  </Label.Detail>
                </Label>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}
