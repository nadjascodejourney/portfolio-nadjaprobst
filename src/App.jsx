import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";
import ThreeScene from "./components/ThreeScene";
import { ScrollControls, Scroll, Html } from "@react-three/drei";
import React, { Suspense } from "react";

function ScrollBasedAnimation() {
  useFrame(({ mouse, camera }) => {
    // mouse and camera are destructured from the state object: { mouse, camera }
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.5,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.8,
      0.01
    );
    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
      0.01
    );
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    );
  });

  return (
    <ScrollControls pages={3}>
      <Scroll>
        <ThreeScene />
      </Scroll>
      <Scroll html>
        <Html />
      </Scroll>
    </ScrollControls>
  );
}

function App() {
  return (
    <>
      <div id="canvasContainer">
        <Canvas // component from R3F; wrapper around native Three renderer
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping, // ToneMapping
            outputColorSpace: THREE.SRGBColorSpace,
          }}
          dpr={[1, 2]} // dpr = device pixel ratio;
        >
          <Suspense>
            {" "}
            {/* // Suspense is a component that lets you “wait” for some code to load and declaratively specify a loading state (like a spinner) to show while the code is loading. */}
            <ScrollBasedAnimation />
          </Suspense>
          <ambientLight intensity={0.6} color={"#dee2ff"} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
