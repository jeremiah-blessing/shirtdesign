import React, { Component } from "react";
import { CirclePicker } from "react-color";
import { Popup } from "semantic-ui-react";

export default class Colorpicker extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedColor: "#a0c7ce" };
  }
  setTextColor = () => {
    console.log(window.canvas.getActiveObject());
    window.canvas.getActiveObject().set("fill", this.state.selectedColor);
    window.canvas.renderAll();
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
