//react hooks
import { useState } from "react";
//Components
import Box from "./Components/Box/Box";
import Navbar from "./Components/Navigation/Navbar";
import Search from "./Components/Navigation/Search/Search";
import NumResults from "./Components/Navigation/NumResults/NumResults";
import MovieList from "./Components/Main/ListBox/MovieList/MovieList";
import Main from "./Components/Main/Main";
import WatchedSummary from "./Components/Main/WatchedBox/WatchedSummary/WatchedSummary";
import WatchedMovieList from "./Components/Main/WatchedBox/WatchedMoviesList/WatchedMoviesList";
//css
import "./App.css";
//assets
import { tempMovieData } from "./assets/tempMovieData";
import { tempWatchedMovieData } from "./assets/tempWatchedMovieData";
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watchedMovies, setWatchedMovies] = useState(tempWatchedMovieData);
  return (
    <>
      <Navbar>
        <Search />
        <NumResults numOfMovies={movies.length} />
      </Navbar>
      <Main>
        <Box>
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
