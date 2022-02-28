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
// import { Link } from "react-router-dom";
// import Header from "../Header/Header.js";
import backgroundVideo from "./testVideo.mp4";
import styles from "./IntroductionScreen.module.css";
// import LoadingScreen from "../LoadingScreen/LoadingScreen.js";
import SkipButton from "../Button/SkipButton";
import { useState } from "react";

export default function IntroductionScreen() {
  // const [showSkipButton, setShowSkip] = useState(false);
  const [videoEnded, setVideoEnded] = useState(true);

  const showButton = () => {
    setVideoEnded(!videoEnded);
    console.log("Video has ended");
  };
  // useEffect(() => {
  //   setInterval(() => {
  //     setShowSkip(!showSkipButton);
  //   }, 5000);
  // }, []);
  // const resetVideoState = () => {
  //   setVideoEnded(!videoEnded);
  //   // <LoadingScreen />;
  //   console.log("Video has been resetted");
  // };

  return (
    <>
      {/* {videoEnded ? ( */}
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
            <SkipButton />
            {/* <Link to="/LoadingScreen">Skip</Link> */}
          </nav>
        </div>
      </>
      {/* ) : (
        <> */}
      {/* <Header /> */}
      {/* <div className={styles.videoContainer2}>
            <main> */}
      {/* <LoadingScreen /> */}
      {/* <video
                autoPlay
                onEnded={() => showButton()}
                muted
                className={styles.video}
              >
                <source src={backgroundVideo} type="video/mp4" />
              </video>
              <button */}
      {/* onClick={resetVideoState} */}
      {/* className={styles.button}
              >
                <Link to="/LoadingScreen">Skip</Link>
              </button>
            </main>{" "}
          </div>{" "}
        </> */}
      {/* )} */}
    </>
  );
}
