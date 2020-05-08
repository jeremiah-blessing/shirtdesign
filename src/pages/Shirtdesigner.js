import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import "../stylesheets/Shirtdesigner.css";
import Addelements from "../components/Addelements";
import Editelement from "../components/Editelement";
import Productelement from "../components/Productelement";
import Canvasthumbnails from "../components/Canvasthumbnails";

export default class Shirtdesigner extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedMenu: false, editingState: "none" }; //OPTIONS: Add new | Select Product [MODAL] | Save [MODAL] | Cart for Size [MODAL]
  }

  handleCanvasClick = (options) => {
    if (options.target) {
      console.log("an object was clicked! ", options.target.type);
      this.setState({ editingState: options.target.type });
    } else {
      this.setState({ editingState: "none" });
    }
  };
  componentDidMount() {
    window.createCanvas();
    this.canvas = window.canvas;
    this.fabric = window.fabricInstance;

    window.fabricInstance.Object.prototype.cornerColor = "blue";
    // PROTOTYPE

    // PROTOTYPE
    // Add a event Listner
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
            <div className="canvas-container" style={{ marginTop: 60 }}>
              <div className="canvas-con">
                <canvas id="sd" height={500} width={500}></canvas>
              </div>
              <Canvasthumbnails />
            </div>
          </Grid.Column>
          <Grid.Column tablet={16} computer={8}>
            <div className="design-container">
              <h1 className="design-text">Design</h1>
              <h3 className="design-text-subhead">Create Your Own Design</h3>
              {this.state.editingState === "none" ? (
                <Productelement formobile={true} />
              ) : (
                ""
              )}

              {this.state.editingState !== "none" ? (
                <Editelement
                  editingState={this.state.editingState}
                  formobile={true}
                />
              ) : (
                ""
              )}
              <Productelement formobile={false} />
              <Addelements formobile={false} />
              <Editelement
                editingState={this.state.editingState}
                formobile={false}
              />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
