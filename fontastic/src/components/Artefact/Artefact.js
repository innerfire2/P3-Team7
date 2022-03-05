import styles from "./Artefact.module.css";
import { useState } from "react";
import { IoBulb } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import ArtefactScreen from "../ArtefactScreen/ArtefactScreen.js";

export default function Artefact({ artefactData }) {
  const [showProfile, setShowProfile] = useState(false);

  const toggleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <div className={styles.container}>
      <div className={styles.card} onClick={toggleShowProfile}>
        <div className={styles.upperContainer}>
          <p>{artefactData.title}</p>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.photo}
            src={`./assets/${artefactData.img}`}
            alt=""
          />
        </div>
        <div className={styles.lowerContainer}>
          <IoBulb className={styles.bulbIcon} />
          {/* <IoChevronForwardOutline className={styles.BackArrow} size={25} /> */}
          <h3 className={styles.learning}>{artefactData.learning} </h3>
          {/* <span>mehr</span> */}
        </div>
        <IoChevronForwardOutline className={styles.BackArrow} size={25} />
      </div>
      {showProfile && (
        <ArtefactScreen
          artefactData={artefactData}
          closeHandler={toggleShowProfile}
        />
      )}
    </div>
  );
}
