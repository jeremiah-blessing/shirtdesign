import React from "react";
import { Segment, Header, Icon } from "semantic-ui-react";

export default function Dashboardheading(props) {
  return (
    <Segment basic>
      <Header as="h2">
        <Icon name={props.iconName} className="teal" />
        <Header.Content>
          {props.heading}
          <Header.Subheader>{props.subHeading}</Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
}
