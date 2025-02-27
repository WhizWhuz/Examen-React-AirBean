import { useLocation } from "react-router-dom";
import navicon from "../svg/hamburger.svg";
import carticon from "../svg/cart.svg";
import styles from "./Header.module.scss";
import Button from "./Button";

function Header({ setIsOpen, setCartIsOpen }) {
	// Håller koll på  vilken sida man är på, och gömmer header component på / & /status
	const location = useLocation();
	const hiddenHeaderRoutes = ["/", "/status"];
	if (hiddenHeaderRoutes.includes(location.pathname)) {
		return null;
	}

	const handleNavClick = () => setIsOpen(true);
	const handleCartClick = () => setCartIsOpen(true);

	return (
		<div className={styles.headerContainer}>
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
