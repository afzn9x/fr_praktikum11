import { Link } from "react-router-dom";
import styles from "./NavbarItem.module.css";

const NavbarItem = (props) => {
  const { navbarItem } = props;
  return (
    <li className={styles.navbar__item}>
      <Link className={styles.navbar__link} to={navbarItem.source}>
        {navbarItem.title}
      </Link>
    </li>
  );
};

export default NavbarItem;
