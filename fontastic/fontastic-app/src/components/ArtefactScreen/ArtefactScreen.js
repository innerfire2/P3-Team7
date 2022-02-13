import styles from "./ArtefactScreen.module.css";
import Artefact from "../Artefact/Artefact.js";
// import artefactData from "../../artefactData";

export default function ArtefactScreen({ artefactData }) {
  return (
    <div className={styles.screen}>
      <Artefact artefactData={artefactData} />
    </div>
  );
}
