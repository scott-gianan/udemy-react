//react hooks
import { useState } from "react";
//components
import WatchedMovie from "../WatchedMovie/WatchedMovie";
//assets
import { tempMovieData } from "../../../../assets/tempMovieData";

function WatchedMovieList({ watchedMovies }) {
  return (
    <ul className="list">
      {watchedMovies?.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
