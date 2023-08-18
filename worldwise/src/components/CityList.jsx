import styles from "./styles/CityList.module.scss";
import Spinner from "./Spinner";
import City from "./City";
function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return (
          <li key={city.id}>
            <City currentCity={city} />
          </li>
        );
      })}
    </ul>
  );
}

export default CityList;
