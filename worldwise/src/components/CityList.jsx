import styles from "./styles/CityList.module.scss";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCitiesContext } from "../context/CitiesContextProvider";
function CityList() {
  const { cities, isLoading } = useCitiesContext();
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length) {
    return <Message message={`Let's add some cities!`} />;
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
}

export default CityList;
