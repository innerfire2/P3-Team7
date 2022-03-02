import styles from "./ArtefactScreen.module.css";
// import Artefact from "../Artefact/Artefact.js";
import { IoBulb } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ArtefactScreen({ artefactData, closeHandler }) {
  function AlertMsg() {
    //alert("Leads to AR-Mode");
    <Link to="/LoadingScreen"></Link>;
  }
  return (
    <div className={styles.screen}>
      <IoChevronBackOutline
        className={styles.BackArrow}
        onClick={closeHandler}
        size={35}
      />
      {/* <h1>Artefakt</h1> */}
      <div className={styles.imageContainer}>
        <img
          className={styles.photo}
          src={`./assets/${artefactData.img}`}
          alt=""
        />{" "}
      </div>
      <div className={styles.lowerContainer}>
        <p>{artefactData.title}</p>
        <div className={styles.Text}>
          <h3>Kurzbeschreibung</h3>
          <p>{artefactData.textDescription}</p>
        </div>{" "}
        <div className={styles.learningContainer}>
          <h3 className={styles.learning}>
            <IoBulb className={styles.bulbIcon} />
            LEARNING
          </h3>{" "}
          <p>{artefactData.learningText1}</p>
          <p>{artefactData.learningText2}</p>
          <p>{artefactData.learningText3}</p>
        </div>
        <div className={styles.button} onClick={AlertMsg}>
          <div className={styles.circle}>AR</div>
          <Link to="/ar">AR Funktion ausprobieren</Link>
        </div>
      </div>{" "}
    </div>
  );
}
