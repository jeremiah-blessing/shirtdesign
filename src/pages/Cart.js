import React, { Component } from "react";
import { Container, Segment, Grid } from "semantic-ui-react";
import CartItem from "../components/cart/Cartitem";
import "../stylesheets/Cart.css";
import Cartsummary from "../components/cart/Cartsummary";
export default class Cart extends Component {
  render() {
    return (
      <div className="cart-page">
        <Container className="cart-container">
          <h1 className="design-text cart-heading">Cart</h1>
          <Segment padded className="cart-item-segment">
            <Grid stackable>
              <CartItem />
              <CartItem />
              <CartItem />
            </Grid>
          </Segment>
          <Segment padded basic>
            {/* <Cartsummary /> */}
          </Segment>
        </Container>
      </div>
    );
  }
}
