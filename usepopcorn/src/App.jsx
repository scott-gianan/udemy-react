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
  const [movies, setMovies] = useState(tempMovieData);
  const [watchedMovies, setWatchedMovies] = useState(tempWatchedMovieData);
  const [isDataFetching, setIsDataFetching] = useState(false);
  const [error, setError] = useState("");
  // useEffect(() => {
  //   async function fetchMovies() {
  //     try {
  //       setIsDataFetching(true);
  //       const response = await fetch(
  //         `http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`
  //       );
  //       const data = await response.json();
  //       if (data.Response === "False") {
  //         console.log("error");
  //         throw new Error("Something Went Wrong");
  //       }
  //       setMovies([...data.Search]);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsDataFetching(false);
  //     }
  //   }
  //   fetchMovies();
  // }, []);
  const handleMovieSearch = async (query) => {
    try {
      setIsDataFetching(true);
      setMovies([]);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await response.json();
      if (data.Response === "False") {
        throw new Error("No Movies Found");
      }
      setMovies([...data.Search]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsDataFetching(false);
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
          {error && movies.length === 0 && <h1 className="error">{error}</h1>}
          {isDataFetching ? <Loader /> : <MovieList movies={movies} />}
        </Box>
        <Box>
          <WatchedSummary watchedMovies={watchedMovies} />
          <WatchedMovieList watchedMovies={watchedMovies} />
        </Box>
      </Main>
    </>
  );
}
