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
          <div className={styles.aboutTextSection}>
            <h2 className={styles.aboutHeading}>Hey</h2>
            <div className={styles.aboutTextBox}>
              <p>
                {`My name is Nadja. I'm delighted that you visit my portfolio
                website. I design and build visually appealing and imaginative
                websites that invite you to explore. Take a look around and
                you'll discover a lot about me and my work.`}
              </p>
            </div>
          </div>
        </main>
      </Html>
    </>
  );
};

export default About;
