import React, { useEffect, useContext, useCallback, useReducer } from "react";
const BASE_URL = `http://localhost:8000`;
const CitiesContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "cities/created": {
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    }
    case "set-current-city": {
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    }
    case "city/add": {
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    }
    case "city/deleted": {
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
        currentCity: {},
      };
    }
    case "rejected": {
      return {
        ...state,
        error: action.payload,
      };
    }
  }
  throw new Error("Unknown Action " + action.type);
}

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

export default function CitiesContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities, isLoading, currentCity, error } = state;
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    const fetchCities = async () => {
      dispatch({ type: "loading" });
      try {
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        dispatch({ type: "cities/created", payload: data });
      } catch (error) {
        dispatch({ type: "rejected", payload: error.message });
      }
    };
    fetchCities();
  }, []);
  const getCity = useCallback(
    async (id) => {
      if (currentCity.id === Number(id)) {
        return;
      }
      dispatch({ type: "loading" });
      try {
        const response = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await response.json();
        dispatch({ type: "set-current-city", payload: data });
      } catch (error) {
        dispatch({ type: "rejected", payload: error.message });
      }
    },
    [currentCity.id]
  );
  const createCity = useCallback(async (newCity) => {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`${BASE_URL}/cities/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch({ type: "city/add", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  }, []);
  const deleteCity = useCallback(
    async (city) => {
      dispatch({ type: "loading" });
      try {
        await fetch(`${BASE_URL}/cities/${city.id}`, {
          method: "DELETE",
        });
        const newCities = cities.filter((c) => c.id !== city.id);
        dispatch({ type: "city/deleted", payload: newCities });
      } catch (error) {
        dispatch({ type: "rejected", payload: error.message });
      }
    },
    [cities]
  );
  const citiesValue = {
    cities,
    isLoading,
    getCity,
    currentCity,
    createCity,
    deleteCity,
    error,
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
