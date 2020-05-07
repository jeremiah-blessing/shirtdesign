import React, { Component } from "react";
import {
  Container,
  Segment,
  Label,
  Menu,
  Item,
  Grid,
  Icon,
  Header,
  Button,
  Table,
  Image,
  Modal,
  Form,
  Divider,
  Input,
  Dropdown,
  Tab,
} from "semantic-ui-react";
import Navbar from "./Navbar";
import Viewdetails from "./Viewdetails";
import Orders from "./Orders";
import Dashboardheading from "./Dashboardheading";
import Messages from "./Messages";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { activeRoute: "orders" };
    this.properties = {
      orders: {
        icon: "boxes",
        heading: "Orders",
        subHeading: "Manage your orders",
      },
      refunds: {
        icon: "rupee",
        heading: "Refunds",
        subHeading: "Keep track of Refunds",
      },
      messages: {
        icon: "mail",
        heading: "Messages",
        subHeading: "Customer Queries",
      },
    };
  }
  handleNavigation = (name) => this.setState({ activeRoute: name });

  render() {
    const { icon, heading, subHeading } = this.properties[
      this.state.activeRoute
    ];
    return (
      <div>
        <Navbar handleNavigation={this.handleNavigation} />
        <Container>
          <Dashboardheading
            iconName={icon}
            heading={heading}
            subHeading={subHeading}
          />
          {this.state.activeRoute === "orders" ? <Orders /> : ""}
          {this.state.activeRoute === "messages" ? <Messages /> : ""}
        </Container>
      </div>
    );
  }
}
