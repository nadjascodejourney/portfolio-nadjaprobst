import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Experience.jsx";
import * as THREE from "three";

function App() {
  const cameraSettings = {
    position: [3, 1, 5],
    fov: 45,
    near: 0.1,
    far: 200,
    /* zoom: 100, */ // zoom is a property of orthographic camera => without it, the object will be too small and you have to zoom in by scrolling the mouse wheel which is not user friendly
  };

  return (
    <Canvas
      gl={{
        antialias: true, // smooth edges, no stair-stepping; true by default; if you need better performance and it does not care that much how it looks, you can set it to false
        toneMapping: THREE.ACESFilmicToneMapping, // ToneMapping = A technique used in computer graphics to map one set of colors to another to approximate the appearance of high dynamic range images in a medium that has a more limited dynamic range. In R3F they use kind of a fake tone mapping: ACESFilmicToneMapping
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      dpr={[1, 2]} // pixel ratio clamped between 1 and 2 ( default value)
      orthographic={false}
      camera={cameraSettings}
    >
      <Experience />
    </Canvas>
  );
}

export default App;

/* 

CANVAS COMPONENT

The Canvas component does some important setup work behind the scenes:

It sets up a Scene and a Camera, the basic building blocks necessary for rendering
It renders our scene every frame, you do not need a traditional render-loop #

Canvas is responsive to fit the parent node, so you can control how big it is by changing the parents width and height, in this case #canvas-container.
*/

// You can use your own tone mapping: 1. import { CineonToneMapping } from "three"; 2. gl={{toneMapping: CineonToneMapping}} // CineonToneMapping is a native Three.js tone mapping

// background of the renderer ist transparent by default, you can change it by setting the style of the canvas in the App.css file

// Pixelratio = window.devicePixelRatio; // the higher the pixel ratio, the better the quality of the image, but the worse the performance (it is a trade-off) // it is set to 1 by default
// R3F handles the pixel ratio automatically, but you can set it manually by setting the pixelRatio property in the gl object in the Canvas component
