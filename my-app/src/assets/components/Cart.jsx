import Button from "./Button";
import styles from "./Cart.module.scss";

function Cart({ cartIsOpen, setCartIsOpen }) {
  console.log("Cart props:", { cartIsOpen, setCartIsOpen }); // Debugging

  return (
    <>
      {cartIsOpen && (
        <div className={styles.cartPage}>
          <div className={styles.cartModal}>
            <h2>Din beställning</h2>
            <button onClick={() => setCartIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
