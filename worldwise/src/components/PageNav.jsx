import { NavLink } from "react-router-dom";
import styles from "./styles/PageNav.module.scss";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
