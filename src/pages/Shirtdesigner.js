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
    this.state = {
      selectedMenu: false,
      editingState: "none",
      currentProduct: "",
      imagesCount: 0,
      imagesLoadedCount: 0,
      allCanvasCreated: false,
      imageLinks: [],
    };
  }
  handleDoneEditing = () => {
    window.canvas.discardActiveObject();
    window.canvas.renderAll();
    this.setState({ editingState: "none" });
  };

  handleCanvasClick = (options) => {
    if (options.target) {
      console.log("an object was clicked! ", options.target.type);
      this.setState({ editingState: options.target.type });
    } else {
      this.setState({ editingState: "none" });
    }
  };
  selectProduct = () => {
    // TODO:Get the product
    // TODO:Simulate getting  a Unique Product
    // Set current Product
    window.currentProduct = "white_shirt";
    var currentProduct = "white_shirt";
    var imageLinks = [
      //"https://firebasestorage.googleapis.com/v0/b/shirtdesign.appspot.com/o/white_shirt%2Ffront.png?alt=media&token=ad26151d-9c58-4732-a6aa-36079168c196",
      //"https://firebasestorage.googleapis.com/v0/b/shirtdesign.appspot.com/o/white_shirt%2Fback.png?alt=media&token=14b23a19-fa9f-440e-951e-2845cc8909b5",
      //"https://firebasestorage.googleapis.com/v0/b/shirtdesign.appspot.com/o/white_shirt%2Fleft.png?alt=media&token=63354f98-350e-4757-a849-99e6eb12d977",
      //"https://firebasestorage.googleapis.com/v0/b/shirtdesign.appspot.com/o/white_shirt%2Fright.png?alt=media&token=9a8aa955-e920-4db6-8f32-5fc31a17f88c",
      "https://jeremiah-blessing.github.io/shirtdesign/front.png",
      "https://jeremiah-blessing.github.io/shirtdesign/back.png",
      "https://jeremiah-blessing.github.io/shirtdesign/left.png",
      "https://jeremiah-blessing.github.io/shirtdesign/right.png",
    ];
    this.setState(
      { currentProduct, imagesCount: imageLinks.length, imageLinks },
      () => {
        if (localStorage.getItem(currentProduct) !== null) {
          this.setState({ allCanvasCreated: true });
        } else {
          localStorage.setItem(currentProduct, "{}");
          imageLinks.forEach((imageLink) => {
            window.fabric.Image.fromURL(imageLink, this.createEmptyCanvas, {
              // crossOrigin: "anonymous",
            });
          });
        }
      }
    );
  };
  createEmptyCanvas = (oImg) => {
    var x = new window.fabric.Canvas("", {
      height: window.canvasWidth,
      width: window.canvasWidth,
      // backgroundColor: "#fe7a88",
      selection: false,
    });
    oImg.left = 0;
    oImg.top = 0;
    oImg.scale(window.canvas.height / oImg.height / 1); //set the ratio here
    oImg.selectable = false;
    oImg.evented = false;
    x.add(oImg);
    x.centerObject(oImg);
    x.renderAll();
    var currentLocalStorage = JSON.parse(
      localStorage.getItem(this.state.currentProduct)
    );

    currentLocalStorage[oImg.getSrc()] = JSON.stringify(
      x.toJSON(["selectable", "evented"])
    );
    localStorage.setItem(
      this.state.currentProduct,
      JSON.stringify(currentLocalStorage)
    );
    this.setState(
      {
        imagesLoadedCount: this.state.imagesLoadedCount + 1,
      },
      () => {
        if (this.state.imagesLoadedCount === this.state.imagesCount) {
          this.setState({ allCanvasCreated: true });
        }
      }
    );
  };
  componentDidMount() {
    window.createCanvas();
    this.canvas = window.canvas;
    this.fabric = window.fabricInstance;

    // Add a event Listner
    function saveCurrentCanvas() {
      console.log("Something chagned");
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
    }
    var listenCanvas;
    if (window.canvas && window.fabricInstance) {
      window.canvas.on("mouse:down", this.handleCanvasClick);
      window.canvas.on("object:added", saveCurrentCanvas);
      window.canvas.on("object:removed", saveCurrentCanvas);
      window.canvas.on("object:modified", saveCurrentCanvas);

      this.selectProduct();
    } else {
      listenCanvas = setInterval(() => {
        if (window.canvas) {
          window.canvas.on("mouse:down", this.handleCanvasClick);
          window.canvas.on("object:added", saveCurrentCanvas);
          window.canvas.on("object:removed", saveCurrentCanvas);
          window.canvas.on("object:modified", saveCurrentCanvas);
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
              {this.state.allCanvasCreated ? (
                <Canvasthumbnails
                  imageLinks={this.state.imageLinks}
                  currentProduct={this.state.currentProduct}
                />
              ) : (
                ""
              )}
            </div>
          </Grid.Column>
          <Grid.Column tablet={16} computer={8}>
            <div className="design-container">
              <h1 className="design-text">Design</h1>
              <h3 className="design-text-subhead">Create Your Own Design</h3>
              {this.state.editingState === "none" ? (
                <Productelement
                  formobile={true}
                  imageLinks={this.state.imageLinks}
                  currentProduct={this.state.currentProduct}
                />
              ) : (
                ""
              )}

              {this.state.editingState !== "none" ? (
                <Editelement
                  editingState={this.state.editingState}
                  formobile={true}
                  handleDoneEditing={this.handleDoneEditing}
                />
              ) : (
                ""
              )}
              <Productelement
                formobile={false}
                imageLinks={this.state.imageLinks}
                currentProduct={this.state.currentProduct}
              />
              <Addelements
                formobile={false}
                setShow={(x = false) => {
                  console.log("From desktop");
                }}
              />
              <Editelement
                editingState={this.state.editingState}
                formobile={false}
              />
            </div>
          </Grid.Column>
        </Grid>
        <div style={{ display: "none" }}>
          <canvas id="canvas-export" height={500} width={500}></canvas>
        </div>
      </Container>
    );
  }
}
