import React from 'react';

const StaticStarRating = ({ rating, totalStars = 5 }) => {
  const stars = [];
  
  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <span
        key={i}
        style={{
          color: i <= rating ? '#ffd700' : '#d3d3d3', // Gold for filled, gray for empty
          fontSize: '24px',
          margin: '0 2px'
        }}
      >
        ★
      </span>
    );
  }

  return (<div>{stars}</div>)
};

export default StaticStarRating;
