import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation.js";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.Navigation}>
        <Navigation />
      </div>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <p>Header</p>
          <span>Untertitel</span>
        </div>
      </div>
    </header>
  );
}
export default Header;
