import React from "react";

function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none", // This is to prevent the overlay from blocking the mouse events; pointer events are not allowed on the overlay, this means that the overlay will not block the mouse events from reaching the elements below it (the Three.js scene) // pointerevents can have the following values: auto, none, initial, inherit

        width: "100%",
        height: "100%",
      }}
    >
      <p
        style={{ position: "absolute", bottom: 40, left: 90, fontSize: "13px" }}
      >
        Daylight
      </p>
      <div
        style={{ position: "absolute", top: 40, left: 40, fontSize: "13px" }}
      >
        {/* TODO: issue: links are not clickable, find out why */}
        <a
          href="https://github.com/nadjascodejourney"
          style={{ position: "absolute", top: 10, left: 40, fontSize: "13px" }}
        >
          Nadja Probst
        </a>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: "13px",
        }}
      >
        Scroll <span>---------</span>{" "}
        {/* TODO: create a dynamic Scrollline-Component to show scrollprogress */}
      </div>
    </div>
  );
}

export default Overlay;
