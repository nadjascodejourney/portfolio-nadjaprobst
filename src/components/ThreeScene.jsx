// import ThreeScene.module.css;
import "../styles/ThreeScene.module.css";
import { Text, Html } from "@react-three/drei";
import { Sparkles } from "@react-three/drei";

const ThreeScene = () => {
  //++ Here we return the JSX that will be rendered in the Canvas component
  return (
    <>
      <Sparkles
        count={300}
        size={3}
        speed={0.02}
        opacity={1}
        scale={20}
        color="#fff3b0"
      />
      <Html>
        <h1>Nadja</h1>
      </Html>
    </>
  );
};

export default ThreeScene;
