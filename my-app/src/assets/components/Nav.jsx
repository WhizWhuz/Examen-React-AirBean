import { NavLink } from "react-router-dom";
import styles from "../components/Nav.module.scss";
import Button from "./Button";

function Nav({ isOpen, setIsOpen, hidden }) {
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains(styles.navOverlay)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className={`${styles.navMenu} ${!isOpen ? styles.hidden : ""}`}
          onClick={handleOutsideClick}
        >
          <>
            <Button type="menu" onClick={() => setIsOpen((is) => !is)}>
              &times;
            </Button>
            <ul>
              <li>
                <NavLink onClick={() => setIsOpen((is) => !is)} to="/MenuPage">
                  Meny
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
