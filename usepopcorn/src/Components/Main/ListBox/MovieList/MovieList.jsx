import Movie from "../Movie/Movie";

function MovieList({ movies, onSelectedMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} selectMovie={onSelectedMovie} />
      ))}
    </ul>
  );
}

export default MovieList;
