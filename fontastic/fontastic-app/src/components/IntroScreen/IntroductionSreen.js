/* Button to skip einbauen */

// import styles from "./IntroductionScreen.module.css";

// export default function IntroductionScreen() {
//   return (
//     <div className={styles.screen}>
//       <h1>Übersicht</h1>
//       {/* Video hier einbetten */}
//     </div>
//   );
// }
import { Link } from "react-router-dom";
// import Header from "../Header/Header.js";
import backgroundVideo from "./testVideo.mp4";
import styles from "./IntroductionScreen.module.css";
import LoadingScreen from "../LoadingScreen/LoadingScreen.js";
import { useState } from "react";

export default function IntroductionScreen() {
  const [videoEnded, setVideoEnded] = useState(true);

  const showButton = () => {
    setVideoEnded(!videoEnded);
    console.log("Video has ended");
  };
  const resetVideoState = () => {
    setVideoEnded(!videoEnded);
    // <LoadingScreen />;
    console.log("Video has been resetted");
  };

  return (
    <>
      {videoEnded ? (
        <>
          {/* <Header /> */}
          <div className={styles.videoContainer}>
            <main>
              {/* {videoEnded ? ( */}
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
              <Link to="/">Back to Home</Link>
            </nav>{" "}
          </div>
        </>
      ) : (
        <>
          {/* <Header /> */}
          <div className={styles.videoContainer2}>
            <main>
              <LoadingScreen />
              <button
                onClick={resetVideoState}
                // onClick={turnNext}
                className={styles.button}
              >
                <Link to="/LoadingScreen">Continue</Link>
              </button>
            </main>{" "}
          </div>{" "}
        </>
      )}
    </>
  );
}
