import React, { Component } from "react";
import { Header, Form, Segment, Message, Icon } from "semantic-ui-react";

export default class Address extends Component {
  render() {
    const {
      name,
      email,
      phone,
      address1,
      address2,
      city,
      pincode,
      state,
      country,
    } = this.props.checkoutForm;
    const formErrors = this.props.formErrors;
    return (
      <Segment basic>
        <Header style={{ fontFamily: "Playfair Display" }} color="teal" as="h1">
          Address Details
        </Header>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Input
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.props.handleChange}
            label="Full Name"
          />
          <Form.Group widths={2}>
            <Form.Input
              placeholder="Your E-mail"
              name="email"
              value={email}
              onChange={this.props.handleChange}
              label="E-mail"
            />
            <Form.Input
              placeholder="Your Contact number"
              name="phone"
              value={phone}
              onChange={this.props.handleChange}
              label="Contact"
            />
          </Form.Group>
          <Form.Input
            placeholder="Line 1"
            name="address1"
            value={address1}
            onChange={this.props.handleChange}
            label="Address"
          />
          <Form.Input
            placeholder="Line 2"
            name="address2"
            value={address2}
            onChange={this.props.handleChange}
          />
          <Form.Group widths={2}>
            <Form.Input
              placeholder="City / Town"
              name="city"
              value={city}
              onChange={this.props.handleChange}
              label="City / Town"
            />{" "}
            <Form.Input
              placeholder="Pincode"
              name="pincode"
              value={pincode}
              onChange={this.props.handleChange}
              label="Pincode"
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              placeholder="State"
              name="state"
              value={state}
              onChange={this.props.handleChange}
              label="State"
            />{" "}
            <Form.Input
              placeholder="Country"
              name="country"
              value={country}
              onChange={this.props.handleChange}
              label="Country"
            />
          </Form.Group>
          {formErrors ? (
            <Message
              negative
              icon="warning sign"
              header="Oops!"
              content="Did you enter all the Fields?"
            />
          ) : (
            ""
          )}

          <Form.Button color="teal" type="submit" labelPosition="right" icon>
            Submit and Go to Billing <Icon name="arrow right" />
          </Form.Button>
        </Form>
      </Segment>
    );
  }
}
