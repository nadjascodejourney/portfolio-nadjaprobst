import React from "react";
import styles from "../styles/Contact.module.css";
import fontstyles from "../styles/Fonts.module.css";

const ContactForm = () => {
  return (
    <div className={styles.formWrapper}>
      <p className={fontstyles.jostFontLight}>
        Whether you have a project in mind or you just want to say hello, I'd
        love to hear from you! Fill out the form below, and I'll get back to you
        as soon as possible.
      </p>
      <form
        className={styles.contactForm}
        action="https://formspree.io/f/xqkwzgqj"
        method="POST"
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="_replyto"
          placeholder="Your email"
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
