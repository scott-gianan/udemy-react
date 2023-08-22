import Sidebar from "../components/Sidebar";
import styles from "./styles/AppLayout.module.scss";
import Map from "../components/Map";
import User from "../components/User";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
