import styles from "../pages/Menu.module.scss";
import CoffeeItem from "../assets/components/CoffeeItem";
import Nav from "../assets/components/Nav";
import Footer from "../assets/svg/footer_bg.svg";

function MenuPage({ menu, setCartItem, cartItem }) {
  function addToCart(item) {
    const updatedCart = [...cartItem, { title: item.title, price: item.price }]; // ✅ Create a new version of the cart

    setCartItem(updatedCart); // ✅ Update state
    console.log("Updated cart:", updatedCart); // ✅ Logs the correct new cart
  }

  return (
    <>
      <Nav />
      <div className={styles.menuPage}>
        <div className={styles.menuContainer}>
          <h1>Meny</h1>
          <div className={styles.coffeeList}>
            {menu.map((item) => (
              <CoffeeItem key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
        <img src={Footer} alt="" />
      </div>
    </>
  );
}

export default MenuPage;
