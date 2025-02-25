import styles from "./Landing.module.scss";
import Logo from "../assets/svg/Logo.svg";
import Nav from "../assets/components/Nav";

function Landing() {
  return (
    <>
      <div className={styles.landingPage}>
        <Nav />
        <figure className={styles.landing}>
          <img src={Logo} />
        </figure>
        <h1>AIR BEAN</h1>
        <p>Dronedelivered coffee</p>
      </div>
    </>
  );
}

export default Landing;
