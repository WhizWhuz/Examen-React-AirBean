import { useEffect, useState } from "react";
import styles from "../pages/Menu.module.scss";
import CoffeeItem from "../assets/components/CoffeeItem";
import Nav from "../assets/components/Nav";

function MenuPage() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Define the async function inside useEffect
    async function fetchMenu() {
      try {
        const response = await fetch(
          "https://airbean-9pcyw.ondigitalocean.app/api/beans"
        );
        if (!response.ok) {
          throw new Error("Something went wrong! (HTTP error)");
        }
        const menuData = await response.json();
        console.log(menuData.menu);
        setMenu(menuData.menu.slice(0, 6));
      } catch (error) {
        console.error("Fel vid hämtning av meny:", error);
      }
    }
    // Immediately call the async function
    fetchMenu();
  }, []);

  return (
    <>
      <Nav />
      <div className={styles.menuPage}>
        <h1 className={styles.menuHeader}>Meny</h1>
        <div className={styles.coffeeList}>
          {menu.map((item) => (
            <CoffeeItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MenuPage;
