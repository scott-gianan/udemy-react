//react hooks
import { useState } from "react";
import { tempMovieData } from "../../../../assets/tempMovieData";
import Movie from "../Movie/Movie";

function MovieList() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
