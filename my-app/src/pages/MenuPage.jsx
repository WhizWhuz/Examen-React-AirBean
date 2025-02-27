import styles from "../pages/Menu.module.scss";
import CoffeeItem from "../assets/components/CoffeeItem";
import Nav from "../assets/components/Nav";

function MenuPage({ menu, setCartItem, cartItem }) {
	function addToCart(item) {
		setCartItem((prevCart) => [
			...prevCart,
			{ title: item.title, price: item.price },
		]);

		console.log("Updated cart:", [
			...cartItem,
			{ title: item.title, price: item.price },
		]);
	}

	return (
		<>
			<Nav />
			<div className={styles.menuPage}>
				<h1 className={styles.menuHeader}>Meny</h1>
				<div className={styles.coffeeList}>
					{menu.map((item) => (
						<CoffeeItem key={item.id} item={item} addToCart={addToCart} />
					))}
				</div>
			</div>
		</>
	);
}

export default MenuPage;
