import styles from "./ArtefactScreenOverview.module.css";
import Artefact from "../Artefact/Artefact.js";
import artefactData from "../../artefactData.js";

export default function ArtefactScreenOverview() {
  return (
    <div className={styles.screen}>
      {/* <h1>Übersicht</h1> */}
      {artefactData.map((item) => (
        <Artefact artefactData={item} key={item.id} />
      ))}
    </div>
  );
}
