import React, { useState } from "react";
import Addelements from "./Addelements";

export default function Showaddelement() {
  const [show, setShow] = useState(false);
  return (
    <div className="add-product-icon-container add-el">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={() => setShow(!show)}
      >
        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
      </svg>
      <span className="add-product-icon-container-span">Add</span>
      {show ? <Addelements formobile={true} /> : ""}
    </div>
  );
}
