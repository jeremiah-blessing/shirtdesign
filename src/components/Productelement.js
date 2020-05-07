import React, { Component } from "react";
import "../stylesheets/Productelement.css";
import Showaddelement from "./Showaddelement";
import Productelementproduct from "./Productelementproduct";
import Productelementsave from "./Productelementsave";
import Addtocart from "./Addtocart";
export default class Productelement extends Component {
  constructor(props) {
    super(props);
    this.state = { showOptions: false };
  }
  render() {
    return (
      <div
        className={
          this.props.formobile
            ? "add-product-container mobile"
            : "add-product-container pc"
        }
      >
        <Showaddelement />
        <Productelementproduct />
        <Productelementsave />
        <Addtocart />
      </div>
    );
  }
}
