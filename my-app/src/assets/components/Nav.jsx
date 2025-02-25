import { NavLink } from "react-router-dom";
import styles from "../components/Nav.module.scss";
import Button from "./Button";
import { useState } from "react";

function Nav({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <div className={styles.navMenu}>
          <>
            <Button type="menu" onClick={() => setIsOpen((is) => !is)}>
              &times;
            </Button>
            <ul>
              <li>
                <NavLink onClick={() => setIsOpen((is) => !is)} to="/MenuPage">
                  Menu
                </NavLink>
              </li>
              <div className={styles.line}></div>
              <li>
                <NavLink onClick={() => setIsOpen((is) => !is)} to="/About">
                  Vårt kaffe
                </NavLink>
              </li>
              <div className={styles.line}></div>
              <li>
                <NavLink onClick={() => setIsOpen((is) => !is)} to="/status">
                  Orderstatus
                </NavLink>
              </li>
              <div className={styles.line}></div>
            </ul>
          </>
        </div>
      )}
    </>
  );
}

export default Nav;
