import React from "react";
import { saveAs } from "file-saver";
import { Icon, Button, Popup } from "semantic-ui-react";

export default function Productelementsave() {
  return (
    <Popup
      style={{
        backgroundColor: "transparent",
        // marginBottom: "-20",
      }}
      inverted
      basic
      hoverable
      trigger={
        <div className="add-product-icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13 3h2.996v5h-2.996v-5zm11 1v20h-24v-24h20l4 4zm-17 5h10v-7h-10v7zm15-4.171l-2.828-2.829h-.172v9h-14v-9h-3v20h20v-17.171z" />
          </svg>
          <span className="add-product-icon-container-span">Save</span>
        </div>
      }
    >
      <Button
        icon
        labelPosition="left"
        // circular
        color="teal"
        style={{
          backgroundColor: "#fe7a88",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
          marginBottom: 17,
        }}
        size="large"
        onClick={() => {
          window.canvas.discardActiveObject();
          window.canvas.renderAll();
          document
            .getElementById("sd")
            .toBlob((blob) =>
              saveAs(
                blob,
                `Shirtdesign-${Math.round(Math.random() * 10000)}.png`
              )
            );
          var x = new window.fabric.Canvas("", {
            height: window.canvasWidth,
            width: window.canvasWidth,
            backgroundColor: "#fe7a88",
            selection: false,
          });
        }}
      >
        <Icon name="download" />
        Download Design
      </Button>
      <Button
        icon
        fluid
        labelPosition="left"
        color="teal"
        style={{
          backgroundColor: "#fe7a88",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.3)",
        }}
        size="large"
      >
        <Icon name="save" />
        Save Design
      </Button>
    </Popup>
  );
}
