import { useState, useEffect, useCallback } from "react";
const BASE_URL = `http://localhost:8000`;
function useFetchCities() {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);

  return [cities, isLoading];
}

export default useFetchCities;
