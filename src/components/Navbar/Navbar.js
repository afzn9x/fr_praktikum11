/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import { nanoid } from "nanoid";
import navbarItem from "../../utils/constant/navbarItem";
import NavbarItem from "../NavbarItem/NavbarItem";
import styles from "./Navbar.module.css";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */

  const navItem = navbarItem;
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Dotflix</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            {navItem.map((nav) => {
              return <NavbarItem key={nanoid} navbarItem={nav} />;
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
