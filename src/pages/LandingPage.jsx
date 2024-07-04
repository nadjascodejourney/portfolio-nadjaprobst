import { Text, Float } from "@react-three/drei";
import React from "react";
import { forwardRef } from "react";
import { Html } from "@react-three/drei";
import styles from "../styles/LandingPage.module.css"; // Import CSS module
import { useThree } from "@react-three/fiber";

const LandingPage = forwardRef(function Landingpage(props, ref) {
  // forwardRef is a higher order function that allows you to access the ref of the parent component;
  //* By default, each component’s DOM nodes are private. However, sometimes it’s useful to expose a DOM node to the parent—for example, to allow focusing it. To opt in, wrap your component definition into forwardRef():
  // forwardRef returns a React component that you can render in JSX. Unlike React components defined as plain functions, the component returned by forwardRef is able to take a ref prop.

  return (
    <>
      <Float speed={2} floatIntensity={1} floatingRange={2}>
        <Text
          position={[0, 1, 0]}
          fontSize={0.8}
          color="blue"
          textAlign="center"
          maxWidth={6}
        >
          Nadja Probst
        </Text>
        <Text fontSize={0.5}>Webexperiences</Text>
      </Float>
    </>
  );
});

export default LandingPage;
