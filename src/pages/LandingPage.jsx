import { Text, Float } from "@react-three/drei";
import React from "react";
import { forwardRef } from "react";

const LandingPage = forwardRef(function Landingpage(props, ref) {
  // forwardRef is a higher order function that allows you to access the ref of the parent component; i need to write React
  //* By default, each component’s DOM nodes are private. However, sometimes it’s useful to expose a DOM node to the parent—for example, to allow focusing it. To opt in, wrap your component definition into forwardRef():
  // forwardRef returns a React component that you can render in JSX. Unlike React components defined as plain functions, the component returned by forwardRef is able to take a ref prop.
  return (
    <>
      <Float speed={2} floatIntensity={1} floatingRange={2}>
        <group ref={ref}>
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
        </group>
        {/* this is a text in 3D space, default font family is Roboto, use your own by putting them in the public folder and then write the font property with the string of your font inside public here; it should be a woff file, and you can convert your file format here: https://transfonter.org/  */}
      </Float>
    </>
  );
});

export default LandingPage;
