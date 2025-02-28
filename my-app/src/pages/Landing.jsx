import styles from "./Landing.module.scss";
import Logo from "../assets/svg/Logo.svg";

function Landing() {
	return (
		<>
			<div className={styles.landingPage}>
				<figure className={styles.landingLeft}></figure>
				<figure className={styles.logoArt}>
					<img src={Logo} />
				</figure>
				<figure className={styles.landingRight}></figure>
				<h1>AIR BEAN</h1>
				<p>Dronedelivered coffee</p>
			</div>
		</>
	);
}

export default Landing;
