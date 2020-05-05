import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import "../stylesheets/Shirtdesigner.css";
import Addelements from "../components/Addelements";
import Editelement from "../components/Editelement";

export default class Shirtdesigner extends Component {
  componentDidMount() {
    window.createCanvas();
    this.resizeCanvas();
    window.onresize = this.resizeCanvas;
    this.canvas = window.canvas;
    this.fabric = window.fabricInstance;

    var textbox = new this.fabric.Textbox("Your Text", {
      left: 50,
      top: 50,
      width: 150,
      fontSize: 20,
      textAlign: "center",
      setColor: "white",
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

    window.fabric.Image.fromURL(
      "https://firebasestorage.googleapis.com/v0/b/shirtdesign.appspot.com/o/shirt1.png?alt=media&token=acfbcb82-2954-495f-9b35-d687fa3ce995",
      (oImg) => {
        oImg.scale(0.5);
        oImg.selectable = false;
        window.canvas.moveTo(oImg, 0);
        window.canvas.centerObject(oImg);
        window.canvas.add(oImg);
        window.canvas.add(textbox);
      }
    );
  }
  resizeCanvas = () => {
    console.log(1);
    const outerCanvasContainer = document.querySelector(".canvas-con");

    const ratio = window.canvas.getWidth() / window.canvas.getHeight();
    const containerWidth = outerCanvasContainer.clientWidth;
    const containerHeight = outerCanvasContainer.clientHeight;

    const scale = containerWidth / window.canvas.getWidth();
    const zoom = window.canvas.getZoom() * scale;
    window.canvas.setDimensions({
      width: containerWidth,
      height: containerWidth / ratio,
    });
    window.canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
  };
  render() {
    return (
      <Container fluid>
        <Grid className="shirt-designer">
          <Grid.Column
            tablet={16}
            computer={8}
            verticalAlign="middle"
            stretched
          >
            <div className="canvas-container">
              <div className="canvas-con">
                <canvas id="sd" height={500} width={500}></canvas>
              </div>
              <div className="canvas-thumbnails">
                <div className="canvas-thumbnail"></div>
                <div className="canvas-thumbnail"></div>
                <div className="canvas-thumbnail"></div>
                <div className="canvas-thumbnail"></div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column tablet={16} computer={8}>
            <div className="design-container">
              <h1 className="design-text">Design</h1>
              <h3 className="design-text-subhead">Create Your Own Design</h3>
              <Addelements />
              <Editelement />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
