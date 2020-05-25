import React, { Component } from "react";
import {
  Form,
  Container,
  Grid,
  Segment,
  Checkbox,
  Header,
  Button,
  Message,
  Step,
  Icon,
} from "semantic-ui-react";
import Address from "../components/checkout/Address";
import Payment from "../components/checkout/Payment";
import Summary from "../components/checkout/Summary";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutForm: {
        name: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        pincode: "",
        state: "",
        country: "",
      },
      formErrors: false,
      pageState: 2,
    };
  }
  changePageState = (state) => this.setState({ pageState: state });

  handleChange = (e, { name, value }) => {
    const checkoutForm = this.state.checkoutForm;
    checkoutForm[name] = value;
    this.setState({ checkoutForm, formErrors: false });
  };

  handleSubmit = () => {
    const formFields = this.state.checkoutForm;
    var errors = false;
    Object.keys(formFields).forEach((formField) => {
      if (formFields[formField] === "") errors = true;
    });
    if (errors) this.setState({ formErrors: errors });
    else this.setState({ pageState: 2 });
  };

  render() {
    const formErrors = this.state.formErrors;
    return (
      <div
        className="checkout"
        style={{
          minHeight: "100vh",
          paddingTop: 50,
          backgroundColor: "var(--secondary)",
        }}
      >
        <Container>
          <h1 className="design-text cart-heading">Checkout</h1>
          <div style={{ marginTop: 20 }}></div>
          <Grid stackable>
            <Grid.Column width={10}>
              <Segment raised color="teal" padded>
                <Segment basic textAlign="center">
                  <Step.Group stackable="tablet" size="mini" fluid>
                    <Step
                      active={this.state.pageState === 1}
                      disabled={this.state.pageState !== 1}
                      completed={this.state.pageState > 1}
                      link
                    >
                      <Icon name="truck" />
                      <Step.Content>
                        <Step.Title>Shipping</Step.Title>
                        <Step.Description>Enter you Address</Step.Description>
                      </Step.Content>
                    </Step>

                    <Step
                      link
                      active={this.state.pageState === 2}
                      disabled={this.state.pageState !== 2}
                      completed={this.state.pageState > 2}
                    >
                      <Icon name="payment" />
                      <Step.Content>
                        <Step.Title>Billing</Step.Title>
                        <Step.Description>
                          Select Payment Method
                        </Step.Description>
                      </Step.Content>
                    </Step>

                    <Step
                      link
                      active={this.state.pageState === 3}
                      disabled={this.state.pageState !== 3}
                      completed={this.state.pageState > 3}
                    >
                      <Icon name="info" />
                      <Step.Content>
                        <Step.Title>Confirm Order</Step.Title>
                      </Step.Content>
                    </Step>
                  </Step.Group>
                </Segment>
                {this.state.pageState === 1 ? (
                  <Address
                    formErrors={this.state.formErrors}
                    checkoutForm={this.state.checkoutForm}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                  />
                ) : (
                  ""
                )}
                {this.state.pageState === 2 ? (
                  <Payment changePageState={this.changePageState} />
                ) : (
                  ""
                )}
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Summary />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
