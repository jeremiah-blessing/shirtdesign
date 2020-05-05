import React, { Component } from "react";
import { Menu, Icon, Label } from "semantic-ui-react";

export default class MenuExampleStackable extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <Icon name="settings" size="big" color="teal" />
          Admin
        </Menu.Item>

        <Menu.Item
          name="orders"
          active={activeItem === "orders"}
          onClick={this.handleItemClick}
        >
          <Icon name="boxes" color="teal" />
          Orders
        </Menu.Item>

        <Menu.Item
          name="refunds"
          active={activeItem === "refunds"}
          onClick={this.handleItemClick}
        >
          <Icon name="rupee sign" color="teal" />
          Refunds
        </Menu.Item>
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        >
          <Icon name="mail" color="teal" />
          Messages
        </Menu.Item>

        <Menu.Item
          name="sign-in"
          active={activeItem === "sign-in"}
          onClick={this.handleItemClick}
          position="right"
        >
          Sign-Out
          <Icon style={{ marginLeft: 10 }} name="sign out" color="teal" />
        </Menu.Item>
      </Menu>
    );
  }
}
