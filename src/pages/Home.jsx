import React from "react";
// import font module css
import fontstyles from "../styles/Fonts.module.css";

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
        textAlign: "center",
        width: "100vw",
      }}
    >
      <h1
        className={fontstyles.playwrightFontRegular}
        style={{
          color: "#ffffff",
          margin: 0,
          whiteSpace: "nowrap",
          // font module css
        }}
      >
        {`Nadja Probst`}
      </h1>
      <h2
        className={fontstyles.jostFontXLight}
        style={{
          marginTop: "2vh",
          whiteSpace: "nowrap",
        }}
      >
        Webexperiences
      </h2>
    </section>
  );
};

export default Home;
