/* This component handles the menu state (open/close) and triggers section changes. */

import React from "react";

// import styles
import styles from "../styles/Menu.module.css";
import MenuButton from "./MenuButton";

const Menu = (props) => {
  const { onSectionChanges, menuOpen, setMenuOpen } = props;

  return (
    <div>
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
        <div className={`${styles.menuList}`}>
          <MenuButton label="Home" onClick={() => onSectionChanges(0)} />
          <MenuButton label="About" onClick={() => onSectionChanges(1)} />
          <MenuButton label="Techstack" onClick={() => onSectionChanges(2)} />
          <MenuButton label="Projects" onClick={() => onSectionChanges(3)} />
        </div>
      </nav>
    </div>
  );
};

export default Menu;
