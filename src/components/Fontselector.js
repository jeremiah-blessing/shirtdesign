import React, { Component } from "react";
import { Modal, Image, List, Button } from "semantic-ui-react";

export default class Fontselector extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }
  render() {
    const fonts = [
      "Times New Roman",
      "Roboto",
      "Cinanom",
      "Playfair Display",
      "Lato",
      "Nunito",
    ];
    return (
      <Modal
        trigger={<Button>Select Font</Button>}
        size="mini"
        defaultOpen={this.state.modalOpen}
      >
        <Modal.Header>Select Font</Modal.Header>
        <Modal.Content>
          <List size="huge">
            {fonts.map((font) => (
              <List.Item>
                <List.Content>
                  <button
                    style={{
                      width: "100%",
                      padding: "15px 20px",
                      background: "var(--primary)",
                      color: "white",
                      borderRadius: 5,
                      border: "none",
                      fontFamily: "var(--secondary-txt)",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      this.setState({ modalOpen: !this.state.modalOpen })
                    }
                  >
                    {font}
                  </button>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Modal.Content>
      </Modal>
    );
  }
}
