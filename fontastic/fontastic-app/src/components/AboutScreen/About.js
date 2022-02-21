import { Link } from "react-router-dom";
import styles from "./About.module.css";
import Header from "../Header/Header.js";

export default function About() {
  return (
    <>
      <Header />
      <div className={styles.aboutContainer}>
        <main>
          <h2>Who are we?</h2>
          <p>Description of the team and the project</p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </>
  );
}
