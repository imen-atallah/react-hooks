import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import initialMovies from "./movies";

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const HomePage = () => (
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;