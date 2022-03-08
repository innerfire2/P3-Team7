// import { Link } from "react-router-dom";
import Header from "../Header/Header.js";
import backgroundVideo from "./fontasticVideoFaster.mp4";
import styles from "./VideoScreen.module.css";

export default function VideoScreen() {
  return (
    <>
      <Header title="Video" />
      <div className={styles.videoContainer}>
        <main>
          <video autoPlay loop muted className={styles.video}>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </main>
        {/* <nav>
          <Link to="/home">Back to Home</Link>
        </nav>{" "} */}
      </div>
    </>
  );
}
