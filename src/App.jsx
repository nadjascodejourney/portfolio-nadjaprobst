import { Canvas } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";
import { Suspense } from "react"; // Suspense is a component that lets you “wait” for some code to load and declaratively specify a loading state (like a spinner) to show while the code is loading.

//custom imports
import ScrollAnimationWrapper from "./utils/ScrollAnimationWrapper.jsx";
import Overlay from "./layout/Overlay.jsx";

function App() {
  return (
    <>
      <Canvas // component from R3F; wrapper around native Three renderer
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping, // ToneMapping
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        dpr={[1, 2]} // dpr = device pixel ratio;
      >
        <Suspense>
          <ambientLight />
          <directionalLight color="red" intensity={10} />
          <ScrollAnimationWrapper />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
