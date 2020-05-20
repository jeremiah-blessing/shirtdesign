import React from "react";
import { Table } from "semantic-ui-react";

export default function Cartsummary() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end" }}>
      <h1
        className="design-text cart-heading"
        style={{ marginRight: 15, fontSize: "4rem" }}
      >
        Total
      </h1>
      <h1
        className="design-text cart-heading"
        style={{ fontFamily: "Montserrat" }}
      >
        ₹ 5200
      </h1>
    </div>
  );
}
