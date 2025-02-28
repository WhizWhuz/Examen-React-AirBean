import styles from "../components/CoffeeItem.module.scss";
import Button from "../components/Button";
import plus from "../svg/plus.svg";

function CoffeeItem({ item, addToCart }) {
	return (
		<span className={styles.coffeeItem}>
			<div className={styles.lefty}>
				<Button type={"small"} onClick={() => addToCart(item)}>
					<img src={plus} alt="" />
				</Button>
				<span>
					<h2 className={styles.cofTitle}>{item?.title}</h2>
					<p className={styles.cofDesc}>{item?.desc}</p>
				</span>
			</div>
			<h2 className={styles.cofPrice}>{item?.price}kr</h2>
		</span>
	);
}

export default CoffeeItem;
