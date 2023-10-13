import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import { useCities } from "../context/CitiesContext";

function CountryList() {
  const { cities, loading } = useCities();

  if (!loading && !cities.length)
    return (
      <Message message="Add your first city by clicking on a city ont the map" />
    );
  if (loading) {
    return <Spinner />;
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={cities.id} />
      ))}
    </div>
  );
}

export default CountryList;
