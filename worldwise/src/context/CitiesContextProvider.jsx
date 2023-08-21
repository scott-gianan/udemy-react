import React, { useState, useEffect, useContext, useCallback } from "react";
const BASE_URL = `http://localhost:8000`;
const CitiesContext = React.createContext();

export default function CitiesContextProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.log(error);
        console.log(error.message);
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);
  const getCity = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
    } catch (error) {
      console.log(error);
      console.log(error.message);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);
  const citiesValue = {
    cities,
    setCities,
    isLoading,
    getCity,
    currentCity,
  };
  return (
    <CitiesContext.Provider value={citiesValue}>
      {children}
    </CitiesContext.Provider>
  );
}
export function useCitiesContext() {
  const value = useContext(CitiesContext);
  return value;
}
