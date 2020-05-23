import React, { Component } from "react";
import {
  Container,
  Segment,
  Grid,
  Header,
  Button,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import CartItem from "../components/cart/Cartitem";
import "../stylesheets/Cart.css";
import Cartsummary from "../components/cart/Cartsummary";
import db from "../firestoreInstance";
import { AuthContext } from "../Authcontext";

export default class Cart extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = { cartItems: [], loaded: false };
  }
  componentDidMount() {
    const { userDetails } = this.context;
    this.getCartProducts(userDetails.uid);
  }
  deleteCartItem = async (designID) => {
    const { userDetails } = this.context;
    await db
      .collection("cart")
      .doc(userDetails.uid)
      .collection("products")
      .doc(designID)
      .delete();
    this.getCartProducts(userDetails.uid);
  };
  getCartProducts = async (uid) => {
    var cartItems = [];
    const cartProducts = await db
      .collection("cart")
      .doc(uid)
      .collection("products")
      .get();
    cartProducts.forEach((cartProduct) =>
      cartItems.push({ productID: cartProduct.id, ...cartProduct.data() })
    );
    this.setState({ cartItems, loaded: true });
  };
  render() {
    return (
      <div className="cart-page">
        <Container className="cart-container">
          <h1 className="design-text cart-heading">
            Cart {this.state.cartItems.length === 0 ? " is Empty" : ""}
          </h1>
          {this.state.cartItems.length === 0 ? (
            <Button
              icon
              as="a"
              color="teal"
              size="huge"
              style={{ marginTop: 30 }}
            >
              <Link to="/shirt-designer" style={{ color: "#ffffff" }}>
                Go to Designer <Icon name="angle right" />
              </Link>
            </Button>
          ) : (
            <>
              <Segment
                padded
                className="cart-item-segment"
                loading={!this.state.loaded}
              >
                <Grid stackable>
                  {this.state.cartItems.map((cartItem) => (
                    <CartItem
                      product={cartItem}
                      deleteCartItem={this.deleteCartItem}
                    />
                  ))}
                </Grid>
              </Segment>
              <Segment padded basic>
                {/* <Cartsummary /> */}
              </Segment>
            </>
          )}
        </Container>
      </div>
    );
  }
}
