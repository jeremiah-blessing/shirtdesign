import React, { Component } from "react";
import {
  Image,
  Modal,
  Input,
  Segment,
  Placeholder,
  Header,
} from "semantic-ui-react";
import db from "../firestoreInstance";
var searchTimer;
export default class AddelementSvg extends Component {
  constructor(props) {
    super(props);
    this.state = { searching: false, icons: [], modalOpen: false };
  }

  handleSearch = (e, data) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(
      () => this.fetchData(data.value.toLowerCase().split(" ")),
      600
    );
  };
  fetchData = async (keywords) => {
    console.log("OOO");
    this.setState({ searching: true, icons: [] });
    const icons = await db
      .collection("svgs")
      .where("keywords", "array-contains-any", keywords)
      .limit(8)
      .get();
    var tempIcons = [];
    icons.forEach((icon) => tempIcons.push(icon.data().svgValue));
    this.setState({ icons: tempIcons, searching: false });
  };
  addSvgToCanvas = (svg) => {
    window.fabricInstance.loadSVGFromString(svg, function (objects, options) {
      var obj = window.fabricInstance.util.groupSVGElements(objects, options);
      const imageRatio = obj.width / obj.height;
      const canvasWidth = window.canvas.width;
      var finalWidth, finalHeight;
      if (obj.width > obj.height) {
        finalWidth = Math.round(canvasWidth / 6);
        finalHeight = finalWidth / imageRatio;
      } else {
        finalHeight = Math.round(canvasWidth / 6);
        finalWidth = finalHeight * imageRatio;
      }
      obj.scale(finalWidth / obj.width);
      obj.set("fill", "#EB99CC");

      obj.set({
        transparentCorners: false,
        cornerColor: "#a0c7ce",
        cornerStrokeColor: "#a0c7ce",
        borderColor: "#a0c7ce",
        cornerSize: 12,
        padding: 10,
        cornerStyle: "circle",
        strokeWidth: 10,
      });
      obj.left = Math.floor(Math.random() * 150) + 1;
      obj.top = Math.floor(Math.random() * 150) + 1;
      window.canvas.centerObject(obj);
      window.canvas.add(obj);
      window.canvas.renderAll();
    });
  };
  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        dimmer="blurring"
        onOpen={(e, data) => {
          this.setState({ modalOpen: true });
          this.fetchData(["football", "wind", "ghost"]);
        }}
        closeOnDimmerClick={true}
        onClose={() => this.setState({ modalOpen: false })}
        closeIcon
        trigger={
          <div className="icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
            </svg>

            <span>Icon</span>
          </div>
        }
      >
        <Modal.Header>Select Icon</Modal.Header>
        <Modal.Content>
          <Input
            onChange={this.handleSearch}
            loading={this.state.searching}
            icon="search"
            placeholder="Search icons.."
          />
          <Segment basic>
            <Image.Group size="tiny">
              {this.state.searching ? (
                <Placeholder style={{ height: 100, width: 100 }}>
                  <Placeholder.Image />
                </Placeholder>
              ) : (
                ""
              )}
              {this.state.icons.map((icon, index) => {
                // const finalIcon =
                //   icon.slice(0, 5) +
                //   'fill="#fe7a88" ' +
                //   icon.slice(5, icon.length);
                return (
                  <Image
                    key={index}
                    style={{ margin: "10px" }}
                    className="search-image"
                    onClick={(e) => {
                      this.addSvgToCanvas(icon);
                      this.setState({ modalOpen: false });
                    }}
                    src={`data:image/svg+xml;utf8,${icon}`}
                  />
                );
                // return icon;
              })}
              {this.state.icons.length === 0 &&
              this.state.searching !== true ? (
                <Header color="teal" as="h4">
                  No results
                </Header>
              ) : (
                ""
              )}
            </Image.Group>
          </Segment>
        </Modal.Content>
      </Modal>
    );
  }
}
