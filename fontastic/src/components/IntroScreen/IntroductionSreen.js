import backgroundVideo from "./fontasticVideoFaster.mp4";
import styles from "./IntroductionScreen.module.css";
import SkipButton from "../Button/SkipButton";
import { useState } from "react";

export default function IntroductionScreen() {
  const [videoEnded, setVideoEnded] = useState(true);

  const showButton = () => {
    setVideoEnded(!videoEnded);
    console.log("Video has ended");
  };

  return (
    <>
      <>
        <div className={styles.videoContainer}>
          <main>
            <video
              autoPlay
              onEnded={() => showButton()}
              muted
              className={styles.video}
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          </main>
          <nav>
            <SkipButton />
          </nav>
        </div>
      </>
    </>
  );
}
