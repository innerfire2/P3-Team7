import styles from "./Artefact.module.css";
import { useState } from "react";
import ArtefactScreen from "../ArtefactScreen/ArtefactScreen.js";
//import the icons
import { IoBulb } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Artefact({ artefactData }) {
  const [showProfile, setShowProfile] = useState(false);

  //set the opposite of showProfile, true or false
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
            // src={`./assets/${artefactData.url}`}
            // src="https://stadtspaziergang.materiale-textkulturen.de/bilder/titelbilder_400/0005_Neue_Uni.png"
            src={artefactData.url}
            alt=""
          />
        </div>
        <div className={styles.lowerContainer}>
          <IoBulb className={styles.bulbIcon} />
          {/* <IoChevronForwardOutline className={styles.BackArrow} size={25} /> */}
          <h3 className={styles.learning}>{artefactData.learning} </h3>
        </div>
        <IoChevronForwardOutline className={styles.BackArrow} size={25} />
      </div>
      {/* if showProfile is true then show the ArtefactScreen */}
      {showProfile && (
        <ArtefactScreen
          artefactData={artefactData}
          closeHandler={toggleShowProfile}
        />
      )}
    </div>
  );
}
