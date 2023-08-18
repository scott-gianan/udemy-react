import styles from "./styles/CountryList.module.scss";
import CountryItem from "./CountryItem";
function CountryList({ countries }) {
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem key={country.country} country={country} />;
      })}
    </ul>
  );
}

export default CountryList;
