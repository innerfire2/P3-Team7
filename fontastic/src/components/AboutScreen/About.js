import { Link } from "react-router-dom";
import styles from "./About.module.css";
import Header from "../Header/Header.js";

export default function About() {
  return (
    <>
      <Header title="Über uns" unterTitle="Teamvorstellung" />
      <div className={styles.aboutContainer}>
        <main>
          <h2>Who are we?</h2>
          <h3>Team</h3>
          <p>
            Wir sind Isabel, Katharina und Lara und studieren an der Hochschule
            Darmstadt Interactive Media Design. Diese App ist unser finales
            Projekt für das dritte Semester und entstand in Kooperation mit
            Universität Heidelberg, genauer gesagt mit dem
            Sonderforschungsbereich Materiale Textkulturen.{" "}
          </p>
          <h3>Projekt</h3>
          <p>
            Der Leitgedanke, der hinter unserem Projekt stand, war es die
            Wahrnehmung von Schrift neu zu erlernen.
          </p>
        </main>
        <nav>
          <Link to="/home">Home</Link>
        </nav>
      </div>
    </>
  );
}
