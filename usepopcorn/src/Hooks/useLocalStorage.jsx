import { useState, useEffect } from "react";
export function useLocalStorage() {
  const [watchedMovies, setWatchedMovies] = useState(() => {
    return JSON.parse(localStorage.getItem("watchedMovies")) ?? [];
  });
  useEffect(() => {
    localStorage.setItem("watchedMovies", JSON.stringify([...watchedMovies]));
  }, [watchedMovies]);
  return [watchedMovies, setWatchedMovies];
}
