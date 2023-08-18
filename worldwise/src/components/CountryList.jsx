import styles from "./styles/CountryList.module.scss";
import CountryItem from "./CountryItem";
function CountryList({ cities }) {
  const countries = cities.reduce((acc, currCity) => {
    const { country, emoji, id } = currCity;
    const nextCountry = {
      country,
      emoji,
      id,
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
        return <CountryItem key={country.id} country={country} />;
      })}
    </ul>
  );
}

export default CountryList;
