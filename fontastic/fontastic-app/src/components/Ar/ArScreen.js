import styles from "./ArScreen.module.css";
import { IoMoveSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { FaFont } from "react-icons/fa";
import { IoMdColorFill } from "react-icons/io";
// import { IoMdColorFill } from "react-icons/io";
// import { IoMdColorFill } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ArScreen() {
  return (
    <div className={styles.ArScreen}>
      <div className={styles.content}>
        <h1>AR Mode</h1>
        {/* <p>Bewege dein Handy, um das Artefakt zu erfassen</p> */}
        <div className={styles.iconContainer}>
          <IoMoveSharp />
          <FaFont />
          <IoMdColorFill />
          <FaCamera />
        </div>
        <Link style={{ color: "white" }} className={styles.link} to="/">
          zurück
        </Link>
      </div>
    </div>
  );
}

// IoMoveSharp
//IoMdColorFill
//IoMdInformationCircleOutline
//IoMdHelpCircleOutline
//IoMdPhonePortrait
//FaCamera
