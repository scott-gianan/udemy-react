//react hooks
import { useState } from "react";
//Components
import ToggleButton from "../../../Components/ToggleButton/ToggleButton";
import WatchedMovieList from "./WatchedMovieList/WatchedMovieList";
import WatchedSummary from "./WatchedSummary/WatchedSummary";
//custom hooks
import useToggle from "../../../Hooks/useToggle";
//assets
import { tempWatchedMovieData } from "../../../assets/tempWatchedMovieData";
function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedMovieData);
  const [isOpen, toggle] = useToggle();

  return (
    <div className="box">
      <ToggleButton onClick={toggle}>{isOpen ? "–" : "+"}</ToggleButton>
      {isOpen && (
        <>
          <WatchedSummary watchedMovies={watched} />
          <WatchedMovieList watchedMovies={watched} />
        </>
      )}
    </div>
  );
}

export default WatchedBox;
