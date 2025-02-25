import { useState } from "react";
import { useNavigate } from "react-router-dom";
import navicon from "../svg/hamburger.svg";
import carticon from "../svg/cart.svg";
import styles from "./Header.module.scss";
import Cart from "../../pages/Cart";
import Button from "./Button";

function HeaderBG() {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleNavClick = () => {
    navigate("/nav");
  };

  const handleCartClick = () => {
    navigate("/cart");
    setIsCartOpen(true);
  };

  return (
    <div className={styles.headerContainer}>
      <section className={styles.buttonsContainer}>
        {/* Nav Button */}
        <Button onClick={handleNavClick} type={"small"}>
          <img src={navicon} alt="Cart Icon" />
        </Button>
        <Button onClick={handleCartClick} type={"small"}>
          <img src={carticon} alt="Cart Icon" />
        </Button>
      </section>

      {isCartOpen && <Cart setIsOpen={setIsCartOpen} />}
    </div>
  );
}

export default HeaderBG;

// <button onClick={handleNavClick} className={styles.navLink}>
//   <img src={navicon} alt="Nav Icon" />
// </button>;
// {
//   /* Cart Button */
// }
// <button onClick={handleCartClick} className={styles.cartLink}>
//   <img src={carticon} alt="Cart Icon" />
// </button>;
