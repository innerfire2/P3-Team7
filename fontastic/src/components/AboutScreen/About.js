import { Link } from "react-router-dom";
import styles from "./About.module.css";
import Header from "../Header/Header.js";
import fontLogo from "./fontastic.png";

export default function About() {
  return (
    <>
      <Header title="Über uns" unterTitle="Teamvorstellung" />
      <div className={styles.aboutContainer}>
        <main>
          <img className="photo" src={fontLogo} alt="" />
          <h3>Team</h3>
          <p>
            Wir sind Isabel, Katharina und Lara und studieren{" "}
            <a href="https://imd.mediencampus.h-da.de/">
              Interactive Media Design
            </a>{" "}
            an der Hochschule Darmstadt.
          </p>
          <h3>Projekt</h3>
          <p>
            Diese App ist in Kooperation mit der Universität Heidelberg
            entstanden, genauer gesagt mit dem{" "}
            <a href="https://stadtspaziergang.materiale-textkulturen.de/index.php">
              Sonderforschungsbereich
            </a>
            <br></br>
            "Materiale Textkulturen" .<br></br>
            <br />
            Es stellt das finale Projekt für das dritte Semester dar.
          </p>
        </main>
        <nav>
          <Link to="/home">Home</Link>
        </nav>
      </div>
    </>
  );
}
