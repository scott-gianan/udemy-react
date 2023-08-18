import styles from "./styles/CountryList.module.scss";
import CountryItem from "./CountryItem";
function CountryList({ cities }) {
  const countries = cities.reduce((acc, currCity) => {
    const { country, emoji } = currCity;
    const nextCountry = {
      country,
      emoji,
    };
    const found = acc.find((c) => c.country === nextCountry.country);
    if (!found) {
      acc.push(nextCountry);
    }
    return acc;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem key={country.country} country={country} />;
      })}
    </ul>
  );
}

export default CountryList;
