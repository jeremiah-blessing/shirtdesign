import React from "react";
import { Modal, Input, Segment, Button, Icon } from "semantic-ui-react";

export default function Issuerefund() {
  return (
    <Modal
      trigger={
        <Button icon labelPosition="left" color="orange" size="mini">
          <Icon name="rupee" />
          Issue Refund
        </Button>
      }
      size="tiny"
    >
      <Modal.Header>Issue Refund [Full / Partial]</Modal.Header>
      <Modal.Content>
        <Segment basic textAlign="center">
          <Input
            action={{
              color: "orange",
              labelPosition: "left",
              icon: "rupee",
              content: "Confirm Refund",
              onClick: () => {
                console.log(this.icon);
              },
              //   loading: true,
            }}
            actionPosition="right"
            defaultValue="100"
          />
        </Segment>
      </Modal.Content>
    </Modal>
  );
}
