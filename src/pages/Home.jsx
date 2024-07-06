import React from "react";

const Home = () => {
  return (
    <section
      className="titlebox"
      style={{
        position: "absolute",
        top: "33.33vh",
        left: "50vw",
        transform: "translateX(-50%)", // center horizontally!

        fontFamily: "sans-serif",
        fontSize: "min(5vw, 72px)",
        textAlign: "center",
        width: "100vw",
      }}
    >
      <h1
        style={{
          color: "#ffffff",
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        {`Nadja Probst`}
      </h1>
      <h2
        style={{
          color: "#ffffff",
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        Webexperiences
      </h2>
    </section>
  );
};

export default Home;
