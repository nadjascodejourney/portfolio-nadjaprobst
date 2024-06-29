import { Text, Float } from "@react-three/drei";

function LandingPage() {
  return (
    <>
      <Float speed={2} floatIntensity={1} floatingRange={2}>
        <Text
          position={[0, 2, 0]}
          fontSize={0.8}
          color="blue"
          textAlign="center"
          maxWidth={6}
        >
          R3F
          {/* this is a material that shows the normals of the mesh */}
        </Text>
        <Text fontSize={0.5}>Webexperiences</Text>
        {/* this is a text in 3D space, default font family is Roboto, use your own by putting them in the public folder and then write the font property with the string of your font inside public here; it should be a woff file, and you can convert your file format here: https://transfonter.org/  */}
      </Float>
    </>
  );
}

export default LandingPage;
