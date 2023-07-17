function SpecificMovie({ movie, onCloseMovie }) {
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
          <button className="btn-add">+</button>
        </div>
      </header>
      <section>
        <p>{movie.Plot}</p>
      </section>
    </div>
  );
}

export default SpecificMovie;
