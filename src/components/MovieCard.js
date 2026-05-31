import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="movie-card">
          <h2 className="movie-title">{movie.title}</h2>
          <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
          <p className="movie-description">{movie.description}</p>
          <p className="movie-rating">Rating: {movie.rating}</p>
      </div>
    </Link>
  )
}

export default MovieCard