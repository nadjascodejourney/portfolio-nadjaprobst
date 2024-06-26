import { useFrame } from "@react-three/fiber"; // useFrame is a hook; extend is a function to extend the R3F native classes and to create new declarative components with them (i.e. <orbitControls />  ); useThree is a hook to access the three.js scene and camera
import { useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import {
  TransformControls,
  OrbitControls,
  Text,
  Float,
} from "@react-three/drei";

// extend({ OrbitControls }); // we extend the native OrbitControls class to be able to use it as a declarative component
// we wirte it twice, because we need to import it and then tell how we want to name it

const Experience = () => {
  //% References
  const groupRef = useRef(); // we create a ref to access the mesh directly
  const planeRef = useRef();
  const sphereRef = useRef();

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

      <Float speed={4} floatIntensity={2} floatingRange={3}>
        <Text
          position={[0, 2, 0]}
          fontSize={0.5}
          color="blue"
          textAlign="center"
          maxWidth={3}
        >
          Nadja Probst
          <meshNormalMaterial />
        </Text>
        {/* this is a text in 3D space, default font family is Roboto, you could use your own by putting them in the public folder and then write the font property with the string of your font inside public here; it should be a woff file, and you can convert your file format here: https://transfonter.org/  */}
      </Float>
    </>
  );
};

export default Experience;
