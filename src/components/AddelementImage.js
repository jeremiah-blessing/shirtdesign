import React, { Component } from "react";
import "../stylesheets/AddelementImage.css";
import firebase from "../firebaseConfig";
import "firebase/storage";
import {
  Modal,
  Image,
  Button,
  Label,
  Icon,
  Placeholder,
} from "semantic-ui-react";

export default class AddelementImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initiating: true,
      uploading: false,
      uploadPercent: 0,
      imagesLink: [],
      loadedImagesLink: false,
      modalOpen: false,
    };
  }
  componentDidMount() {}
  getImages = async () => {
    var listRef = firebase.storage().ref("/images/");
    var itemReply = await listRef.listAll();
    var itemRefs = [];
    itemReply.items.forEach(function (itemRef) {
      itemRefs.push(itemRef.location.path);
    });
    var imagesLink = [];
    for (let index = 0; index < itemRefs.length; index++) {
      var downloadUrl = await firebase
        .storage()
        .ref(itemRefs[index])
        .getDownloadURL();
      imagesLink.push(downloadUrl);
    }
    this.setState({ imagesLink, loadedImagesLink: true });
  };
  fileChange = async (e) => {
    this.setState({ uploading: true });
    const file = e.target.files[0];
    const downloadUrl = await this.uploadTaskPromise(file);
    this.setState({
      imagesLink: [...this.state.imagesLink, downloadUrl],
      uploading: false,
    });
  };
  uploadTaskPromise = async (file) => {
    return new Promise(function (resolve, reject) {
      const storageRef = firebase.storage().ref("/images/" + file.name);
      const uploadTask = storageRef.put(file);
      uploadTask.on(
        "state_changed",
        function () {},
        function error(err) {
          console.log("error", err);
          reject();
        },
        function complete() {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            resolve(downloadURL);
          });
        }
      );
    });
  };
  fileInputRef = React.createRef();
  addImageInCanvas = (oImg) => {
    const imageRatio = oImg.width / oImg.height;
    const canvasWidth = window.canvas.width;
    var finalWidth, finalHeight;
    if (oImg.width > oImg.height) {
      finalWidth = Math.round(canvasWidth / 2.5);
      finalHeight = finalWidth / imageRatio;
    } else {
      finalHeight = Math.round(canvasWidth / 2.5);
      finalWidth = finalHeight * imageRatio;
    }
    // var finalImageRatio = finalWidth / finalHeight;
    // console.log("Final ratio csale dowm", imageRatio, finalImageRatio);
    oImg.scale(finalWidth / oImg.width);
    oImg.left = Math.floor(Math.random() * 150) + 1;
    oImg.top = Math.floor(Math.random() * 150) + 1;
    oImg.set({
      transparentCorners: false,
      cornerColor: "#fe7a88",
      cornerStrokeColor: "#fe7a88",
      borderColor: "#fe7a88",
      cornerSize: 12,
      padding: 10,
      cornerStyle: "circle",
    });
    window.canvas.centerObject(oImg);
    window.canvas.add(oImg);
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  render() {
    const images = this.state.imagesLink.map((imageLink, index) => (
      <Image
        rounded
        src={imageLink}
        key={index}
        onClick={(e) => {
          window.fabric.Image.fromURL(e.target.src, this.addImageInCanvas, {
            crossOrigin: "anonymous",
          });
        }}
        className="uploaded-images"
      />
    ));
    return (
      <Modal
        dimmer="blurring"
        closeIcon
        closeOnDimmerClick={true}
        onOpen={this.getImages}
        open={this.state.modalOpen}
        onClose={() => this.setState({ modalOpen: false })}
        trigger={
          <div
            className="icon-container"
            onClick={() => this.setState({ modalOpen: !this.state.modalOpen })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
            </svg>
            <span>Image</span>
          </div>
        }
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <Image.Group size="small">
            {this.state.loadedImagesLink ? (
              images
            ) : (
              <Placeholder style={{ height: 150, width: 150 }}>
                <Placeholder.Image />
              </Placeholder>
            )}
          </Image.Group>
        </Modal.Content>
        <Modal.Content>
          <Button
            content="Upload File"
            labelPosition="left"
            color="teal"
            icon="upload"
            onClick={() => this.fileInputRef.current.click()}
          />
          <input
            ref={this.fileInputRef}
            type="file"
            hidden
            onChange={this.fileChange}
          />
        </Modal.Content>
        <Modal.Content>
          {this.state.uploading ? (
            <Label color="yellow" size="large">
              <Icon name="clock outline" />
              Uploading
            </Label>
          ) : (
            ""
          )}
        </Modal.Content>
      </Modal>
    );
  }
}
