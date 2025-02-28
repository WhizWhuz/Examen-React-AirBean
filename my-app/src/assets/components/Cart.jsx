import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

function Cart({ cartIsOpen, setCartIsOpen, cartItem, setCartItem }) {

	// // console.log("Cart props:", { cartIsOpen, setCartIsOpen }); // Debugging
	const navigate = useNavigate();

	const totalPrice = cartItem.reduce((sum, item) => sum + item.price, 0);

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
				throw new Error("Något gick fel!");
			}

			const result = await response.json();
			// console.log("Order response: ", result);
			return result;
		} catch (error) {
			console.error("Fel vid anropet (HTTP):", error);
		}
	}

	//handleOrder triggas av onClick **Take my money**
	async function handleOrder() {
		if (cartItem.length === 0) {
			alert("Din kundvagn är tom!");
			return;
		}

    const orderResponse = await postOrder(cartItem);

		//Spara i sessionStorage
		if (orderResponse) {
			sessionStorage.setItem("orderNr", orderResponse.orderNr);
			sessionStorage.setItem("eta", orderResponse.eta);

			navigate("/status");

			//Töm arrayn, dölj cart
			setCartItem([]);
			setCartIsOpen(false);
		}
	}

  return (
    <>
      {cartIsOpen && (
        <div className={styles.cartPage} onClick={() => setCartIsOpen(false)}>
          <div className={styles.cartPointer}></div>
          <div
            className={styles.cartModal}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles.yourOrder}>Din beställning</h2>
            <ul>
              {cartItem.map((item, index) => (
                <li key={index}>
                  <CartItem
                    setCartItem={setCartItem}
                    key={item.id}
                    item={item}
                  ></CartItem>
                </li>
              ))}
            </ul>
            <span className={styles.bottomPart}>
              <span className={styles.totalSeparator}>
                <p>Total</p>
                <p className={styles.totalPrice}>{totalPrice} kr</p>
              </span>
              <p className={styles.description}>inkl moms + drönarleverans</p>
              <Button onClick={handleOrder} type={"order"}>
                Take my money!
              </Button>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
