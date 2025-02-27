import Button from "./Button";
import styles from "./Cart.module.scss";

function Cart({ cartIsOpen, setCartIsOpen, cartItem, setCartItem }) {
	// // console.log("Cart props:", { cartIsOpen, setCartIsOpen }); // Debugging

	async function postOrder(orderDetails) {
		try {
			const response = await fetch(
				"https://airbean-9pcyw.ondigitalocean.app/api/beans/order",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ details: { order: orderDetails } }),
				}
			);
			if (!response.ok) {
				throw new Error("Någonting gick fel med beställningen!");
			}
			const result = await response.json();
			console.log(result);
			return result;
		} catch (error) {
			console.error("Fel vid anropet (HTTP):", error);
		}
	}

	return (
		<>
			{cartIsOpen && (
				<div className={styles.cartPage}>
					<div className={styles.cartModal}>
						<h2>Din beställning</h2>
						<ul>
							{cartItem.map((item, index) => (
								<li key={index}>
									{item.title} {item.price}
								</li>
							))}
						</ul>
						<Button onClick={() => postOrder(cartItem)} type={"order"}>
							Take my money!
						</Button>
						<button onClick={() => setCartIsOpen(false)}>Close</button>
					</div>
				</div>
			)}
		</>
	);
}

export default Cart;
