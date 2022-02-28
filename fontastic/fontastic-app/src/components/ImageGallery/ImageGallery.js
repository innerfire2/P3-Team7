import styles from "./ImageGallery.module.css";
/* import Artefact from "../Artefact/Artefact.js"; */
import Header from "../Header/Header.js";

export default function ImageGallery({ artefactData }) {
  return (
    <>
      <Header title="Gallerie" unterTitle="Deine Ergebnisse" />
      <div className={styles.container}>
        <h1>Schau dir deine Experimente an</h1>
      </div>
    </>
  );
}
// eine Funktion/ein Button, der die Bilder in groß zeigt wenn man darauf klickt (on Click und dann per Css lösen?)
