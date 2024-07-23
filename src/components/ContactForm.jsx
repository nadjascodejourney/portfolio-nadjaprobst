import React from "react";
import styles from "../styles/Contact.module.css";
import fontstyles from "../styles/Fonts.module.css";

const ContactForm = () => {
  return (
    <div className={styles.formWrapper}>
      <p className={styles.contactParagraph}>
        Whether you have a project in mind, a job to work on or you just want to
        say hello, I'd love to hear from you! Fill out the form below, and I'll
        get back to you as soon as possible.
      </p>

      <form
        className={styles.contactForm}
        /* action="https://formspree.io/f/xqkwzgqj"
        method="POST" */
      >
        <div className={styles.nameInput}>
          <label htmlFor="firstname"></label>
          <input
            className={styles.contactInput}
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Your firstname"
            required
          />

          <label htmlFor="lastname"></label>
          <input
            className={styles.contactInput}
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Your lastname"
            required
          />
        </div>

        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="_replyto"
          placeholder="Your email"
          required
        />

        <label htmlFor="subject"></label>
        <input
          type="text"
          id="szbject"
          name="subject"
          placeholder="Subject"
          required
        />

        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          required
        ></textarea>

        <button className={styles.contactBtn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
