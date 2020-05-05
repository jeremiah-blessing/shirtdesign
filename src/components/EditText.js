import React, { Component } from "react";
import Colorpicker from "./Colorpicker";

export default class EditText extends Component {
  handleEditIcons = (e) => {
    // alert(e.target.getAttribute("data-action"));
    const clicked = e.target.getAttribute("data-action");
    console.log(window.canvas.getActiveObject());

    switch (clicked) {
      case "bold":
        const currentWeight = window.canvas.getActiveObject().fontWeight;
        if (currentWeight === "bold") {
          window.canvas.getActiveObject().fontWeight = "normal";
        } else {
          window.canvas.getActiveObject().fontWeight = "bold";
        }
        break;
      case "italic":
        const currentStyle = window.canvas.getActiveObject().fontStyle;
        if (currentStyle === "italic") {
          window.canvas.getActiveObject().fontStyle = "normal";
        } else {
          window.canvas.getActiveObject().fontStyle = "italic";
        }
        break;
      case "sizeIncrease":
        window.canvas.getActiveObject().fontSize += 1;
        break;
      case "sizeDecrease":
        window.canvas.getActiveObject().fontSize -= 1;
        break;
      case "alignLeft":
        window.canvas.getActiveObject().textAlign = "left";
        break;
      case "alignCenter":
        window.canvas.getActiveObject().textAlign = "center";
        break;
      case "alignRight":
        window.canvas.getActiveObject().textAlign = "right";
        break;

      default:
        console.log("Error happened");
        break;
    }
    window.canvas.renderAll();
  };
  render() {
    return (
      <div className="edit-icons">
        <Colorpicker />

        <div
          className="edit-icon"
          onClick={this.handleEditIcons}
          data-action="bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M18.287 11.121c1.588-1.121 2.713-3.018 2.713-5.093 0-2.946-1.918-5.951-7.093-6.028h-11.907v2.042c1.996 0 3 .751 3 2.683v14.667c0 1.689-.558 2.608-3 2.608v2h11.123c6.334 0 8.877-3.599 8.877-7.038 0-2.538-1.417-4.67-3.713-5.841zm-8.287-8.121h2.094c2.357 0 4.126 1.063 4.126 3.375 0 2.035-1.452 3.625-3.513 3.625h-2.707v-7zm2.701 18h-2.701v-8h2.781c2.26.024 3.927 1.636 3.927 3.667 0 2.008-1.226 4.333-4.007 4.333z" />
          </svg>
        </div>
        <div
          className="edit-icon"
          onClick={this.handleEditIcons}
          data-action="italic"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9.565 20.827c-.361.732-.068 1.173.655 1.173h1.78v2h-9v-2h.897c1.356 0 1.673-.916 2.157-1.773l8.349-16.89c.403-.852-.149-1.337-.855-1.337h-1.548v-2h9v2h-.84c-1.169 0-1.596.646-2.06 1.516l-8.535 17.311z" />
          </svg>
        </div>
        <div
          className="edit-icon"
          onClick={this.handleEditIcons}
          data-action="sizeDecrease"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ transform: "scale(0.6)", verticalAlign: "bottom" }}
          >
            <path d="M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z" />
          </svg>
        </div>
        <div
          className="edit-icon"
          onClick={this.handleEditIcons}
          data-action="sizeIncrease"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z" />
          </svg>
        </div>
        <div
          className="edit-icon"
          onClick={this.handleEditIcons}
          data-action="alignLeft"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 3h-24v-2h24v2zm-12 3h-12v2h12v-2zm12 5h-24v2h24v-2zm-12 5h-12v2h12v-2zm12 5h-24v2h24v-2z" />
          </svg>
        </div>
        <div
          className="edit-icon"
          onClick={this.handleEditIcons}
          data-action="alignCenter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 3h-24v-2h24v2zm-6 3h-12v2h12v-2zm6 5h-24v2h24v-2zm-6 5h-12v2h12v-2zm6 5h-24v2h24v-2z" />
          </svg>
        </div>
        <div
          className="edit-icon"
          onClick={this.handleEditIcons}
          data-action="alignRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 1h24v2h-24v-2zm12 7h12v-2h-12v2zm-12 5h24v-2h-24v2zm12 5h12v-2h-12v2zm-12 5h24v-2h-24v2z" />
          </svg>
        </div>
      </div>
    );
  }
}
