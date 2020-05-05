import React, { Component } from "react";
import { Image, Modal, Search } from "semantic-ui-react";

export default class AddelementSvg extends Component {
  render() {
    return (
      <Modal
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
          </div>
        }
      >
        <Modal.Header>Select SVG</Modal.Header>
        <Modal.Content>
          <h1>Feature to be added!</h1>
        </Modal.Content>
      </Modal>
    );
  }
}
