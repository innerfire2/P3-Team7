import styles from "./ArScreen.module.css";
//import react icons
import { MdFormatSize } from "react-icons/md"; //size function
import { IoMoveSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { FaFont } from "react-icons/fa";
import { IoMdColorFill } from "react-icons/io";
// import { RiTranslate2 } from "react-icons/ri"; //translate into other languages icon
import { IoLanguage } from "react-icons/io5";
//import { FaLanguage } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { useState } from "react";
import ArMode from "./ArMode";
import { Link } from "react-router-dom";
// import artefactData from "../../artefactData";

export default function ArScreen({ artefactData }) {
  //using useState to declare an "active"-variable which is used to check if the icon state is active or not
  const [isActive, setActive] = useState(false);
  //using useState for a click count after which is decided when sth new renders
  const [clickCount, setClickCount] = useState(0);

  const [functionState, setFunctionState] = useState("");

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
    // if screen is clicked 5 and times enable AR mode, show camera and functions
    //if it's clicked less than 5 times show the regular ArScreen
    // else show containerARModeOn, which means show the camera etc.
    <div>
      <Link className={styles.link} to="/home">
        <MdExitToApp size={35} />
      </Link>{" "}
      <div
        className={
          clickCount === 4
            ? styles.backgroundInspo
            : clickCount === 5 && clickCount <= 5
            ? styles.containerArModeOn
            : clickCount < 5
            ? styles.ArScreen
            : styles.containerArModeOn
        }
        onClick={() => changeScreenContent()}
      >
        {/* if screen is clicked x-times make the instructions visible, else hide the text */}
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
              isActive && clickCount === 1
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
              isActive && clickCount === 2
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
              isActive && clickCount === 3
                ? styles.visibleText
                : styles.hiddenText
            }
          >
            <p>
              Alles verstanden? Dann <span>let's go!</span>
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
            <div className={styles.taskBox}>
              <span>Denkanstoß</span>
              <p> {artefactData[2].taskInspo} </p>
              <p>Probier dich aus! </p>
            </div>
            {/* {artefactData.map(function (artefactData) {
                return (
                  <li key={artefactData.id}> {artefactData.taskInspo} </li>
                );
              })} */}

            <p className={styles.fadeIn}>TIPPE!</p>
          </div>
        </div>
        {/* show colored icons depending on icon state and clickCount  */}
      </div>
      <div
        className={
          isActive && clickCount === 1
            ? styles.iconContainer
            : isActive && clickCount === 2
            ? styles.iconContainer3
            : styles.iconContainer2
        }
      >
        <IoMoveSharp
          className={`${styles.iconPosition} ${
            functionState === "position" && styles.active
          }`}
          onClick={() => setFunctionState("position")}
        />
        <FaFont
          className={`${styles.iconFont} ${
            functionState === "font" && styles.active
          }`}
          onClick={() => setFunctionState("font")}
        />
        <IoMdColorFill
          className={`${styles.iconColor} ${
            functionState === "color" && styles.active
          }`}
          onClick={() => setFunctionState("color")}
        />
        <MdFormatSize
          className={`${styles.iconSize} ${
            functionState === "size" && styles.active
          }`}
          onClick={() => setFunctionState("size")}
        />
        <IoLanguage
          className={`${styles.iconTranslate} ${
            functionState === "language" && styles.active
          }`}
          onClick={() => setFunctionState("language")}
        />

        <FaCamera
          className={
            (isActive && clickCount === 2) || functionState === "camera"
              ? styles.activeIconCamera
              : styles.inactiveIconCamera
          }
          onClick={() => setFunctionState("camera")}
        />
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
