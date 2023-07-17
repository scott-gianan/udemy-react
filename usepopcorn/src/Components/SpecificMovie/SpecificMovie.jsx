import StarRating from "../../Components/StarRating/StarRating";

function SpecificMovie({ movie, onCloseMovie, onAddMovie }) {
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
          <button className="btn-add" onClick={onAddMovie}>
            +
          </button>
        </div>
      </header>

      <section>
        <StarRating maxRating={10} size={25} className="details-overview" />
        <p>{movie.Plot}</p>
      </section>
    </div>
  );
}

export default SpecificMovie;
