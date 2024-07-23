import { Html } from "@react-three/drei";
import React from "react";

export const Overlay = () => {
  return (
    <Html>
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: 40,
          left: 40,
          width: "200px",
          height: "100px",
        }}
      >
        {/* TODO: issue: links are not clickable, find out why */}
        <a
          href="https://github.com/nadjascodejourney"
          style={{ position: "absolute", top: 10, left: 40, fontSize: "130px" }}
        >
          Nadja Probst
        </a>
      </div>
    </Html>
  );
};

export default Overlay;
