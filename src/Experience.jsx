import { useFrame, extend, useThree } from "@react-three/fiber"; // useFrame is a hook; extend is a function to extend the R3F native classes and to create new declarative components with them (i.e. <orbitControls />  ); useThree is a hook to access the three.js scene and camera
import { useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import CustomGeometry from "../CustomGeometry";

// extend({ OrbitControls }); // we extend the native OrbitControls class to be able to use it as a declarative component
// we wirte it twice, because we need to import it and then tell how we want to name it

const Experience = () => {
  // const { camera, gl } = useThree(); // we can destructure the object, too; gl is the renderer
  //  console.log(three); // we can see the scene and the camera in the console

  const groupRef = useRef(); // we create a ref to access the mesh directly

  // This is the same as the animate function in Native Three.js
  useFrame((state, delta) => {
    // useFrame calls the function every frame
    // DELTA
    // delta is the time between frames, state is the three js scene object
    // with delta we can make the animation frame rate independent (it will be the same speed on all devices)
    // with state we can access the scene and the camera, but now we are not using it
    //  groupRef.current.rotation.y += delta; // this is a native three js Mesh; we need current, because it is a ref
    // STATE
    // console.log(state.camera); // we can access the camera from the state object
    // console.log(state.clock.elapsedTime); // we can access the time from the state object; it shows the time in seconds since the start of the animation
    // console.log(state.clock.getElapsedTime()); // the same as above
    // to move the camera around the scene
    /*   const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle) * 3;
    state.camera.position.z = Math.cos(angle) * 3; */
    // to make the camera look at the center of the scene
    // state.camera.lookAt(0, 0, 0); // x, y, z
  });

  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}
      {/* args have to be camera and gl.domELement to get the controls work */}
      {/* gl.domElement means the canvas */}
      {/* we use the OrbitControls as a declarative component */}

      <directionalLight intensity={4} position={[1, 2, 5]} />

      <ambientLight intensity={1} />

      <group ref={groupRef} /* useRef */>
        {/* Unlike in Native Three.js, the order of the meshes is not necessary */}
        <mesh
          scale={[1.5, 1.5, 1.5]}
          position-x={2}
          rotation-y={Math.PI * 0.25}
        >
          {/* x,y,z / this is the same as mesh.scale.set(2, 1.5, 1) in native three.js*/}
          <boxGeometry args={[1, 1, 1]} /> {/* radius, width, height */}
          <meshStandardMaterial color="orange" />
          {/* object in an array */}
        </mesh>

        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
      </group>
      <mesh position-y={-1.5} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="cyan" />
      </mesh>

      <CustomGeometry />
    </>
  );
};

export default Experience;
