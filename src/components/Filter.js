import { useState } from "react";

function Filter({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) {
  

  return (
    <nav className="filter-navbar">
      <div className="filter-inputs">
        <input
          type="text"
          placeholder="Search by movie title"
          className="input-field"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="Filter by rating"
          min="0"
          max="10"
          step={0.1}
          className="input-field"
          value={ratingFilter}
          onChange={(e) => setRatingFilter(parseFloat(e.target.value))}
        />
      </div>
    </nav>
  );
}

export default Filter;