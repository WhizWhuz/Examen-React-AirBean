import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./Cart.module.scss";

function Cart({ cartIsOpen, setCartIsOpen, cartItem, setCartItem }) {
	// // console.log("Cart props:", { cartIsOpen, setCartIsOpen }); // Debugging
	const navigate = useNavigate();

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
			console.log("Order response: ", result);
			return result;
		} catch (error) {
			console.error("Fel vid anropet (HTTP):", error);
		}
	}

	const handleOrder = async () => {
		if (cartItem.length === 0) {
			alert("Din kundvagn är tom!");
			return;
		}

		const orderResponse = await postOrder(cartItem);

		if (orderResponse) {
			navigate("/status", {
				state: { orderNumber: orderResponse.orderNr, eta: orderResponse.eta },
			});

			setCartItem([]);
			setCartIsOpen(false);
		}
	};

	return (
		<>
			{cartIsOpen && (
				<div className={styles.cartPage}>
					<div className={styles.cartModal}>
						<h2>Din beställning</h2>
						<ul>
							{cartItem.map((item, index) => (
								<li key={index}>
									{item.name} {item.price}
								</li>
							))}
						</ul>
						<Button onClick={handleOrder} type={"order"}>
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
