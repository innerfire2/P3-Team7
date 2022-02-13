import styles from "./Artefact.module.css";
import { IoBulb } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Artefact({ artefactData }) {
  function AlertMsg() {
    alert(artefactData.title);
  }
  return (
    <div className={styles.container}>
      <div className={styles.card} onClick={AlertMsg}>
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
          <h3 className={styles.learning}>{artefactData.learning} </h3>
          <span>mehr erfahren </span>
          {/* <IoIosArrowForward /> */}
          <IoChevronForwardOutline className={styles.BackArrow} size={25} />
        </div>
      </div>
    </div>
  );
}
