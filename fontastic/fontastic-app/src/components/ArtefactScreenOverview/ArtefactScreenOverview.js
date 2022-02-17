import styles from "./ArtefactScreenOverview.module.css";
import Artefact from "../Artefact/Artefact.js";

export default function ArtefactScreenOverview({ artefactData }) {
  return (
    <div className={styles.screen}>
      {/* <h1>Übersicht</h1> */}
      {artefactData.map((item) => (
        <Artefact artefactData={item} key={item.id} />
      ))}
    </div>
  );
}
