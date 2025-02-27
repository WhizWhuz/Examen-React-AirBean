import { useNavigate } from "react-router-dom";
import navicon from "../svg/hamburger.svg";
import carticon from "../svg/cart.svg";
import styles from "./Header.module.scss";
import Button from "./Button";

function Header({ setIsOpen, hidden, setCartIsOpen }) {
  // ✅ Now always receives props
  console.log("Header props:", { setIsOpen, hidden }); // ✅ Debugging log

  const navigate = useNavigate();

  const handleNavClick = () => {
    if (typeof setIsOpen === "function") {
      // ✅ Prevent calling undefined function
      setIsOpen(true);
    } else {
      console.error("🚨 setIsOpen is undefined in Header!");
    }
  };

  const handleCartClick = () => {
    if (typeof setCartIsOpen === "function") {
      console.log("Cart button clicked! Updating cartIsOpen...");
      setCartIsOpen(true);
    } else {
      console.error("🚨 setCartIsOpen is undefined in Header!");
    }
  };

  return (
    <div
      className={styles.headerContainer}
      style={{ display: hidden ? "none" : "flex" }}
    >
      <section className={styles.buttonsContainer}>
        <Button onClick={handleNavClick} type="smallWhite">
          <img src={navicon} alt="Nav Icon" />
        </Button>

        <Button onClick={handleCartClick} type="smallBlack">
          <img src={carticon} alt="Cart Icon" />
        </Button>
      </section>
    </div>
  );
}

export default Header;
