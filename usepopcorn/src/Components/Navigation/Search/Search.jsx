import { useState, useEffect, useRef } from "react";

function Search({ onHandleMovieSearch }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onHandleMovieSearch(query);
    setQuery("");
  };
  //effect to focus the text input (search) upon initial render
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  //effect for clearing the search results when the user pressed the ESC button
  useEffect(() => {
    const handleEnterKey = (event) => {
      const key = event.key;
      if (document.activeElement === inputRef.current) {
        return;
      }
      if (key === "Enter") {
        setQuery("");
        inputRef.current.focus();
      }
    };
    window.addEventListener("keydown", handleEnterKey);
    return () => {
      window.removeEventListener("keydown", handleEnterKey);
    };
  }, []);
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        ref={inputRef}
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
