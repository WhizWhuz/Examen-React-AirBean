import React from "react";
import styles from "../components/Button.module.scss";

function Button({ onClick, children, type }) {
  return (
    <button onClick={onClick} className={styles[`button-${type}`]}>
      {children}
    </button>
  );
}

export default Button;
