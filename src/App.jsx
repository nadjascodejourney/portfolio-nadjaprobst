import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";
import ThreeScene from "./components/ThreeScene";
import { ScrollControls, Scroll, Html } from "@react-three/drei";
import Overlay from "./layout/Overlay";

function App() {
  return (
    <>
      {/*  <Overlay /> */}

      <div id="canvasContainer">
        <div className="canvasItem">
          <Canvas // component from R3F; wrapper around native Three renderer
            gl={{
              // WebGLRenderer settings
              antialias: true,
              toneMapping: THREE.ACESFilmicToneMapping, // ToneMapping
              outputColorSpace: THREE.SRGBColorSpace,
            }}
            // onPointerMissed={() => (state.clicked = null)} // onPointerMissed is called when the user clicks outside of the canvas, then the clicked state is set to null. This is useful for deselecting objects when clicking outside of them.
            dpr={[1, 2]} // dpr = device pixel ratio; array of numbers, first is the default, second is the max
          >
            {/* We are using ScrollControls from React Three Drei. You can only use this Component once in a component, otherwise nothing scrolls anymore
             Scrollcontrols create a HTML scroll container in front of the canvas. Everything you drop into the <Scroll> component below will be affected. */}
            <ScrollControls
              enabled={true}
              damping={0.1}
              horizontal={true}
              // pages: One page is as tall as the viewport (default)
              pages={3} // number of pages to scroll through
            >
              <Scroll>
                <ThreeScene position={[1, 0, 0]} />

                {/* The Html Component inside the <Scroll> together with <ThreeScene> will be affected and will scroll! */}
                {/* !!! NOTE: Not Recommended Inside <Scroll>: Placing the <Html> component inside the <Scroll> component (and thus indirectly inside <ScrollControls>) is generally not recommended because it would likely result in unexpected behavior. The <Html> component is meant to overlay content on top of the canvas, not to be part of the scrollable content itself. */}
                <Html>
                  <h1
                    style={{
                      position: "absolute",
                      top: "40vh",
                      left: "5vw",
                      fontSize: "2vw",
                      color: "green",
                    }}
                  >
                    Scroll Element
                    {/* TODO: Find out how to make clickable Links */}
                  </h1>
                </Html>
              </Scroll>

              {/* The Html Component outside the <Scroll> but inside the <ScrollControls> will be affected and will scroll! */}
              <Html>
                <h1
                  style={{
                    position: "absolute",
                    top: "30vh",
                    left: "5vw",
                    fontSize: "2vw",
                    color: "blue",
                  }}
                >
                  Scroll Element
                  {/* TODO: Find out how to make clickable Links */}
                </h1>
              </Html>
            </ScrollControls>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;

/* 
CANVAS COMPONENT
Canvas is responsive to fit the parent node, so you can control how big it is by changing the parents width and height, in this case #canvas-container.
*/
