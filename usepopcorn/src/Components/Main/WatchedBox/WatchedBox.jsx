//react hooks
import { useState } from "react";
//Components
import ToggleButton from "../../../Components/ToggleButton/ToggleButton";
import WatchedMovieList from "./WatchedMovieList/WatchedMovieList";
//custom hooks
import useToggle from "../../../Hooks/useToggle";
//assets
import { tempMovieData } from "../../../assets/tempMovieData";
console.log(tempMovieData);
function WatchedBox() {
  const [watched, setWatched] = useState(tempMovieData);
  const [isOpen, toggle] = useToggle();
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="box">
      <ToggleButton onClick={toggle}>{isOpen ? "–" : "+"}</ToggleButton>
      {isOpen && (
        <>
          <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>{watched.length} movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>{avgImdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{avgUserRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{avgRuntime} min</span>
              </p>
            </div>
          </div>
          <WatchedMovieList watchedMovies={watched} />
        </>
      )}
    </div>
  );
}

export default WatchedBox;
