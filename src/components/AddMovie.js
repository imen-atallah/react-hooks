import { useState } from "react";

const AddMovie = ({ movies, setMovies }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie added:", { title, description, posterURL, rating });
    setMovies(prevMovies => [...prevMovies, { id: Date.now(), title, description, posterURL, rating }]);
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-input"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          className="form-textarea"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="posterURL" className="form-label">
          Poster URL:
        </label>
        <input
          type="url"
          id="posterURL"
          name="posterURL"
          className="form-input"
          required
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating" className="form-label">
          Rating:
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="0"
          max="10"
          step="0.1"
          className="form-input"
          required
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button type="submit" className="form-button">
        Add Movie
      </button>
    </form>
  );
};

export default AddMovie;