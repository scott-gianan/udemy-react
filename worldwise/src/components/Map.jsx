import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./styles/Map.module.scss";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>
        Position: {lat},{lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        Change Pos
      </button>
    </div>
  );
}

export default Map;
