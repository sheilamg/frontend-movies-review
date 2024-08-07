import React, { useState } from "react";
import "./starRating.css";

const StarRating = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(null);

  const handleMouseEnter = (index) => setHoveredStar(index);
  const handleMouseLeave = () => setHoveredStar(null);
  //const handleClick = (index) => setRating(index);

  //added an extra state
  const handleClick = (index) => {
    setRating(index);
    if (onRatingChange) {
      onRatingChange(index);
    }
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <span
            key={starIndex}
            className={`star ${
              starIndex <= (hoveredStar || rating) ? "filled" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starIndex)}
          >
            ★
          </span>
        );
      })}
      <p>Rating: {rating}</p>
    </div>
  );
};

export default StarRating;