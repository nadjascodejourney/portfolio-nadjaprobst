import { Html } from "@react-three/drei";
import React from "react";
import fontstyles from "../styles/Fonts.module.css";
import styles from "../styles/Contact.module.css";

import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Html
        className={fontstyles.jostFontLight}
        style={{
          width: "30vw",
          top: "630vh",
          transform: "translateX(-80%)",
          margin: 0,
          padding: 0,
        }}
      >
        <main className={styles.contactWrapper}>
          <h1 className={fontstyles.jostFontLight}>Let´s connect!</h1>
          <ContactForm />
        </main>
      </Html>
    </>
  );
};

export default Contact;
