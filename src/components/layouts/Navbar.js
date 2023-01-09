import { Link } from "react-router-dom";


import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Company</Link>
          </li>
          <li className={styles.item}>
            <Link to="/newProject">NewProject</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;