import styles from "./Status.module.scss";
import Drone from "../assets/svg/drone.svg";
import Button from "../assets/components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Status() {
	const navigate = useNavigate();

	const [orderNumber, setOrderNumber] = useState("");
	const [eta, setEta] = useState("-");

	useEffect(() => {
		const storedOrderNr = sessionStorage.getItem("orderNr");

		if (storedOrderNr) {
			setOrderNumber(storedOrderNr);
			fetchOrderStatus(storedOrderNr);
		} else {
			console.log("Hittade inget i sessionStorage");
		}
	}, []);

	//Fetcha dynamisk/real-time order status
	async function fetchOrderStatus(orderNr) {
		try {
			const response = await fetch(
				`https://airbean-9pcyw.ondigitalocean.app/api/beans/order/status/${orderNr}`
			);

			if (!response.ok) {
				throw new Error("Kan inte hämta orderstatus!");
			}

			const result = await response.json();
			setEta(result.eta);
			console.log("ETA är: ", result);
		} catch (error) {
			console.error("Fel vid hämtning av orderstatus: ", error);
		}
	}

	const handleButtonClick = () => {
		navigate(-1);
	};

	return (
		<div className={styles.statusPage}>
			<p className={styles.ordernumber}>
				Ordernummer <strong>#{orderNumber}</strong>
			</p>
			<img src={Drone} alt="" />
			<span>
				<h2 className={styles.ontheway}>
					<strong>Din beställning är på väg!</strong>
				</h2>
				<h4 className={styles.minutes}>
					<strong>{eta}</strong> Minuter
				</h4>
			</span>
			<Button onClick={handleButtonClick} type={"status"}>
				Ok, cool!
			</Button>
		</div>
	);
}
