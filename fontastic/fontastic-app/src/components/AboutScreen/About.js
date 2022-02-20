import { Link } from "react-router-dom";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <main>
        <h2>Who are we?</h2>
        <p>Description of the team and the project</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
