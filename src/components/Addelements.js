import React, { Component } from "react";
import "../stylesheets/Addelements.css";
import AddelementImage from "./AddelementImage";
import AddelementSvg from "./AddelementSvg";
import AddelementText from "./AddelementText";
export default class Addelements extends Component {
  render() {
    return (
      <div
        className={
          this.props.formobile ? "add-container mobile" : "add-container pc"
        }
      >
        <span className="add">Add</span>
        <div className="icons-card">
          <AddelementText setShow={this.props.setShow} />
          <AddelementImage setShow={this.props.setShow} />

          <AddelementSvg setShow={this.props.setShow} />
        </div>
      </div>
    );
  }
}
