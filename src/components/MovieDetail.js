import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import initialMovies from '../movies';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = initialMovies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-detail">
        <h2>Movie not found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <button className="back-button" onClick={() => navigate('/')}>← Back to Home</button>
      <div className="detail-container">
        <img src={movie.posterURL} alt={movie.title} className="detail-poster" />
        <div className="detail-info">
          <h1>{movie.title}</h1>
          <p className="detail-rating">Rating: {movie.rating}/10</p>
          <p className="detail-description">{movie.description}</p>
          <div className="trailer-section">
            <h3>Trailer</h3>
            <iframe
              width="100%"
              height="400"
              src={movie.trailerURL}
              title={movie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
