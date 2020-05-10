import React, { Component } from "react";
import { Header, Icon } from "semantic-ui-react";

export default class Cache extends Component {
  constructor(props) {
    super(props);
    this.state = { cleared: false };
  }
  componentDidMount() {
    localStorage.clear();
    setTimeout(() => this.setState({ cleared: true }), 2000);
    // this.setState({ cleared: true });
  }
  render() {
    return (
      <div className="dummy">
        <Header as="h2" icon textAlign="center">
          <Icon
            color={this.state.cleared ? "teal" : "black"}
            name={this.state.cleared ? "check" : "clock"}
            circular
          />
          <Header.Content>
            {this.state.cleared ? "Cache Cleared!" : "Clearing Cache.."}
          </Header.Content>
        </Header>
      </div>
    );
  }
}
