import React from "react";
import { Modal, Header, Icon } from "semantic-ui-react";

export default function Productelementsave() {
  return (
    <Modal
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
      <Modal.Header>Save Design</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header as="h2" icon textAlign="center">
            <Icon name="clock" circular />
            <Header.Content>Save Design</Header.Content>
            <Header.Subheader>Milestone 3</Header.Subheader>
          </Header>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
