import React from "react";

function Images() {
  const { height, width } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
  });

  return (
    <group ref={group}>
      <Image position={[0, 0, 0]} scale={[4, height, 1]} url={plantsScenery} />
      <Image position={[4, 0, 1]} scale={5} url={plantsAbout} />
      <Image
        position={[-3, -height, 2]}
        scale={[2, 3, 1]}
        url={plantsTechStack}
      />
    </group>
  );
}
export default Images;
