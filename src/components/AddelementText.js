import React from "react";

export default function AddelementText() {
  const Addtext = () => {
    var textbox = new window.fabric.Textbox("Your Text", {
      left: Math.floor(Math.random() * 200) + 1,
      top: Math.floor(Math.random() * 200) + 1,
      width: 150,
      fontSize: 20,
      textAlign: "center",
      fill: "#000000",
    });
    textbox.set({
      transparentCorners: false,
      cornerColor: "#fe7a88",
      cornerStrokeColor: "#fe7a88",
      borderColor: "#fe7a88",
      cornerSize: 12,
      padding: 10,
      cornerStyle: "circle",
      strokeWidth: 10,
    });
    window.canvas.centerObject(textbox);
    window.canvas.add(textbox).setActiveObject(textbox);
  };
  return (
    <div className="icon-container" onClick={Addtext}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M24 20v1h-4v-1h.835c.258 0 .405-.178.321-.422l-.473-1.371h-2.231l-.575-1.59h2.295l-1.362-4.077-1.154 3.451-.879-2.498.921-2.493h2.222l3.033 8.516c.111.315.244.484.578.484h.469zm-6-1h1v2h-7v-2h.532c.459 0 .782-.453.633-.887l-.816-2.113h-6.232l-.815 2.113c-.149.434.174.887.633.887h1.065v2h-7v-2h.43c.593 0 1.123-.375 1.32-.935l5.507-15.065h3.952l5.507 15.065c.197.56.69.935 1.284.935zm-10.886-6h4.238l-2.259-6.199-1.979 6.199z" />
      </svg>

      <span>Text</span>
    </div>
  );
}
