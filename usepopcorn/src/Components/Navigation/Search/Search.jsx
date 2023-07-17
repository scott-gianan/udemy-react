import { useState } from "react";

function Search({ onHandleMovieSearch }) {
  const [query, setQuery] = useState("");
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onHandleMovieSearch(query);
    setQuery("");
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default Search;
