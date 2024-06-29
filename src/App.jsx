import { Canvas } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";
import ThreeScene from "./components/ThreeScene";
import { ScrollControls, Scroll } from "@react-three/drei";

function App() {
  const cameraSettings = {
    position: [3, 1, 5],
    fov: 45,
    near: 0.1,
    far: 200,
  };

  return (
    <div id="canvasContainer">
      <div className="canvasItem">
        <Canvas // component from R3F; wrapper around native Three renderer
          gl={{
            // WebGLRenderer settings
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping, // ToneMapping
            outputColorSpace: THREE.SRGBColorSpace,
          }}
          dpr={[1, 2]} // dpr = device pixel ratio; array of numbers, first is the default, second is the max
          orthographic={false} // if true, camera is orthographic instead of perspective
          /*  camera={{
            // camera settings
            position: [3, 1, 5],
            fov: 45,
            near: 0.1,
            far: 200,
          }} */
        >
          <ScrollControls
            enabled={true}
            damping={0.1}
            horizontal={true}
            // pages: One page is as tall as the viewport (default)
            pages={3} // number of pages to scroll through
          >
            <Scroll>
              <ThreeScene position={[1, 0, 0]} />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
}

export default App;

/* 
CANVAS COMPONENT
Canvas is responsive to fit the parent node, so you can control how big it is by changing the parents width and height, in this case #canvas-container.
*/
