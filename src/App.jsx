import { Canvas } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";
import ThreeScene from "./components/ThreeScene";

function App() {
  const cameraSettings = {
    position: [3, 1, 5],
    fov: 45,
    near: 0.1,
    far: 200,
  };

  return (
    <Canvas // component from R3F; wrapper around native Three renderer
      gl={{
        // WebGLRenderer settings
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping, // ToneMapping
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      dpr={[1, 2]} // dpr = device pixel ratio; array of numbers, first is the default, second is the max
      orthographic={false} // if true, camera is orthographic instead of perspective
      camera={{
        // camera settings
        cameraSettings,
      }}
    >
      <color attach="background" args={["#f0f0f0"]} />{" "}
      {/* background color of the canvas */}
      <ThreeScene />
    </Canvas>
  );
}

export default App;

/* 
CANVAS COMPONENT
Canvas is responsive to fit the parent node, so you can control how big it is by changing the parents width and height, in this case #canvas-container.
*/
