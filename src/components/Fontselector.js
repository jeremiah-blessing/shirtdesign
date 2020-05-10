import React from "react";
import { Popup, Button } from "semantic-ui-react";

export default function Fontselector() {
  const changefont = (fontName) => {
    window.canvas.getActiveObject().fontFamily = fontName;
    window.canvas.renderAll();
    //Save Current Canvas
    var currentCanvasBeforeSaving = JSON.parse(
      localStorage.getItem(window.currentProduct)
    );
    var currentCanvas = window.canvas.toJSON([
      "selectable",
      "evented",
      "transparentCorners",
      "cornerColor",
      "cornerStrokeColor",
      "borderColor",
      "cornerSize",
      "padding",
      "cornerStyle",
      "strokeWidth",
    ]);
    currentCanvasBeforeSaving[window.currentCanvas] = currentCanvas;
    localStorage.setItem(
      window.currentProduct,
      JSON.stringify(currentCanvasBeforeSaving)
    );
  };
  return (
    <Popup
      trigger={
        <div className="edit-icon" data-action="bold">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M18.287 11.121c1.588-1.121 2.713-3.018 2.713-5.093 0-2.946-1.918-5.951-7.093-6.028h-11.907v2.042c1.996 0 3 .751 3 2.683v14.667c0 1.689-.558 2.608-3 2.608v2h11.123c6.334 0 8.877-3.599 8.877-7.038 0-2.538-1.417-4.67-3.713-5.841zm-8.287-8.121h2.094c2.357 0 4.126 1.063 4.126 3.375 0 2.035-1.452 3.625-3.513 3.625h-2.707v-7zm2.701 18h-2.701v-8h2.781c2.26.024 3.927 1.636 3.927 3.667 0 2.008-1.226 4.333-4.007 4.333z" />
          </svg> */}
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="foursquare"
            className="svg-inline--fa fa-foursquare fa-w-12"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 368 512"
          >
            <path d="M323.1 3H49.9C12.4 3 0 31.3 0 49.1v433.8c0 20.3 12.1 27.7 18.2 30.1 6.2 2.5 22.8 4.6 32.9-7.1C180 356.5 182.2 354 182.2 354c3.1-3.4 3.4-3.1 6.8-3.1h83.4c35.1 0 40.6-25.2 44.3-39.7l48.6-243C373.8 25.8 363.1 3 323.1 3zm-16.3 73.8l-11.4 59.7c-1.2 6.5-9.5 13.2-16.9 13.2H172.1c-12 0-20.6 8.3-20.6 20.3v13c0 12 8.6 20.6 20.6 20.6h90.4c8.3 0 16.6 9.2 14.8 18.2-1.8 8.9-10.5 53.8-11.4 58.8-.9 4.9-6.8 13.5-16.9 13.5h-73.5c-13.5 0-17.2 1.8-26.5 12.6 0 0-8.9 11.4-89.5 108.3-.9.9-1.8.6-1.8-.3V75.9c0-7.7 6.8-16.6 16.6-16.6h219c8.2 0 15.6 7.7 13.5 17.5z"></path>
          </svg>
        </div>
      }
      hoverable
      flowing
    >
      <Button.Group vertical basic size="huge">
        <Button
          data-fontname="Anton"
          onClick={(e) => changefont(e.target.innerHTML)}
        >
          <span style={{ fontFamily: "Anton" }}>Anton</span>
        </Button>
        <Button
          data-fontname="Oswald"
          onClick={(e) => changefont(e.target.innerHTML)}
        >
          <span style={{ fontFamily: "Oswald" }}>Oswald</span>
        </Button>
        <Button
          data-fontname="Sacramento"
          onClick={(e) => changefont(e.target.innerHTML)}
        >
          <span style={{ fontFamily: "Sacramento" }}>Sacramento</span>
        </Button>
        <Button
          data-fontname="Caveat Brush"
          onClick={(e) => changefont(e.target.innerHTML)}
        >
          <span style={{ fontFamily: "Caveat Brush" }}>Caveat Brush</span>
        </Button>
        <Button
          data-fontname="Montserrat"
          onClick={(e) => changefont(e.target.innerHTML)}
        >
          <span style={{ fontFamily: "Montserrat" }}>Montserrat</span>
        </Button>
        <Button
          data-fontname="Playfair Display"
          onClick={(e) => changefont(e.target.innerHTML)}
        >
          <span style={{ fontFamily: "Playfair Display" }}>
            Playfair Display
          </span>
        </Button>
      </Button.Group>
    </Popup>
  );
}
