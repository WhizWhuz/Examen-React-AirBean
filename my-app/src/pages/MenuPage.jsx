import { useEffect, useState } from "react";
import styles from "../pages/Menu.module.scss";
import CoffeeItem from "../assets/components/CoffeeItem";
import Nav from "../assets/components/Nav";
import Header from "../assets/components/Header";

function MenuPage({ menu, setCartItem }) {
	function addToCart(item) {
		setCartItem((prevCart) => {
			const updatedCart = [...prevCart, item.title, item.price];
			console.log(updatedCart);
			return updatedCart;
		});
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
