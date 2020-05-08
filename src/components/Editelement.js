import React, { Component } from "react";
import "../stylesheets/Editelement.css";
import EditText from "./EditText";
import Editimage from "./Editimage";
import Editsvg from "./Editsvg";

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
      <div
        className={
          this.props.formobile === false
            ? "edit-container pc"
            : "edit-container mobile"
        }
      >
        <span className="edit">Edit</span>
        <div className="edit-container-in">
          {this.props.editingState === "textbox" ? (
            <>
              <EditText />
            </>
          ) : (
            ""
          )}
          {this.props.editingState === "none" ? (
            <h1 className="sae">Select Something</h1>
          ) : (
            ""
          )}
          {this.props.editingState === "image" ? <Editimage /> : ""}
          {this.props.editingState === "path" ? <Editsvg /> : ""}
        </div>
      </div>
    );
  }
}
