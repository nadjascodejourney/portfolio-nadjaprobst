/* This component renders individual menu buttons.
 */

import React from "react";
import styles from "../styles/MenuButton.module.css";

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <>
      <button className={styles.menuButton} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default MenuButton;
