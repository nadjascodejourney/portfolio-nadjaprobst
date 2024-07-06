import { Html } from "@react-three/drei";
import React from "react";
import styles from "../styles/About.module.css"; // Import CSS module

const About = () => {
  return (
    <>
      <Html
        style={{
          // transparent white background
          fontSize: "min(3vw, 24px)",
          width: "30vw",
          top: "100vh",
          transform: "translateX(-80%)",
          color: "white",
          margin: 0,
          padding: 0,
        }}
      >
        <main className={styles.aboutWrapper}>
          <img
            className={styles.portrait}
            src="/assets/images/Portrait.png"
            alt=""
          />
          <section className={styles.aboutTextSection}>
            <h2 className={styles.aboutHeading}>Hey</h2>
            <p className={styles.aboutTextBox}>
              {`My name is Nadja. I'm delighted that you visit my portfolio
                website. I design and build visually appealing and imaginative
                websites that invite you to explore. Take a look around and
                you'll discover a lot about me and my work.`}

              {/*    <p>
                {`I'm a web developer with a background in art and design and a passion
                for creating beautiful and functional websites. I specialize in
                front-end development and also have experience with back-end.`}
              </p> */}
            </p>
            <p
              style={{
                fontSize: "min(2vw, 16px)",
                background: "rgba(255, 255, 255, 0.3)",
                borderRadius: "20px",
                padding: "2vw",
                textAlign: "center",
              }}
            >
              {`
              If you find a gemstone, tab on it! They reveal more facts about this project and
              my work. For example, you´ll find out what this website is built with and what my previous work experience is.`}
            </p>
          </section>
        </main>
      </Html>
    </>
  );
};

export default About;
