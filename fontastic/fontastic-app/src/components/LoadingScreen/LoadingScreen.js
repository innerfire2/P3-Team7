import styles from "./LoadingScreen.module.css";
import { Link } from "react-router-dom";

export default function LoadingScreen() {
  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <h1>FONTASTIC</h1>
        <p>Explore, experiment and learn</p>
        <button className={styles.buttonStyle}>
          {" "}
          <Link to="/">Start</Link>
        </button>
      </div>
    </div>
  );
}
