import React, { useState } from 'react';

const StarRating = ({ rating, maxStars = 5, onRatingChange }) => {
  const handleClick = (index) => {
    if (onRatingChange) onRatingChange(index + 1);
  };

  return (
    <div>
      {Array.from({ length: maxStars }, (_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index)}
          style={{ cursor: 'pointer' }}
        >
          {index < rating ? '⭐' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
