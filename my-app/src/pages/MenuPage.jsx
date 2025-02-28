import styles from "../pages/Menu.module.scss";
import CoffeeItem from "../assets/components/CoffeeItem";
import Nav from "../assets/components/Nav";
import Footer from "../assets/svg/footer_bg.svg";

function MenuPage({ menu, setCartItem, cartItem }) {
	function addToCart(item) {
		setCartItem((prevCart) => [
			...prevCart,
			{ name: item.title, price: item.price },
		]);
	}

	return (
		<>
			<div className={styles.menuPage}>
				<div className={styles.menuContainer}>
					<h1 className={styles.headerName}>Meny</h1>
					<div className={styles.coffeeList}>
						{menu.map((item) => (
							<CoffeeItem key={item.id} item={item} addToCart={addToCart} />
						))}
					</div>
				</div>
				<img className={styles.footer} src={Footer} alt="" />
			</div>
		</>
	);
}

export default MenuPage;
