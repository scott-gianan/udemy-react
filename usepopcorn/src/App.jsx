//react hooks
import { useEffect, useState } from "react";
//Components
import Box from "./Components/Box/Box";
import Navbar from "./Components/Navigation/Navbar";
import Search from "./Components/Navigation/Search/Search";
import NumResults from "./Components/Navigation/NumResults/NumResults";
import MovieList from "./Components/Main/ListBox/MovieList/MovieList";
import Main from "./Components/Main/Main";
import WatchedSummary from "./Components/Main/WatchedBox/WatchedSummary/WatchedSummary";
import WatchedMovieList from "./Components/Main/WatchedBox/WatchedMoviesList/WatchedMoviesList";
import Loader from "./Components/Loader/Loader";

//css
import "./App.css";
//assets
import { tempMovieData } from "./assets/tempMovieData";
import { tempWatchedMovieData } from "./assets/tempWatchedMovieData";
//constant
const KEY = "5abe5097";
export default function App() {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState(tempWatchedMovieData);
  useEffect(() => {}, []);
  const handleMovieSearch = async (query) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
    );
    const data = await response.json();
    if (data.Response === "True") {
      setMovies([...data.Search]);
    }
  };

  return (
    <>
      <Navbar>
        <Search onHandleMovieSearch={handleMovieSearch} />
        <NumResults numOfMovies={movies.length} />
      </Navbar>
      <Main>
        <Box>
          <Loader />
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watchedMovies={watchedMovies} />
          <WatchedMovieList watchedMovies={watchedMovies} />
        </Box>
      </Main>
    </>
  );
}
