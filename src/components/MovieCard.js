import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
        <h2 className="movie-title">{movie.title}</h2>
        <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
        <p className="movie-description">{movie.description}</p>
        <p className="movie-rating">Rating: {movie.rating}</p>
    </div>
  )
}

export default MovieCard