import styles from "./Status.module.scss";
import Drone from "../assets/svg/drone.svg";
import Button from "../assets/components/Button";

export default function Status() {
  return (
    <div className={styles.statusPage}>
      <p className={styles.ordernumber}>
        Ordernummer <strong>#12DV23F</strong>
      </p>
      <img src={Drone} alt="" />
      <span>
        <h2 className={styles.ontheway}>
          <strong>Din beställning är på väg!</strong>
        </h2>
        <h4 className={styles.minutes}>
          <strong>13</strong> Minuter
        </h4>
      </span>
      <Button type={"status"}>Ok, cool!</Button>
    </div>
  );
}
