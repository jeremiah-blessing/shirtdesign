import React, { Component } from "react";
import "../stylesheets/Productelement.css";
import Showaddelement from "./Showaddelement";
import Productelementproduct from "./Productelementproduct";
import Productelementsave from "./Productelementsave";
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
      </div>
    );
  }
}
