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
          <AddelementText />
          <AddelementImage />

          <AddelementSvg />
        </div>
      </div>
    );
  }
}
