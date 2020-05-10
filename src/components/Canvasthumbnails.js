import React, { Component } from "react";
import { Popup, Grid, Image, Segment } from "semantic-ui-react";

export default class Canvasthumbnails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: "",
    };
  }
  componentDidMount() {
    window.canvas.loadFromJSON(
      JSON.parse(localStorage.getItem(this.props.currentProduct))[
        this.props.imageLinks[0]
      ]
    );
    window.currentCanvas = this.props.imageLinks[0];
    this.setState({ selectedImage: this.props.imageLinks[0] });
  }
  changeImage = (image) => {};
  changeCanvas = (image) => {
    // Save the Current Canvas
    var currentCanvasBeforeSaving = JSON.parse(
      localStorage.getItem(this.props.currentProduct)
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
    currentCanvasBeforeSaving[this.state.selectedImage] = currentCanvas;
    localStorage.setItem(
      this.props.currentProduct,
      JSON.stringify(currentCanvasBeforeSaving)
    );
    // Load the Next Canvas
    window.canvas.loadFromJSON(
      JSON.parse(localStorage.getItem(this.props.currentProduct))[image]
    );

    window.currentCanvas = image;
    this.setState({ selectedImage: image });
  };
  render() {
    return (
      <div className="canvas-thumbnails">
        <Popup
          trigger={
            <div className="canvas-thumbnail">
              <Image src={this.state.selectedImage} size="tiny" />
            </div>
          }
          hoverable
        >
          <Grid columns={2}>
            {this.props.imageLinks.map((imageLink) => (
              <Grid.Column
                key={imageLink}
                data-imageurl={imageLink}
                onClick={(e) => this.changeCanvas(imageLink)}
              >
                <Segment className="canvas-thumbnail-select">
                  <Image src={imageLink} size="small" />
                </Segment>
              </Grid.Column>
            ))}
          </Grid>
        </Popup>
      </div>
    );
  }
}
