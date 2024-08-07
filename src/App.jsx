import { Canvas } from "@react-three/fiber";
import "./App.css";
import * as THREE from "three";
import { Suspense } from "react"; // Suspense is a component that lets you “wait” for some code to load and declaratively specify a loading state (like a spinner) to show while the code is loading.

//custom imports
import ScrollAnimationWrapper from "./utils/ScrollAnimationWrapper.jsx";
import Menu from "./components/Menu.jsx";

import useSectionScrollStore from "./stores/useSectionScrollStore.js";
import menuOpenStore from "./stores/menuOpenStore.js";
import Overlay from "./layout/Overlay.jsx";

function App() {
  /* States for the Menu; we get them from the zustand stores */
  const setSection = useSectionScrollStore((state) => state.setSection);
  const menuOpen = menuOpenStore((state) => state.menuOpen);
  const setMenuOpen = menuOpenStore((state) => state.setMenuOpen);

  return (
    <>
      <Canvas // component from R3F; wrapper around native Three renderer
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping, // ToneMapping
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        dpr={[1, 2]} // dpr = device pixel ratio;
        shadows
        camera={{ position: [0, 0, 5], fov: 70 }}
      >
        <Suspense>
          <ambientLight />
          <directionalLight color="red" intensity={10} />
          <ScrollAnimationWrapper />
        </Suspense>
      </Canvas>
      <Menu
        style={{ zIndex: 1000 }}
        onSectionChanges={setSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
}

export default App;
