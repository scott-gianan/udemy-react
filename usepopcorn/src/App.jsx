//react hooks
import { useState, useEffect } from "react";
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
import SpecificMovie from "./Components/SpecificMovie/SpecificMovie";
//css
import "./App.css";
//assets
import { tempMovieData } from "./assets/tempMovieData";
import { tempWatchedMovieData } from "./assets/tempWatchedMovieData";
import Error from "./Components/Error/Error";
//constant
const KEY = "5abe5097";
//custom hooks
import useHandleLoader from "./Hooks/useHandleLoader";
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watchedMovies, setWatchedMovies] = useState(tempWatchedMovieData);
  const [searchError, setSearchError, isSearchingMovies, setIsSearchingMovies] =
    useHandleLoader();
  const [
    selectMovieError,
    setSelectMovieError,
    isSelectedMovieDataFetching,
    setIsSelectedMovieDataFetching,
  ] = useHandleLoader();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    if (!selectedMovie) return;
    const previousTitle = document.title;
    document.title = selectedMovie.Title;

    return () => {
      document.title = previousTitle;
    };
  }, [selectedMovie]);

  const handleMovieSearch = async (query) => {
    try {
      setIsSearchingMovies(true);
      setMovies([]);
      setSearchError("");
      setSelectedMovie(null);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await response.json();
      if (data.Response === "False") {
        throw new Error(data.Error);
      }
      setMovies([...data.Search]);
    } catch (error) {
      setSearchError(error.message);
    } finally {
      setIsSearchingMovies(false);
    }
  };
  const handleSelectMovie = async (id) => {
    if (selectedMovie?.imdbID === id) {
      return;
    }
    try {
      setSelectedMovie(null);
      setIsSelectedMovieDataFetching(true);
      setSelectMovieError("");
      setUserRating(0);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=5abe5097&i=${id}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.Error);
      }
      setSelectedMovie(data);
    } catch (error) {
      setSelectMovieError(error.message);
    } finally {
      setIsSelectedMovieDataFetching(false);
    }
  };
  const handleCloseMovie = () => {
    setSelectedMovie(null);
  };
  const handleAddMovie = () => {
    setWatchedMovies((previousMovies) => {
      const addedMovie = {
        imdbID: selectedMovie.imdbID,
        Title: selectedMovie.Title,
        Year: selectedMovie.Year,
        Poster: selectedMovie.Poster,
        runtime: Number(selectedMovie.Runtime.match(/\d+/g).toString()),
        imdbRating: selectedMovie.imdbRating,
        userRating: userRating,
      };
      return [...previousMovies, addedMovie];
    });
    setSelectedMovie(null);
  };
  const handleDeleteMovie = (selectedId) => {
    setWatchedMovies((previousMovies) => {
      return previousMovies.filter((movie) => movie.imdbID !== selectedId);
    });
  };

  return (
    <>
      <Navbar>
        <Search onHandleMovieSearch={handleMovieSearch} />
        <NumResults numOfMovies={movies.length} />
      </Navbar>
      <Main>
        <Box>
          {searchError && <Error>{searchError}</Error>}
          {isSearchingMovies && selectedMovie === null ? (
            <Loader />
          ) : (
            <MovieList movies={movies} onSelectedMovie={handleSelectMovie} />
          )}
        </Box>
        <Box>
          {selectMovieError && <Error>{selectMovieError}</Error>}
          {isSelectedMovieDataFetching && <Loader />}
          {selectedMovie ? (
            <SpecificMovie
              movie={selectedMovie}
              onCloseMovie={handleCloseMovie}
              onAddMovie={handleAddMovie}
              onSetUserRating={setUserRating}
              hasUserRating={userRating}
              watchedMoviesList={watchedMovies}
            />
          ) : (
            !isSelectedMovieDataFetching &&
            !selectMovieError && (
              <>
                <WatchedSummary watchedMovies={watchedMovies} />
                <WatchedMovieList
                  watchedMovies={watchedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                />
              </>
            )
          )}
        </Box>
      </Main>
    </>
  );
}
