import React, { Component } from "react";
import "../stylesheets/Editelement.css";
import Fontselector from "./Fontselector";
import EditText from "./EditText";

export default class Editelement extends Component {
  constructor(props) {
    super(props);
    this.state = { editingState: "none" };
  }
  componentDidMount() {
    var listenCanvas;
    if (window.canvas) {
      window.canvas.on("mouse:down", this.handleCanvasClick);
    } else {
      listenCanvas = setInterval(() => {
        if (window.canvas) {
          window.canvas.on("mouse:down", this.handleCanvasClick);
          clearInterval(listenCanvas);
        }
      }, 50);
    }
  }
  handleCanvasClick = (options) => {
    if (options.target) {
      console.log("an object was clicked! ", options.target.type);
      this.setState({ editingState: options.target.type });
    } else {
      this.setState({ editingState: "none" });
    }
  };
  render() {
    return (
      <div className="edit-container">
        <span className="edit">Edit</span>
        <div className="edit-container-in">
          {this.state.editingState === "textbox" ? (
            <>
              {/* <Fontselector /> */}
              <EditText />
            </>
          ) : (
            ""
          )}
          {this.state.editingState === "none" ? (
            <h1 className="sae">Select text / Icon to edit</h1>
          ) : (
            ""
          )}
          {this.state.editingState === "image" ? (
            <h1 className="sae">Select text / Icon to edit</h1>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
