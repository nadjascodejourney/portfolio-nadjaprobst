import { Canvas } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";
import { Suspense } from "react"; // Suspense is a component that lets you “wait” for some code to load and declaratively specify a loading state (like a spinner) to show while the code is loading.

//custom imports
import ScrollAnimationWrapper from "./utils/ScrollAnimationWrapper.jsx";

// Context for section and menu scrolling
import useSectionScrollStore from "./stores/useSectionScrollStore.js";

function App() {
  const sectionsCount = useSectionScrollStore((state) => {
    return state.sectionsCount; // get the state from the store
  }); // only re-renders when the state changes => only retrieve the states, you actually need, not the whole store, because that would cause unnecessary re-renders, when something else in the store changes

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
