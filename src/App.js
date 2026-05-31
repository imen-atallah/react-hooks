import { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import initialMovies from "./movies";

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  return (
    <div className="App">
      <h1 className="app-title">Movie Theater</h1>
      <div className="filter-section">
        <Filter titleFilter={titleFilter} setTitleFilter={setTitleFilter} ratingFilter={ratingFilter} setRatingFilter={setRatingFilter} />
      </div>
      <div className="add-movie-section">
        <AddMovie movies={movies} setMovies={setMovies} />
      </div>
      <div className="movie-list-section">
        <MovieList movies={movies} titleFilter={titleFilter} ratingFilter={ratingFilter} />
      </div>
    </div>
  );
}

export default App;