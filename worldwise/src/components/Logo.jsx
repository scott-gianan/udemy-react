import styles from "./styles/Logo.module.scss";
import logo from "../../public/images/logo.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
