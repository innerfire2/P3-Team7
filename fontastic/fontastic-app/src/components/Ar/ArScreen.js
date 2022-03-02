import styles from "./ArScreen.module.css";
// import { IoMoveSharp } from "react-icons/io5";
// import { FaCamera } from "react-icons/fa";
// import { FaFont } from "react-icons/fa";
// import { IoMdColorFill } from "react-icons/io";
// import { IoMdColorFill } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ArScreen() {
  const [isActive, setActive] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const clickScreen = () => {
    setClickCount(clickCount + 1);
    console.log(clickCount);
  };

  const toggleSwitchColors = () => {
    setActive(true);
    console.log("switch the colors");
  };

  const changeScreenContent = () => {
    return (
      toggleSwitchColors(),
      clickScreen(),
      console.log("both functions together work")
    );
  };
  return (
    <div className={styles.ArScreen} onClick={() => changeScreenContent()}>
      <div className={styles.content}>
        <h1>AR Mode</h1>
        <div
          className={
            isActive && clickCount === 3
              ? styles.visibleText
              : styles.hiddenText
          }
        >
          {/* <p>Bewege dein Handy, um das Artefakt zu erfassen</p> */}
          <p>
            Hier findest du die <span>AR-Funktionen</span>
          </p>
        </div>{" "}
        <div
          className={
            isActive && clickCount === 4
              ? styles.visibleText
              : styles.hiddenText
          }
        >
          <p>
            Halte hier gerne deine <span>Ergebnisse</span> fotografisch fest
          </p>
        </div>
        <div
          className={
            isActive && clickCount === 5
              ? styles.visibleText
              : styles.hiddenText
          }
        >
          <p>
            Alles verstanden? Dann <span>let's go!</span>
          </p>
        </div>
        <div
          className={
            isActive && clickCount === 3
              ? styles.iconContainer
              : isActive && clickCount === 4
              ? styles.iconContainer3
              : styles.iconContainer2
          }
        >
          <IoMoveSharp className={styles.iconPosition} />
          <FaFont className={styles.iconFont} />
          <IoMdColorFill className={styles.iconColor} />
          <FaCamera
            // style={{ fontSize: 30 }}
            className={
              isActive && clickCount === 4
                ? styles.activeIconCamera
                : styles.inactiveIconCamera
            }
            // className={styles.iconCamera}
          />
        </div>
        {/* style={{ color: "red" }} */}
        <Link style={{ color: "white" }} className={styles.link} to="/home">
          zurück
        </Link>
        {/* Link löschen und durch toggle auf die Artefakt Page zurückleiten */}<div/>
// import { IoMdColorFill } from "react-icons/io";
// import { Link } from "react-router-dom";


//onClick bei den Icons in active State versetzen und dann über css einfärben
// IoMoveSharp
//IoMdColorFill
//IoMdInformationCircleOutline
//IoMdHelpCircleOutline
//IoMdPhonePortrait
//FaCamera
