import { Link } from "react-router-dom";
import styles from "./styles/CityItem.module.scss";
import { useCitiesContext } from "../context/CitiesContextProvider";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity, deleteCity } = useCitiesContext();
  const isCurrentCityActive = id === currentCity.id;

  const handleDelete = (e) => {
    e.preventDefault();
    deleteCity(city);
  };
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          isCurrentCityActive ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
