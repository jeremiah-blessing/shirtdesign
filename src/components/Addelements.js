import React, { Component } from "react";
import "../stylesheets/Addelements.css";
import { Modal, Image, Button } from "semantic-ui-react";
import AddelementImage from "./AddelementImage";
import AddelementSvg from "./AddelementSvg";
import AddelementText from "./AddelementText";
export default class Addelements extends Component {
  render() {
    return (
      <div className="add-container">
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
