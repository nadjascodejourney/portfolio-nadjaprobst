import * as THREE from "three"; // we need to import Three.js to use its classes, F.e. DoubleSide
import { useMemo, useRef } from "react";
import { useEffect } from "react";

export default function CustomObject() {
  // geometry ref
  const geometryRef = useRef();
  // geometryRef.current?.computeVertexNormals(); // computeVertexNormals() is a method that calculates the normals of the vertices of the geometry, so the light will be rendered correctly
  // ? is a conditional operator that checks if the object exists before calling the method! This is important, because the ref is null at the beginning, and we can't call methods on null objects. Alternatively, we can work with useEffect to call the method after the geometry is created (see below)

  const verticesCount = 10 * 3; // 10 triangles * 3 vertices
  // We can now create the Float32Array that will contain all vertices positions, and we need to specify the size of the array.

  // useMemo to memoize the result of a function, so it will be called only once and the result will be cached.
  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3); // 3 coordinates per vertex (x, y, z) => 3 * 10 * 3 = 90 elements in the array (90 floats) // 10 triangles * 3 vertices * 3 coordinates

    // fill the positions array with the vertices of the triangles
    for (let i = 0; i < verticesCount; i++)
      positions[i] = (Math.random() - 0.5) * 3; // * 3 to make it bigger
    //! no { } needed because only one line of code

    return positions; // we have to return the positions array, because useMemo expects a return value
  }, []); // empty array means that the function will be called only once; if we pass a variable, the function will be called every time the variable changes

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3} /* for x, y and z */
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="red" side={THREE.DoubleSide} />
      {/* side is native Three js */}
    </mesh>
  );
}
