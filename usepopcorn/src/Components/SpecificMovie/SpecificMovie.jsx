import StarRating from "../../Components/StarRating/StarRating";
function SpecificMovie({
  hasUserRating,
  movie,
  onCloseMovie,
  onAddMovie,
  onSetUserRating,
  watchedMoviesList,
}) {
  console.log(movie);
  console.log(watchedMoviesList);
  const isMovieWatched = watchedMoviesList.some(
    (watchedMovie) => watchedMovie.imdbID === movie.imdbID
  );
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
            <p>your rating for this movie is 1</p>
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
