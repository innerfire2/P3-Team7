import styles from "./SkipButton.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SkipButton() {
  const [showSkipButton, setShowSkip] = useState(false);
  //function to show skip button after 2 seconds
  useEffect(() => {
    const timerId = setInterval(() => {
      setShowSkip(true);
    }, 2000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      {/* if showSkipButton is true show following... */}
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
