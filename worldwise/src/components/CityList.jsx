import styles from "./styles/CityList.module.scss";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }
  console.log(cities);
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
}

export default CityList;
