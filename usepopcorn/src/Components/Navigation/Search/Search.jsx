import { useState, useEffect, useRef } from "react";
//custom hooks
import { useKey } from "../../../Hooks/useKey";
function Search({ onHandleMovieSearch }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onHandleMovieSearch(query);
    setQuery("");
  };
  const handleInputRefFocus = () => {
    if (document.activeElement === inputRef.current) {
      return;
    }
    inputRef.current.focus();
    setQuery("");
  };
  //effect to focus the text input (search) upon initial render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useKey("Enter", handleInputRefFocus);
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
