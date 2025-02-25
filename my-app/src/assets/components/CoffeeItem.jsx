import styles from "../components/CoffeeItem.module.scss";
import Button from "../components/Button";

function CoffeeItem({ item }) {
  return (
    <span className={styles.coffeeItem}>
      <div className={styles.lefty}>
        <Button type={"small"}>+</Button>
        <span>
          <h2>{item?.title}</h2>
          <p className={styles.cofDesc}>{item?.desc}</p>
        </span>
      </div>
      <h2 className={styles.cofPrice}>{item?.price}</h2>
    </span>
  );
}

export default CoffeeItem;
