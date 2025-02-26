import Button from "../assets/components/Button";
import Nav from "../assets/components/Nav";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div>
      <Nav />
      <span className={styles.cartPage}>
        <div className={styles.cartModal}>
          <span className={styles.coffeeItem}>
            <div className={styles.lefty}>
              <Button type={"small"}>+</Button>
              <span>
                <h2>Kaffe</h2>
                <p>Item</p>
              </span>
            </div>
            <h2>49kr</h2>
          </span>
        </div>
      </span>
    </div>
  );
}
