import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Experience.jsx";

function App() {
  return (
    <Canvas>
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
