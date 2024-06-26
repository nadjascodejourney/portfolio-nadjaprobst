import { useFrame } from "@react-three/fiber"; // useFrame is a hook that allows you to run code on every frame
import { useRef } from "react";

import { OrbitControls, Text, Float } from "@react-three/drei";

const ThreeScene = () => {
  //% References
  // we create a ref to access the mesh directly
  const planeRef = useRef();

  //% Animation
  /*   useFrame((state, delta) => {}); */

  //++ Here we return the JSX that will be rendered in the Canvas component
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight intensity={4} position={[2, 4, 6]} />
      <ambientLight intensity={1} />

      <mesh
        ref={planeRef}
        position-y={-1.5}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
      </mesh>

      <Float speed={2} floatIntensity={1} floatingRange={2}>
        <Text
          position={[0, 2, 0]}
          fontSize={0.5}
          color="blue"
          textAlign="center"
          maxWidth={3}
        >
          Nadja Probst
          {/* this is a material that shows the normals of the mesh */}
        </Text>
        <Text fontSize={0.5}>Soon to be a R3F Portfolio!</Text>
        {/* this is a text in 3D space, default font family is Roboto, use your own by putting them in the public folder and then write the font property with the string of your font inside public here; it should be a woff file, and you can convert your file format here: https://transfonter.org/  */}
      </Float>
    </>
  );
};

export default ThreeScene;
