import React, { Component } from "react";
import { CirclePicker } from "react-color";
import { Popup } from "semantic-ui-react";

export default class Colorpicker extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedColor: "#a0c7ce" };
  }
  setTextColor = () => {
    window.canvas.getActiveObject().set("fill", this.state.selectedColor);
    window.canvas.renderAll();
    //Save Current Canvas
    var currentCanvasBeforeSaving = JSON.parse(
      localStorage.getItem(window.currentProduct)
    );
    var currentCanvas = window.canvas.toJSON([
      "selectable",
      "evented",
      "transparentCorners",
      "cornerColor",
      "cornerStrokeColor",
      "borderColor",
      "cornerSize",
      "padding",
      "cornerStyle",
      "strokeWidth",
    ]);
    currentCanvasBeforeSaving[window.currentCanvas] = currentCanvas;
    localStorage.setItem(
      window.currentProduct,
      JSON.stringify(currentCanvasBeforeSaving)
    );
  };
  render() {
    return (
      <Popup
        trigger={
          <div
            style={{
              backgroundColor: this.state.selectedColor,
              transition: "all 0.3s ease",
            }}
            className="edit-icon"
          ></div>
        }
        hoverable
        basic
      >
        <CirclePicker
          color={this.state.selectedColor}
          onChange={(color) => this.setState({ selectedColor: color.hex })}
          onChangeComplete={this.setTextColor}
        />
      </Popup>
    );
  }
}
