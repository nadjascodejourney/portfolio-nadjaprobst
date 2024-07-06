import { useRef, useState, useEffect } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import LandingPage from "../pages/LandingPage";
import About from "../pages/About";
import TechStack from "../pages/TechStack";
// import ThreeScene.module.css;
import "../styles/ThreeScene.module.css";

const ThreeScene = (props) => {
  //% Camera Ref
  // const cameraRef = useRef(); // create a reference to the camera
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

    //* Example of how to influence the rotation ot the group element in the Landingpage Component through the ref and the forwardRef function in the LandingPage component
    // Animate the rotation of the object based on the scroll offset
    /* const rotationSpeed = -data.offset * Math.PI * 4;
    if (ref.current) {
      ref.current.rotation.y = rotationSpeed;
    } */

    const scrollOffset = data.offset; // data.offset is the current scroll position, between 0 and 1, dampened

    if (ref.current) {
      ref.current.position.x = scrollOffset * -2; // move the group element in the x direction based on the scroll offset; offset means the current scroll position, which is multiplied by -2 to move the group element in the opposite direction of the scroll
    }
  });

  //++ Here we return the JSX that will be rendered in the Canvas component
  return (
    <>
      {/* group the components, to position them accordingly */}
      <group position={[0, 0, 0]}>
        <LandingPage ref={ref} />
      </group>
      <group position={[0, -4, 0]}>
        <About />
      </group>
      <group position={[0, -8, 0]}>
        <TechStack />
      </group>
    </>
  );
};

export default ThreeScene;
main;
