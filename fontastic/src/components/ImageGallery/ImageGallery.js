import styles from "./ImageGallery.module.css";
import result1 from "./Ar-Ergebnis-01.png";
import result2 from "./Ar-Ergebnis-02.png";
import Header from "../Header/Header.js";

export default function ImageGallery({ artefactData }) {
  return (
    <>
      <Header title="Gallerie" unterTitle="Deine Ergebnisse" />
      <div className={styles.container}>
        <h1>Schau dir deine Experimente an</h1>
        <div className={styles.imageContainer}>
          <img className={styles.photo} src={result1} alt="" />
          <img className={styles.photo} src={result2} alt="" />
        </div>
      </div>
    </>
  );
}
// eine Funktion/ein Button, der die Bilder in groß zeigt wenn man darauf klickt (on Click und dann per Css lösen?)
