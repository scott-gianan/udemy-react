import Sidebar from "../components/Sidebar";
import styles from "./styles/AppLayout.module.scss";
import Map from "../components/Map";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
