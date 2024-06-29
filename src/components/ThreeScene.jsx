import { useRef, useEffect, useState } from "react";
import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import LandingPage from "../pages/LandingPage";
// import ThreeScene.module.css;
import "../styles/ThreeScene.module.css";

const ThreeScene = (props) => {
  //% Camera Ref
  const cameraRef = useRef(); // create a reference to the camera
  const ref = useRef();

  const data = useScroll(); // useScroll hook from drei

  useFrame(() => {
    // data.offset = current scroll position, between 0 and 1, dampened
    // data.delta = current delta, between 0 and 1, dampened
    // Will be 0 when the scrollbar is at the starting position,
    // then increase to 1 until 1 / 3 of the scroll distance is reached
    const a = data.range(0, 1 / 3);
    // Will start increasing when 1 / 3 of the scroll distance is reached,
    // and reach 1 when it reaches 2 / 3rds.
    const b = data.range(1 / 3, 1 / 3);
    // Same as above but with a margin of 0.1 on both ends
    const c = data.range(1 / 3, 1 / 3, 0.1);
    // Will move between 0-1-0 for the selected range
    const d = data.curve(1 / 3, 1 / 3);
    // Same as above, but with a margin of 0.1 on both ends
    const e = data.curve(1 / 3, 1 / 3, 0.1);
    // Returns true if the offset is in range and false if it isn't
    const f = data.visible(2 / 3, 1 / 3);
    // The visible function can also receive a margin
    const g = data.visible(2 / 3, 1 / 3, 0.1);
  });

  //% Scroll-Based Movement
  useEffect(() => {}, []);

  //++ Here we return the JSX that will be rendered in the Canvas component
  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        position={[3, 1, 5]}
        fov={45}
        near={0.1}
        far={200}
      />
      <directionalLight intensity={4} position={[2, 4, 6]} />
      <ambientLight intensity={1} />

      <LandingPage ref={ref} {...props} />
    </>
  );
};

export default ThreeScene;
