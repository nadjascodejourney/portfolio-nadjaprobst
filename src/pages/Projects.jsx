import { Html } from "@react-three/drei";
import React from "react";
import fontstyles from "../styles/Fonts.module.css";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  return (
    <>
      <Html
        className={fontstyles.jostFontLight}
        style={{
          width: "30vw",
          top: "450vh",
          transform: "translateX(-80%)",
          margin: 0,
          padding: 0,
        }}
      >
        <main className={styles.projectWrapper}>
          <section>
            <h1 className={fontstyles.jostFontLight}>Projects</h1>
            <p>
              {`Here you can see a selection of my projects. Click on the bubbles to find out more about the project and the technologies used.`}
            </p>
            <div>
              <div className={styles.projectCard}>
                <h3>Meowstery</h3>
              </div>
              <div className={styles.projectCard}>
                <h3>BirdsofPrey</h3>
              </div>
              <div className={styles.projectCard}>
                <h3>Quizzell</h3>
              </div>
            </div>
          </section>
        </main>
      </Html>
    </>
  );
};

export default Projects;
