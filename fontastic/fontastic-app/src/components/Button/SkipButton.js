import styles from "./SkipButton.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SkipButton() {
  const [showSkipButton, setShowSkip] = useState(false);
  // useEffect(() => {
  //   setInterval(() => {
  //     setShowSkip(true);
  //   }, 2000);
  // }, []);
  useEffect(() => {
    const timerId = setInterval(() => {
      setShowSkip(true);
    }, 2000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      {/* <Link to="/LoadingScreen">Skip</Link> */}
      {showSkipButton && (
        <nav>
          <button className={styles.button}>
            <Link to="/LoadingScreen">Skip</Link>
          </button>{" "}
        </nav>
      )}
    </>
  );
}
