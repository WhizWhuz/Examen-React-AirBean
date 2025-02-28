import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Cart from "./assets/components/Cart";
import MenuPage from "./pages/MenuPage";
import Nav from "./assets/components/Nav";
import Header from "./assets/components/Header";
import Status from "./pages/Status";
import NotFound from "./pages/NotFound";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [menu, setMenu] = useState([]);
	const [cartItem, setCartItem] = useState([]);

	//Fetch the coffee menu
	useEffect(() => {
		async function fetchMenu() {
			try {
				const response = await fetch(
					"https://airbean-9pcyw.ondigitalocean.app/api/beans"
				);
				if (!response.ok) {
					throw new Error(
						"Something went wrong, can't show the menu! (HTTP error)"
					);
				}
				const menuData = await response.json();
				//console.log(menuData.menu);
				setMenu(menuData.menu.slice(0, 6));
			} catch (error) {
				console.error("Fel vid hämtning av meny:", error);
			}
		}

		fetchMenu();
	}, []);

	return (
		<>
			<Router>
				<Header
					setIsOpen={setIsOpen}
					setCartIsOpen={setCartIsOpen}
					cartItem={cartItem}
				/>

				<Nav isOpen={isOpen} setIsOpen={setIsOpen} />
				<Cart
					cartIsOpen={cartIsOpen}
					setCartIsOpen={setCartIsOpen}
					cartItem={cartItem}
					setCartItem={setCartItem}
				/>

				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/About" element={<About />} />
					<Route
						path="/MenuPage"
						element={
							<MenuPage
								menu={menu}
								setCartItem={setCartItem}
								cartItem={cartItem}
							/>
						}
					/>
					<Route path="/Status" element={<Status />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}
export default App;
