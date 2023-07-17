//react hooks
//components
import WatchedMovie from "../WatchedMovie/WatchedMovie";
//assets

function WatchedMovieList({ watchedMovies, handleDeleteMovie }) {
  return (
    <ul className="list">
      {watchedMovies?.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteMovie={handleDeleteMovie}
        />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
