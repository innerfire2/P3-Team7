import styles from "./ArScreen.module.css";
//import react icons
import { MdFormatSize } from "react-icons/md"; //size function
import { IoMoveSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { FaFont } from "react-icons/fa";
import { IoMdColorFill } from "react-icons/io";
import { MdExitToApp } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { useState } from "react";
import ArMode from "./ArMode";
import { Link } from "react-router-dom";

export default function ArScreen() {
  //using useState to declare an "active"-variable which is used to check if the icon state is active or not
  const [isActive, setActive] = useState(false);
  //using useState for a click count after which is decided when sth new renders
  const [clickCount, setClickCount] = useState(0);

  const [functionState, setFunctionState] = useState("color");

  const clickScreen = () => {
    setClickCount(clickCount + 1);
    console.log(clickCount);
  };
  //function for setting the icon state on active
  const toggleSwitchColors = () => {
    setActive(true);
    console.log("switch the colors");
  };
  //function which makes it possible to pass two functions in onClick
  const changeScreenContent = () => {
    return (
      toggleSwitchColors(),
      clickScreen(),
      console.log("both functions together work")
    );
  };

  console.log(functionState);
  return (
    // if screen is clicked times enable AR mode and functions
    <div>
      <Link className={styles.link} to="/home">
        <MdExitToApp size={35} />
      </Link>{" "}
      <div
        className={
          clickCount === 5 && clickCount <= 5
            ? styles.containerArModeOn
            : clickCount < 5
            ? styles.ArScreen
            : styles.containerArModeOn
        }
        onClick={() => changeScreenContent()}
      >
        <div className={styles.content}>
          <div
            className={
              clickCount === 0 ? styles.visibleText : styles.hiddenText
            }
          >
            <span>Wie funktioniert es?</span>
            <p className={styles.fadeIn}>TIPPE!</p>
          </div>{" "}
          <div
            className={
              isActive && clickCount === 2
                ? styles.visibleText
                : styles.hiddenText
            }
          >
            {/* <p>Bewege dein Handy, um das Artefakt zu erfassen</p> */}
            <p>
              Hier findest du die <span>AR-Funktionen</span>
            </p>
            <p className={styles.fadeIn}>TIPPE!</p>
            <IoIosShareAlt className={styles.arrowIcon} />
          </div>{" "}
          <div
            className={
              isActive && clickCount === 3
                ? styles.visibleText
                : styles.hiddenText
            }
          >
            <p>
              Halte hier gerne deine <span>Ergebnisse</span> fotografisch fest
            </p>
            <p className={styles.fadeIn}>TIPPE!</p>
          </div>
          <div
            className={
              isActive && clickCount === 4
                ? styles.visibleText
                : styles.hiddenText
            }
          >
            <p>
              Alles verstanden? Dann <span>let's go!</span>
            </p>
            <p className={styles.fadeIn}>TIPPE!</p>
          </div>
        </div>

        <div
          className={
            isActive && clickCount === 2
              ? styles.iconContainer
              : isActive && clickCount === 3
              ? styles.iconContainer3
              : styles.iconContainer2
          }
        >
          <IoMoveSharp
            className={styles.iconPosition}
            onClick={() => setFunctionState("size")}
          />
          <FaFont
            className={styles.iconFont}
            onClick={() => setFunctionState("font")}
          />
          <IoMdColorFill
            className={styles.iconColor}
            onClick={() => setFunctionState("color")}
          />
          <FaCamera
            className={
              isActive && clickCount === 3
                ? styles.activeIconCamera
                : styles.inactiveIconCamera
            }
          />
        </div>
      </div>
      <ArMode whichFunction={functionState} />
    </div>
  );
}
//BEMERKUNG
// Nach dem fünften Klick auf den Screen erscheint der AR Mode, der background is farblos, die Funktionen (Icons)sind da, aber weiß

// import { IoMdColorFill } from "react-icons/io";
// import { Link } from "react-router-dom";

//onClick bei den Icons in active State versetzen und dann über css einfärben
// IoMoveSharp
//IoMdColorFill
//IoMdInformationCircleOutline
//IoMdHelpCircleOutline
//IoMdPhonePortrait
//FaCamera
