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
import Loader from "./Components/Loader/Loader";
import SpecificMovie from "./Components/SpecificMovie/SpecificMovie";
//css
import "./App.css";
//assets
import { tempMovieData } from "./assets/tempMovieData";
import { tempWatchedMovieData } from "./assets/tempWatchedMovieData";
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
    try {
      setIsSelectedMovieDataFetching(true);
      setSelectMovieError("");
      setSelectedMovie(null);
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
          {searchError && <h1 className="error">{error}</h1>}
          {isSearchingMovies && selectedMovie === null ? (
            <Loader />
          ) : (
            <MovieList movies={movies} onSelectedMovie={handleSelectMovie} />
          )}
        </Box>
        <Box>
          {selectMovieError && <p>{selectMovieError}</p>}
          {isSelectedMovieDataFetching && <Loader />}
          {selectedMovie && (
            <SpecificMovie
              movie={selectedMovie}
              onCloseMovie={handleCloseMovie}
              onAddMovie={handleAddMovie}
              onSetUserRating={setUserRating}
            />
          )}
          {!isSelectedMovieDataFetching && !selectedMovie && (
            <>
              <WatchedSummary watchedMovies={watchedMovies} />
              <WatchedMovieList
                watchedMovies={watchedMovies}
                handleDeleteMovie={handleDeleteMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

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
