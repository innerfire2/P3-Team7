import styles from "./SkipButton.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SkipButton() {
  const [showSkipButton, setShowSkip] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setShowSkip(true);
    }, 2000);
  }, []);

  return (
    <>
      {/* <Link to="/LoadingScreen">Skip</Link> */}
      {showSkipButton && (
        <nav>
          <button className={styles.button}>
            <a target="_blank" href={process.env.PUBLIC_URL + "arPage.html"}>
              {" "}
              terminos
            </a>
          </button>{" "}
        </nav>
      )}
    </>
  );
}
