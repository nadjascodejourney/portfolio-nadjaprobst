import { Html } from "@react-three/drei";
import React from "react";
import { forwardRef } from "react";
import styles from "../styles/About.module.css"; // Import CSS module

const About = forwardRef(function About(props, ref) {
  return (
    <>
      <Html>
        <main className={styles.aboutWrapper}>
          <img
            className={styles.portrait}
            src="/assets/images/Portrait.png"
            alt=""
          />
          <section className={styles.aboutTextSection}>
            <h1 className={styles.aboutHeading}>Hey</h1>
            <div className={styles.aboutTextBox}>
              <p>
                My name is Nadja. I'm delighted that you've come to my portfolio
                website. I design and build visually appealing and imaginative
                websites that invite you to explore. Take a look around and
                you'll discover a lot about me and my work.
              </p>
            </div>
          </section>
        </main>
      </Html>
    </>
  );
});

export default About;
