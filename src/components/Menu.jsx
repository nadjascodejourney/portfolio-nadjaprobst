import React from "react";

// Context for section and menu
import useSectionScrollStore from "../stores/useSectionScrollStore.js";
import menuOpenStore from "../stores/menuOpenStore.js";

// import styles
import styles from "../styles/Menu.module.css";

const Menu = () => {
  const onSectionChanges = useSectionScrollStore((state) => {
    return state.sectionsCount;
  });

  const onMenuOpen = menuOpenStore((state) => {
    return state.menuOpen;
  });

  const setMenuOpen = menuOpenStore((state) => {
    return state.setMenuOpen;
  });

  return (
    <>
      <button
        onClick={() => setMenuOpen(!onMenuOpen)}
        className={styles.buttonStyle}
      >
        <div
          className={`${styles.lineOne} ${
            onMenuOpen ? styles.lineRotatedandTranslated : ""
          }`}
        />

        <div
          className={`${styles.lineTwo} ${
            onMenuOpen ? styles.lineTwoHidden : ""
          }`}
        />

        <div
          className={`${styles.lineThree} ${
            onMenuOpen ? styles.lineThreeRotated : ""
          }`}
        />
      </button>
    </>
  );
};

export default Menu;
