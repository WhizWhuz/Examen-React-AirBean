import styles from "./Landing.module.scss";
import Logo from "../assets/svg/Logo.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500);

    const navTimer = setTimeout(() => navigate("/menuPage"), 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <>
      <div className={`${styles.landingPage} ${fadeOut ? styles.fadeOut : ""}`}>
        <figure className={styles.logoArt}>
          <img src={Logo} />
        </figure>
        <h1>AIR BEAN</h1>
        <p>Dronedelivered coffee</p>
      </div>
    </>
  );
}

export default Landing;
