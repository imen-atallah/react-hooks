import MovieCard from "./MovieCard"

const MovieList = ({ movies, titleFilter, ratingFilter }) => {
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        movie.rating >= ratingFilter
    );
    console.log("Filtered Movies:", filteredMovies);
  return (
    <div className="movie-list">
        {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  )
}

export default MovieList