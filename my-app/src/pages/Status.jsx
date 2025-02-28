import styles from "./Status.module.scss";
import Drone from "../assets/svg/drone.svg";
import Button from "../assets/components/Button";
import { useLocation, useNavigate } from "react-router-dom";

export default function Status() {
	const location = useLocation();
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate(-1);
	};

	const orderNumber = location.state?.orderNumber || "N/A";
	const eta = location.state?.eta || "--";

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
