import { Html } from "@react-three/drei";
import React from "react";
import { forwardRef } from "react";
import styles from "../styles/TechStack.module.css";

const TechStack = forwardRef(function TechStack(props, ref) {
  return (
    <>
      <Html>
        <main className={styles.techStackWrapper}>
          <section className={styles.techStackSection}>
            <h1 className={styles.techStackHeading}>What I do</h1>
            <div className={styles.techStackTextBox}>
              <p>
                is to code with a unique combination of creativity, visual and
                conceptual thinking. I offer web solutions with the following
                technologies:
              </p>
            </div>
            <div className={styles.techStackListWrapper}>
              <ul className={styles.techStackList}>
                <li>
                  <img src="/assets/logos/Group 85.svg" alt="HTML" />
                </li>
                <li>
                  <img src="/assets/logos/Group 83.svg" alt="CSS" />
                </li>
                <li>
                  <img src="/assets/logos/Group 68.svg" alt="JS" />
                </li>
                <li>
                  <img src="/assets/logos/Group 70.svg" alt="" />
                </li>
                <li>
                  <img src="/assets/logos/Group 76.svg" alt="" />
                </li>
                <li>
                  <img src="/assets/logos/Group (1).svg" alt="React Router" />
                </li>
                <li>
                  <img src="/assets/logos/Vectorthree.svg" alt="Three.js" />
                </li>
                <li>
                  <img src="/assets/logos/Group 41.svg" alt="GoogleChrome" />
                </li>
                <li>
                  <img src="/assets/logos/Vectorsass.svg" alt="Sass" />
                </li>

                <li>
                  <img src="/assets/logos/Vectortailwind.svg" alt="Tailwind" />
                </li>
                <li>
                  <img src="/assets/logos/Group 44.svg" alt="TS" />
                </li>
                <li>
                  <img src="/assets/logos/Group 84.svg" alt="Figma" />
                </li>
                <li>
                  <img src="/assets/logos/Group 98.svg" alt="Adobe" />
                </li>
                <li>
                  <img
                    src="/assets/logos/Group 66.svg"
                    alt="Adobe Illustrator"
                  />
                </li>
                <li>
                  <img src="/assets/logos/Group 67.svg" alt="PS" />
                </li>
                <li>
                  <img src="/assets/logos/Group 58.svg" alt="ID" />
                </li>
                <li>
                  <img src="/assets/logos/Group 57.svg" alt="github" />
                </li>
                <li>
                  <img src="/assets/logos/Vectorgit.svg" alt="git" />
                </li>
                <li>
                  <img src="/assets/logos/Group 89.svg" alt="Linux" />
                </li>
                <li>
                  <img src="/assets/logos//Group 27.svg" alt="Postman" />
                </li>
                <li>
                  <img src="/assets/logos/Group 61.svg" alt="MongoDB" />
                </li>
                <li>
                  <img src="/assets/logos/Group 95.svg" alt="DigitalOcean" />
                </li>
                <li>
                  <img src="/assets/logos/Group 74.svg" alt="VS Code" />
                </li>
                <li>
                  <img src="/assets/logos/Group.svg" alt="NPM" />
                </li>
                <li>
                  <img src="/assets/logos/Group 65.svg" alt="Vite" />
                </li>
              </ul>
            </div>
          </section>
        </main>
      </Html>
    </>
  );
});

export default TechStack;
