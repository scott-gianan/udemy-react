import React, { useState, useEffect, useContext } from "react";
const BASE_URL = `http://localhost:8000`;
const CitiesContext = React.createContext();

export default function CitiesContextProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  const citiesValue = {
    cities,
    isLoading,
  };
  return (
    <CitiesContext.Provider value={citiesValue}>
      {children}
    </CitiesContext.Provider>
  );
}
export function useCitiesContext() {
  const { cities, isLoading } = useContext(CitiesContext);
  return { cities, isLoading };
}
