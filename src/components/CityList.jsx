import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

function CityList() {
  const { cities, loading } = useCities();

  if (!loading && !cities.length)
    return (
      <Message message="Add your first city by clicking on a city ont the map" />
    );
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
}

export default CityList;
