import Button from "./Button";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";

function Cart({ cartIsOpen, setCartIsOpen, cartItem, setCartItem }) {
  // // console.log("Cart props:", { cartIsOpen, setCartIsOpen }); // Debugging

  const totalPrice = cartItem.reduce((sum, item) => sum + item.price, 0);

  async function postOrder(orderDetails) {
    try {
      const response = await fetch(
        "https://airbean-9pcyw.ondigitalocean.app/api/order",
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
            <h2 className={styles.yourOrder}>Din beställning</h2>
            <ul>
              {cartItem.map((item, index) => (
                <li key={index}>
                  <CartItem key={item.id} item={item}></CartItem>
                </li>
              ))}
            </ul>
            <span className={styles.bottomPart}>
              <span className={styles.totalSeparator}>
                <p>Total</p>
                <p className="totalPrice">{totalPrice} kr</p>
              </span>
              <Button onClick={() => postOrder(cartItem)} type={"order"}>
                Take my money!
              </Button>
            </span>
            <button onClick={() => setCartIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
