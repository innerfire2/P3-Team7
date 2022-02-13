import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      {/* Menu-Icon adden */}
      <p>Header</p>
      <span>Untertitel</span>
    </div>
  );
}
