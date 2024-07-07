import React from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Sparkles } from "@react-three/drei";

//* custom components:
// Particles
// Objects/ Content
// Html
// Overlay
// Scrollmanager

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import TechStack from "../pages/TechStack.jsx";
import ScrollManager from "./ScrollManager.jsx";

const ScrollAnimationWrapper = () => {
  useFrame(({ mouse, camera }) => {
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
    <ScrollControls pages={4} horizontal={false}>
      <ScrollManager />
      <Scroll>
        <Sparkles
          count={3000}
          size={10}
          speed={0.02}
          opacity={1}
          scale={60}
          color="#fff3b0"
        />
      </Scroll>
      <Scroll html>
        <Home />
      </Scroll>
      <Scroll>
        {/* here no html, because About is already a drei Html component by itself*/}
        <About />
      </Scroll>
      <Scroll>
        <TechStack />
      </Scroll>
    </ScrollControls>
  );
};

export default ScrollAnimationWrapper;
