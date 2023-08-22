import { useEffect, useRef, useState } from "react";
import styles from "./styles/Form.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";
import useURLPosition from "../hooks/useURLPosition";
import Spinner from "./Spinner";
import Message from "./Message";
import DatePicker from "react-datepicker";
import { useCitiesContext } from "../context/CitiesContextProvider";
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const navigate = useNavigate();
  const { createCity, isLoading } = useCitiesContext();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [isGeoLocationLoading, setIsGeoLocationLoading] = useState(false);
  const [geoCodingError, setGeoCodingError] = useState("");
  const [lat, lng] = useURLPosition();
  const emoji = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) {
      return;
    }
    const newCity = {
      cityName,
      country,
      emoji: emoji.current,
      notes,
      date,
      position: {
        lat,
        lng,
      },
    };
    await createCity(newCity);
    navigate("/app/cities");
  }
  useEffect(() => {
    if (!lat && !lng) return;
    async function fetchCityData() {
      try {
        setGeoCodingError("");
        setIsGeoLocationLoading(true);
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        const data = await response.json();
        if (!data.countryCode) throw new Error("Click somewhere else");
        setCountry(data.countryName);
        setCityName(data.city || data.locality || "");
        emoji.current = convertToEmoji(data.countryCode);
      } catch (error) {
        setGeoCodingError(error.message);
      } finally {
        setIsGeoLocationLoading(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  if (!lat && !lng) {
    return <Message message={`Click somewhere on the map 🙂`} />;
  }

  if (geoCodingError) {
    return <Message message={geoCodingError} />;
  }
  return isGeoLocationLoading ? (
    <Spinner />
  ) : (
    <form className={`${styles.form}`} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji.current}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button
          type="primary"
          onClick={() => {
            navigate(-1);
          }}
        >
          Add
        </Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
