import React from "react";
import { Table, Icon } from "semantic-ui-react";
import Viewdetails from "./Viewdetails";

export default function Orders() {
  return (
    <Table celled striped unstackable color="teal">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>S.No</Table.HeaderCell>
          <Table.HeaderCell>Customer Name</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>
            Amount <Icon name="rupee" />
          </Table.HeaderCell>
          <Table.HeaderCell>Payment</Table.HeaderCell>
          <Table.HeaderCell>More Details</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>John Michael</Table.Cell>
          <Table.Cell>12-05-2019</Table.Cell>
          <Table.Cell>10,500</Table.Cell>
          <Table.Cell>Online</Table.Cell>

          <Table.Cell>
            <Viewdetails />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>Bryan Thomas</Table.Cell>
          <Table.Cell>2-02-2019</Table.Cell>
          <Table.Cell>5,600</Table.Cell>
          <Table.Cell>COD</Table.Cell>

          <Table.Cell>
            <Viewdetails />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>Kevin Michael</Table.Cell>
          <Table.Cell>18-07-2019</Table.Cell>
          <Table.Cell>20,500</Table.Cell>
          <Table.Cell>Online</Table.Cell>

          <Table.Cell>
            <Viewdetails />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
