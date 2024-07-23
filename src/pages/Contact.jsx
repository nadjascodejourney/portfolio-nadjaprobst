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
          width: "50vw",
          top: "630vh",
          transform: "translateX(-50%)",
          margin: 0,
          padding: 0,
          border: "2px solid #aa41fb",
          borderRadius: "1rem",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 className={fontstyles.jostFontLight}>Let´s connect!</h1>
        <ContactForm />
      </Html>
    </>
  );
};

export default Contact;
