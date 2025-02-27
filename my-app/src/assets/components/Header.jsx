import { useNavigate } from "react-router-dom";
import navicon from "../svg/hamburger.svg";
import carticon from "../svg/cart.svg";
import styles from "./Header.module.scss";
import Button from "./Button";

function Header({ setIsOpen, hidden, setCartIsOpen }) {
	// ✅ Now always receives props

	const navigate = useNavigate();

	const handleNavClick = () => {
		if (typeof setIsOpen === "function") {
			// ✅ Prevent calling undefined function
			setIsOpen(true);
		}
	};

	const handleCartClick = () => {
		if (typeof setCartIsOpen === "function") {
			setCartIsOpen(true);
		}
	};

	return (
		<div
			className={styles.headerContainer}
			style={{ display: hidden ? "none" : "flex" }}
		>
			<section className={styles.buttonsContainer}>
				{/* ✅ Button opens the Nav menu */}
				<Button onClick={handleNavClick} type="smallWhite">
					<img src={navicon} alt="Nav Icon" />
				</Button>

				{/* ✅ Button navigates to cart */}
				<Button onClick={handleCartClick} type="smallBlack">
					<img src={carticon} alt="Cart Icon" />
				</Button>
			</section>
		</div>
	);
}

export default Header;
