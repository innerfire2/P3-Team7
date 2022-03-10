import styles from "./ArtefactScreen.module.css";
// import Artefact from "../Artefact/Artefact.js";
import { IoBulb } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ArtefactScreen({ artefactData, closeHandler }) {
  function AlertMsg() {
    alert("Opens Map and shows location of the artefact");
  }
  return (
    <div className={styles.screen}>
      <IoChevronBackOutline
        className={styles.BackArrow}
        onClick={closeHandler}
        size={35}
      />
      <div className={styles.imageContainer}>
        <img
          className={styles.photo}
          src={`./assets/${artefactData.img}`}
          alt=""
        />{" "}
      </div>
      <div className={styles.lowerContainer}>
        <p>{artefactData.title}</p>
        <div className={styles.locationContainer} onClick={AlertMsg}>
          <FaMapMarkerAlt className={styles.locationIcon} />
          <p>Standort auf Karte anzeigen</p>
        </div>
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
          <p>{artefactData.learningText4}</p>
        </div>
        <div className={styles.button}>
          <div className={styles.circle}>AR</div>
          <Link to="/ar">AR Funktion ausprobieren</Link>
        </div>
      </div>{" "}
    </div>
  );
}
