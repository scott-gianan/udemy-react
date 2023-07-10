//react hooks
//components
import WatchedMovie from "../WatchedMovie/WatchedMovie";
//assets

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
