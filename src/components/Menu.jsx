import React from "react";

// import styles
import styles from "../styles/Menu.module.css";

const Menu = (props) => {
  const { onSectionChanges, menuOpen, setMenuOpen } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={styles.buttonStyle}
      >
        <div
          className={`${styles.lineOne} ${
            menuOpen ? styles.lineRotatedandTranslated : ""
          }`}
        />

        <div
          className={`${styles.lineTwo} ${
            menuOpen ? styles.lineTwoHidden : ""
          }`}
        />

        <div
          className={`${styles.lineThree} ${
            menuOpen ? styles.lineThreeRotated : ""
          }`}
        />
      </button>

      <nav
        className={`${styles.navigationMenu} ${
          menuOpen ? styles.menuIsShown : styles.menuIsHidden
        }`}
      >
        <ul className={`${styles.menuList}`}>
          <li>About</li>
          <li>Techstack</li>
          <li>Projects</li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
