import React, { Component } from "react";

export default class Editimage extends Component {
  handleEditIcons = (e) => {
    const clicked = e.target.getAttribute("data-action");
    console.log(window.canvas.getActiveObject());
    if (window.canvas.getActiveObject() !== null) {
      switch (clicked) {
        case "delete":
          window.canvas.remove(window.canvas.getActiveObject());
          break;
        case "moveup":
          window.canvas.getActiveObject().bringForward();
          break;
        case "movedown":
          window.canvas.getActiveObject().sendBackwards();
          break;

        default:
          console.log("Error happened");
          break;
      }
      window.canvas.renderAll();
    }
  };
  render() {
    return (
      <div className="edit-icons" style={{ justifyContent: "center" }}>
        <div
          className="edit-icon"
          onClick={this.handleEditIcons}
          data-action="moveup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M 5 2 C 3.355469 2 2 3.355469 2 5 L 2 21 C 2 22.644531 3.355469 24 5 24 L 10 24 L 10 21 C 9.445313 21 9 21.449219 9 22 L 5 22 C 5 21.449219 4.550781 21 4 21 L 4 17 C 4.550781 17 5 16.550781 5 16 C 5 15.449219 4.550781 15 4 15 L 4 11 C 4.550781 11 5 10.550781 5 10 C 5 9.449219 4.550781 9 4 9 L 4 5 C 4.550781 5 5 4.550781 5 4 L 9 4 C 9 4.550781 9.449219 5 10 5 C 10.550781 5 11 4.550781 11 4 L 15 4 C 15 4.550781 15.449219 5 16 5 C 16.550781 5 17 4.550781 17 4 L 21 4 C 21 4.550781 21.449219 5 22 5 L 22 9 C 21.445313 9 21 9.449219 21 10 L 24 10 L 24 5 C 24 3.355469 22.644531 2 21 2 Z M 7 6 C 6.449219 6 6 6.449219 6 7 C 6 7.550781 6.449219 8 7 8 C 7.550781 8 8 7.550781 8 7 C 8 6.449219 7.550781 6 7 6 Z M 13 6 C 12.449219 6 12 6.449219 12 7 C 12 7.550781 12.449219 8 13 8 C 13.550781 8 14 7.550781 14 7 C 14 6.449219 13.550781 6 13 6 Z M 19 6 C 18.449219 6 18 6.449219 18 7 C 18 7.550781 18.449219 8 19 8 C 19.550781 8 20 7.550781 20 7 C 20 6.449219 19.550781 6 19 6 Z M 10 9 C 9.449219 9 9 9.449219 9 10 C 9 10.550781 9.449219 11 10 11 C 10.550781 11 11 10.550781 11 10 C 11 9.449219 10.550781 9 10 9 Z M 16 9 C 15.445313 9 15 9.449219 15 10 L 17 10 C 17 9.449219 16.554688 9 16 9 Z M 7 12 C 6.449219 12 6 12.449219 6 13 C 6 13.550781 6.449219 14 7 14 C 7.550781 14 8 13.550781 8 13 C 8 12.449219 7.550781 12 7 12 Z M 15 12 C 13.355469 12 12 13.355469 12 15 L 12 35 C 12 36.644531 13.355469 38 15 38 L 35 38 C 36.644531 38 38 36.644531 38 35 L 38 15 C 38 13.355469 36.644531 12 35 12 Z M 15 14 L 35 14 C 35.566406 14 36 14.433594 36 15 L 36 35 C 36 35.566406 35.566406 36 35 36 L 15 36 C 14.433594 36 14 35.566406 14 35 L 14 15 C 14 14.433594 14.433594 14 15 14 Z M 10 15 C 9.445313 15 9 15.449219 9 16 C 9 16.550781 9.445313 17 10 17 Z M 7 18 C 6.449219 18 6 18.449219 6 19 C 6 19.550781 6.449219 20 7 20 C 7.550781 20 8 19.550781 8 19 C 8 18.449219 7.550781 18 7 18 Z M 40 26 L 40 29 C 40.554688 29 41 28.550781 41 28 L 45 28 C 45 28.550781 45.449219 29 46 29 L 46 33 C 45.449219 33 45 33.449219 45 34 C 45 34.550781 45.449219 35 46 35 L 46 39 C 45.449219 39 45 39.449219 45 40 C 45 40.550781 45.449219 41 46 41 L 46 45 C 45.449219 45 45 45.449219 45 46 L 41 46 C 41 45.449219 40.550781 45 40 45 C 39.449219 45 39 45.449219 39 46 L 35 46 C 35 45.449219 34.550781 45 34 45 C 33.449219 45 33 45.449219 33 46 L 29 46 C 29 45.449219 28.550781 45 28 45 L 28 41 C 28.554688 41 29 40.550781 29 40 L 26 40 L 26 45 C 26 46.644531 27.355469 48 29 48 L 45 48 C 46.644531 48 48 46.644531 48 45 L 48 29 C 48 27.355469 46.644531 26 45 26 Z M 43 30 C 42.449219 30 42 30.449219 42 31 C 42 31.550781 42.449219 32 43 32 C 43.550781 32 44 31.550781 44 31 C 44 30.449219 43.550781 30 43 30 Z M 40 33 L 40 35 C 40.554688 35 41 34.550781 41 34 C 41 33.449219 40.554688 33 40 33 Z M 43 36 C 42.449219 36 42 36.449219 42 37 C 42 37.550781 42.449219 38 43 38 C 43.550781 38 44 37.550781 44 37 C 44 36.449219 43.550781 36 43 36 Z M 40 39 C 39.449219 39 39 39.449219 39 40 C 39 40.550781 39.449219 41 40 41 C 40.550781 41 41 40.550781 41 40 C 41 39.449219 40.550781 39 40 39 Z M 33 40 C 33 40.550781 33.445313 41 34 41 C 34.554688 41 35 40.550781 35 40 Z M 31 42 C 30.449219 42 30 42.449219 30 43 C 30 43.550781 30.449219 44 31 44 C 31.550781 44 32 43.550781 32 43 C 32 42.449219 31.550781 42 31 42 Z M 37 42 C 36.449219 42 36 42.449219 36 43 C 36 43.550781 36.449219 44 37 44 C 37.550781 44 38 43.550781 38 43 C 38 42.449219 37.550781 42 37 42 Z M 43 42 C 42.449219 42 42 42.449219 42 43 C 42 43.550781 42.449219 44 43 44 C 43.550781 44 44 43.550781 44 43 C 44 42.449219 43.550781 42 43 42 Z"></path>
          </svg>
        </div>
        <div
          className="edit-icon"
          onClick={this.handleEditIcons}
          data-action="movedown"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M 5 2 C 3.355469 2 2 3.355469 2 5 L 2 21 C 2 22.644531 3.355469 24 5 24 L 21 24 C 22.644531 24 24 22.644531 24 21 L 24 5 C 24 3.355469 22.644531 2 21 2 Z M 5 4 L 9 4 C 9 4.550781 9.449219 5 10 5 C 10.550781 5 11 4.550781 11 4 L 15 4 C 15 4.550781 15.449219 5 16 5 C 16.550781 5 17 4.550781 17 4 L 21 4 C 21 4.550781 21.449219 5 22 5 L 22 9 C 21.449219 9 21 9.449219 21 10 C 21 10.550781 21.449219 11 22 11 L 22 15 C 21.449219 15 21 15.449219 21 16 C 21 16.550781 21.449219 17 22 17 L 22 21 C 21.449219 21 21 21.449219 21 22 L 17 22 C 17 21.449219 16.550781 21 16 21 C 15.449219 21 15 21.449219 15 22 L 11 22 C 11 21.449219 10.550781 21 10 21 C 9.449219 21 9 21.449219 9 22 L 5 22 C 5 21.449219 4.550781 21 4 21 L 4 17 C 4.550781 17 5 16.550781 5 16 C 5 15.449219 4.550781 15 4 15 L 4 11 C 4.550781 11 5 10.550781 5 10 C 5 9.449219 4.550781 9 4 9 L 4 5 C 4.550781 5 5 4.550781 5 4 Z M 7 6 C 6.449219 6 6 6.449219 6 7 C 6 7.550781 6.449219 8 7 8 C 7.550781 8 8 7.550781 8 7 C 8 6.449219 7.550781 6 7 6 Z M 13 6 C 12.449219 6 12 6.449219 12 7 C 12 7.550781 12.449219 8 13 8 C 13.550781 8 14 7.550781 14 7 C 14 6.449219 13.550781 6 13 6 Z M 19 6 C 18.449219 6 18 6.449219 18 7 C 18 7.550781 18.449219 8 19 8 C 19.550781 8 20 7.550781 20 7 C 20 6.449219 19.550781 6 19 6 Z M 10 9 C 9.449219 9 9 9.449219 9 10 C 9 10.550781 9.449219 11 10 11 C 10.550781 11 11 10.550781 11 10 C 11 9.449219 10.550781 9 10 9 Z M 16 9 C 15.449219 9 15 9.449219 15 10 C 15 10.550781 15.449219 11 16 11 C 16.550781 11 17 10.550781 17 10 C 17 9.449219 16.550781 9 16 9 Z M 7 12 C 6.449219 12 6 12.449219 6 13 C 6 13.550781 6.449219 14 7 14 C 7.550781 14 8 13.550781 8 13 C 8 12.449219 7.550781 12 7 12 Z M 13 12 C 12.449219 12 12 12.449219 12 13 C 12 13.550781 12.449219 14 13 14 C 13.550781 14 14 13.550781 14 13 C 14 12.449219 13.550781 12 13 12 Z M 19 12 C 18.449219 12 18 12.449219 18 13 C 18 13.550781 18.449219 14 19 14 C 19.550781 14 20 13.550781 20 13 C 20 12.449219 19.550781 12 19 12 Z M 26 12 L 26 14 L 35 14 C 35.566406 14 36 14.433594 36 15 L 36 24 L 38 24 L 38 15 C 38 13.355469 36.644531 12 35 12 Z M 10 15 C 9.449219 15 9 15.449219 9 16 C 9 16.550781 9.449219 17 10 17 C 10.550781 17 11 16.550781 11 16 C 11 15.449219 10.550781 15 10 15 Z M 16 15 C 15.449219 15 15 15.449219 15 16 C 15 16.550781 15.449219 17 16 17 C 16.550781 17 17 16.550781 17 16 C 17 15.449219 16.550781 15 16 15 Z M 7 18 C 6.449219 18 6 18.449219 6 19 C 6 19.550781 6.449219 20 7 20 C 7.550781 20 8 19.550781 8 19 C 8 18.449219 7.550781 18 7 18 Z M 13 18 C 12.449219 18 12 18.449219 12 19 C 12 19.550781 12.449219 20 13 20 C 13.550781 20 14 19.550781 14 19 C 14 18.449219 13.550781 18 13 18 Z M 19 18 C 18.449219 18 18 18.449219 18 19 C 18 19.550781 18.449219 20 19 20 C 19.550781 20 20 19.550781 20 19 C 20 18.449219 19.550781 18 19 18 Z M 12 26 L 12 35 C 12 36.644531 13.355469 38 15 38 L 24 38 L 24 36 L 15 36 C 14.433594 36 14 35.566406 14 35 L 14 26 Z M 29 26 C 27.355469 26 26 27.355469 26 29 L 26 45 C 26 46.644531 27.355469 48 29 48 L 45 48 C 46.644531 48 48 46.644531 48 45 L 48 29 C 48 27.355469 46.644531 26 45 26 Z M 29 28 L 33 28 C 33 28.550781 33.449219 29 34 29 C 34.550781 29 35 28.550781 35 28 L 39 28 C 39 28.550781 39.449219 29 40 29 C 40.550781 29 41 28.550781 41 28 L 45 28 C 45 28.550781 45.449219 29 46 29 L 46 33 C 45.449219 33 45 33.449219 45 34 C 45 34.550781 45.449219 35 46 35 L 46 39 C 45.449219 39 45 39.449219 45 40 C 45 40.550781 45.449219 41 46 41 L 46 45 C 45.449219 45 45 45.449219 45 46 L 41 46 C 41 45.449219 40.550781 45 40 45 C 39.449219 45 39 45.449219 39 46 L 35 46 C 35 45.449219 34.550781 45 34 45 C 33.449219 45 33 45.449219 33 46 L 29 46 C 29 45.449219 28.550781 45 28 45 L 28 41 C 28.550781 41 29 40.550781 29 40 C 29 39.449219 28.550781 39 28 39 L 28 35 C 28.550781 35 29 34.550781 29 34 C 29 33.449219 28.550781 33 28 33 L 28 29 C 28.550781 29 29 28.550781 29 28 Z M 31 30 C 30.449219 30 30 30.449219 30 31 C 30 31.550781 30.449219 32 31 32 C 31.550781 32 32 31.550781 32 31 C 32 30.449219 31.550781 30 31 30 Z M 37 30 C 36.449219 30 36 30.449219 36 31 C 36 31.550781 36.449219 32 37 32 C 37.550781 32 38 31.550781 38 31 C 38 30.449219 37.550781 30 37 30 Z M 43 30 C 42.449219 30 42 30.449219 42 31 C 42 31.550781 42.449219 32 43 32 C 43.550781 32 44 31.550781 44 31 C 44 30.449219 43.550781 30 43 30 Z M 34 33 C 33.449219 33 33 33.449219 33 34 C 33 34.550781 33.449219 35 34 35 C 34.550781 35 35 34.550781 35 34 C 35 33.449219 34.550781 33 34 33 Z M 40 33 C 39.449219 33 39 33.449219 39 34 C 39 34.550781 39.449219 35 40 35 C 40.550781 35 41 34.550781 41 34 C 41 33.449219 40.550781 33 40 33 Z M 31 36 C 30.449219 36 30 36.449219 30 37 C 30 37.550781 30.449219 38 31 38 C 31.550781 38 32 37.550781 32 37 C 32 36.449219 31.550781 36 31 36 Z M 37 36 C 36.449219 36 36 36.449219 36 37 C 36 37.550781 36.449219 38 37 38 C 37.550781 38 38 37.550781 38 37 C 38 36.449219 37.550781 36 37 36 Z M 43 36 C 42.449219 36 42 36.449219 42 37 C 42 37.550781 42.449219 38 43 38 C 43.550781 38 44 37.550781 44 37 C 44 36.449219 43.550781 36 43 36 Z M 34 39 C 33.449219 39 33 39.449219 33 40 C 33 40.550781 33.449219 41 34 41 C 34.550781 41 35 40.550781 35 40 C 35 39.449219 34.550781 39 34 39 Z M 40 39 C 39.449219 39 39 39.449219 39 40 C 39 40.550781 39.449219 41 40 41 C 40.550781 41 41 40.550781 41 40 C 41 39.449219 40.550781 39 40 39 Z M 31 42 C 30.449219 42 30 42.449219 30 43 C 30 43.550781 30.449219 44 31 44 C 31.550781 44 32 43.550781 32 43 C 32 42.449219 31.550781 42 31 42 Z M 37 42 C 36.449219 42 36 42.449219 36 43 C 36 43.550781 36.449219 44 37 44 C 37.550781 44 38 43.550781 38 43 C 38 42.449219 37.550781 42 37 42 Z M 43 42 C 42.449219 42 42 42.449219 42 43 C 42 43.550781 42.449219 44 43 44 C 43.550781 44 44 43.550781 44 43 C 44 42.449219 43.550781 42 43 42 Z"></path>
          </svg>
        </div>
        <div
          className="edit-icon"
          onClick={this.handleEditIcons}
          data-action="delete"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18px"
            height="18px"
          >
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
      </div>
    );
  }
}
