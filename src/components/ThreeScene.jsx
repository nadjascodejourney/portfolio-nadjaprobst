import { useFrame, extend, useThree } from "@react-three/fiber"; // useFrame is a hook; extend is a function to extend the R3F native classes and to create new declarative components with them (i.e. <orbitControls />  ); useThree is a hook to access the three.js scene and camera
import { useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Sky, Environment } from "@react-three/drei";
// import the Sky component from the Drei library

import {
  PivotControls,
  TransformControls,
  OrbitControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";

import CustomGeometry from "../CustomGeometry";

import { useControls, button } from "leva"; // we import the useControls hook from the leva library; leva is a library to create GUIs for your React applications => debug ui for your 3D scene

// extend({ OrbitControls }); // we extend the native OrbitControls class to be able to use it as a declarative component
// we wirte it twice, because we need to import it and then tell how we want to name it

const Experience = () => {
  //% Tweaks for the Debug UI with Leva
  const { position, color, visible } = useControls(
    "Basic Tweaks", // the name of the group
    {
      position: {
        value: { x: 5, y: 0 },
        /*  min: -5,
      max: 5, */
        step: 0.1,
        joystick: "invertY",
      },
      color: "red", // we can use various color formats with leva; alpha channel is not supported
      visible: true,
      clickMe: button(() => {
        console.log("button clicked"); // we can add a button to the debug ui
      }),
      choice: { options: ["option1", "option2", "option3"], value: "option1" }, // we can add a dropdown menu to the debug ui, i.e. for different materials
    }
  );
  //* on each change we tweak, the component concerned by the change will be re-rendered!

  // we can also add another group to the debug ui in a new folder
  const { scale } = useControls("Advanced Tweaks", {
    scale: {
      value: 1,
      min: 0,
      max: 2,
      step: 0.1,
    },
  });

  const { sunPosition, turbidity } = useControls("Sky", {
    sunPosition: {
      value: [100, 10, 100],
      step: 1,
    },
    turbidity: {
      value: 10,
      min: 1,
      max: 20,
      step: 1,
    },
  });

  //% Three.js Scene and Camera
  // const { camera, gl } = useThree(); // we can destructure the object, too; gl is the renderer
  //  console.log(three); // we can see the scene and the camera in the console

  //% References
  const groupRef = useRef(); // we create a ref to access the mesh directly
  const planeRef = useRef();
  const sphereRef = useRef();

  //% Animation

  // This is the same as the animate function in Native Three.js
  useFrame((state, delta) => {
    // useFrame calls the function every frame
    //* DELTA
    // delta is the time between frames, state is the three js scene object
    // with delta we can make the animation frame rate independent (it will be the same speed on all devices)
    // with state we can access the scene and the camera, but now we are not using it
    //  groupRef.current.rotation.y += delta; // this is a native three js Mesh; we need current, because it is a ref
    //* STATE
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

  //++ Here we return the JSX that will be rendered in the Canvas component

  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}
      {/* args have to be camera and gl.domELement to get the controls work */}
      {/* gl.domElement means the canvas */}
      {/* we use the OrbitControls as a declarative component */}
      <OrbitControls makeDefault />
      {/*  By default, the OrbitControls is also set with enabledDamping which makes the animation smoother. In addition, we don’t have to ask it to update itself on each frame like we used to in native Three.js. It’s all handled by the <OrbitControls /> component. To disable: <OrbitControls enableDamping={ false } /> */}
      {/* The other issue we’re experiencing, is that the camera is moving when we drag and drop our gizmo. Fortunately, this case is already handled and all we need to do is add makeDefault to the <OrbitControls>:



 */}
      <directionalLight intensity={4} position={sunPosition} />
      <ambientLight intensity={1} />
      <Sky sunPosition={sunPosition} turbidity={turbidity} />
      {/* sunPosition is the position of the sun in the sky; turbidity is the amount of particles in the air; the higher the value, the more particles are in the air */}
      {/* usually we would do this with sperical coordinates for setting the sun position  */}
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
      {/* TransformControls for the plane */}
      {/* object with debug ui */}
      <mesh
        position={[position.x, position.y, 0]}
        visible={visible}
        scale={scale}
      >
        <torusGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
      <TransformControls object={planeRef} mode="translate"></TransformControls>
      <mesh
        ref={planeRef}
        position-y={-1.5}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={1}
        />
        {/* this comes from R3F/Drei, therefore it is in Uppercase; works only on plane meshes */}
      </mesh>
      <CustomGeometry />
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={1}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        scale={0.75}
      >
        {/* values in the  anchor are relative to the object, regardless of the size of the object. We can change that and have always the same size by setting the fixed attribute to true, but doing so mean that the scale will be the pixel size of the PivotControls and 2px being a bit small, we should increase it too. */}
        <mesh position-z={3}>
          <sphereGeometry ref={sphereRef} />
          <meshStandardMaterial color="green" />
          <Html
            center // center the text
            wrapperClass="label" /* label for the parent div => there are nested divs by default here */
            position={[1, 1, 0]}
            distanceFactor={8} // the text has no perspective by default, so we can add it with this attribute, so that the text will be smaller when it is further away
            occlude={[
              planeRef,
              groupRef,
            ]} /* to hide the html text when other element with a ref is in front */
          >
            Nadja
          </Html>
        </mesh>
      </PivotControls>
      <Float speed={4} floatIntensity={2} floatingRange={3}>
        <Text
          position={[0, 2, 0]}
          fontSize={0.5}
          /* font="public/Roboto-Regular.woff" */
          color="blue"
          textAlign="center"
          maxWidth={3}
        >
          I love R3F
          <meshNormalMaterial />
        </Text>
        {/* this is a text in 3D space, default font family is Roboto, you could use your own by putting them in the public folder and then write the font property with the string of your font inside public here; it should be a woff file, and you can convert your file format here: https://transfonter.org/  */}
      </Float>
    </>
  );
};

export default Experience;
