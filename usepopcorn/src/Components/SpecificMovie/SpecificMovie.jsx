import { useEffect } from "react";
import StarRating from "../../Components/StarRating/StarRating";
function SpecificMovie({
  hasUserRating,
  movie,
  onCloseMovie,
  onAddMovie,
  onSetUserRating,
  watchedMoviesList,
}) {
  const isMovieWatched = watchedMoviesList.some(
    (watchedMovie) => watchedMovie.imdbID === movie.imdbID
  );
  const watchedMovie = watchedMoviesList.find((m) => m.imdbID === movie.imdbID);
  useEffect(() => {
    if (!movie) return;
    const defaultWindowTitle = document.title;
    document.title = `Movie: ${movie.Title}`;
    return () => {
      document.title = defaultWindowTitle;
    };
  }, [movie]);
  useEffect(() => {
    const handleEscapeKey = (event) => {
      const pressedKey = event.key;
      if (pressedKey === "Escape") {
        onCloseMovie();
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onCloseMovie]);

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={onCloseMovie}>
          &larr;
        </button>
        <img src={movie.Poster} alt={`Poster of ${movie.Title} movie`} />
        <div className="details-overview">
          <h2>{movie.Title}</h2>
          <p>
            {movie.Released} &bull; {movie.Runtime}
          </p>
          <p>{movie.Genre}</p>
          <p>
            <span>⭐️</span>
            {movie.imdbRating} IMDb rating
          </p>
          {hasUserRating > 0 && (
            <button className="btn-add" onClick={onAddMovie}>
              Add to Movie list
            </button>
          )}
        </div>
      </header>

      <section>
        <div className="rating">
          {isMovieWatched ? (
            <p>
              <em>
                You have a rating of {watchedMovie.userRating}⭐ stars for this
                movie
              </em>
            </p>
          ) : (
            <StarRating
              maxRating={10}
              size={25}
              onSetRating={onSetUserRating}
            />
          )}
        </div>
        <p>{movie.Plot}</p>
      </section>
    </div>
  );
}

export default SpecificMovie;
