import { useState, useEffect } from "react";
export function useLocalStorage(key, fallbackValue) {
  const [values, setValues] = useState(() => {
    return JSON.parse(localStorage.getItem("watchedMovies")) ?? fallbackValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify([...values]));
  }, [values, key]);
  return [values, setValues];
}
