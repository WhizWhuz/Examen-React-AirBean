import styles from "../components/CartItem.module.scss";
import Button from "./Button";
import Close from "../svg/close.svg";

function CartItem({ item, setCartItem }) {
  function removeFromCart(itemName) {
    setCartItem((prevCart) =>
      prevCart.filter((cartItem) => cartItem.name !== itemName)
    );
  }

  return (
    <span className={styles.cartItem}>
      <span>
        <h2 className={styles.cofTitle}>{item?.name}</h2>
        <p className={styles.cofDesc}>{item?.price} kr</p>
      </span>
      <Button onClick={() => removeFromCart(item.name)} type={"small"}>
        <img src={Close} alt="" />
      </Button>
    </span>
  );
}

export default CartItem;
