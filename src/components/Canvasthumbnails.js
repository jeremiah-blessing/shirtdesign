import React, { Component } from "react";
import { Popup, Grid, Image, Segment, Modal } from "semantic-ui-react";

export default class Canvasthumbnails extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedUrl: "front.png" };
  }
  componentDidMount() {
    window.fabric.Image.fromURL(this.state.selectedUrl, (oImg) => {
      oImg.left = 0;
      oImg.top = 0;
      oImg.scale(window.canvas.height / oImg.height / 1.5);
      oImg.selectable = false;
      oImg.evented = false;
      //   window.canvas.moveTo(oImg, 0);
      window.canvas.add(oImg);
      window.canvas.centerObject(oImg);
      window.canvas.renderAll();
      var textbox = new window.fabric.Textbox("Your Text", {
        left: 250,
        top: 250,
        width: 150,
        fontSize: 20,
        textAlign: "center",
        fill: "#000000",
      });
      textbox.set({
        transparentCorners: false,
        cornerColor: "#a0c7ce",
        cornerStrokeColor: "#a0c7ce",
        borderColor: "#a0c7ce",
        cornerSize: 12,
        padding: 10,
        cornerStyle: "circle",
        borderDashArray: [3, 3],
      });
      window.canvas.centerObject(textbox);
      window.canvas.add(textbox);
      window.canvas.renderAll();
    });
    // this.changeImage(this.state.selectedUrl);
  }
  changeImage = (image) => {
    window.canvas.clear();

    window.canvas.backgroundColor = "#fe7a88";
    window.fabric.Image.fromURL(image, (oImg) => {
      oImg.scale(window.canvas.height / oImg.height / 1.5);
      oImg.selectable = false;
      oImg.evented = false;
      window.canvas.moveTo(oImg, 0);
      window.canvas.add(oImg);
      window.canvas.centerObject(oImg);
    });
    this.setState({ selectedUrl: image });
  };
  render() {
    return (
      <div className="canvas-thumbnails">
        <Popup
          trigger={
            <div className="canvas-thumbnail">
              <Image src={this.state.selectedUrl} size="tiny" />
            </div>
          }
          hoverable
        >
          <Grid columns={2}>
            <Grid.Column>
              <Segment
                onClick={() => this.changeImage("front.png")}
                className="canvas-thumbnail-select"
              >
                <Image src="/front.png" size="small" />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment
                onClick={() => this.changeImage("back.png")}
                className="canvas-thumbnail-select"
              >
                <Image src="/back.png" size="small" />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment
                onClick={() => this.changeImage("left.png")}
                className="canvas-thumbnail-select"
              >
                <Image src="/left.png" size="small" />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment
                onClick={() => this.changeImage("right.png")}
                className="canvas-thumbnail-select"
              >
                <Image src="/right.png" size="small" />
              </Segment>
            </Grid.Column>
          </Grid>
        </Popup>
      </div>
    );
  }
}
