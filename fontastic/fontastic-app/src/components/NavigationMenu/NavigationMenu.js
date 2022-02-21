import styles from "./NavigationMenu.module.css";
import { Link } from "react-router-dom";
function NavigationMenu(props) {
  return (
    <div className={styles.Bg}>
      <div className={styles.NavigationMenuBg}>
        <p>Menü</p>
        <div className={styles.NavigationMenu}>
          <li>
            {" "}
            <Link to="/" onClick={props.closeMenu}>
              {" "}
              Home{" "}
            </Link>
          </li>
          <li style={{ borderTop: "1px solid rgba(0, 0, 0, 0.15)" }}>
            <Link to="/Video" onClick={props.closeMenu}>
              Video
            </Link>
          </li>
          <li style={{ borderTop: "1px solid rgba(0, 0, 0, 0.15)" }}>
            <Link to="/LoadingScreen" onClick={props.closeMenu}>
              {" "}
              Gallerie{" "}
            </Link>
          </li>{" "}
          <li style={{ borderTop: "1px solid rgba(0, 0, 0, 0.15)" }}>
            <Link to="/About" onClick={props.closeMenu}>
              {" "}
              Über uns{" "}
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
