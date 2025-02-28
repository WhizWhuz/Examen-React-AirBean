import styles from "../components/CartItem.module.scss";

function CartItem({ item }) {
	return (
		<span className={styles.cartItem}>
			<span>
				<h2 className={styles.cofTitle}>{item?.name}</h2>
				<p className={styles.cofDesc}>{item?.price} kr</p>
			</span>
		</span>
	);
}

export default CartItem;
