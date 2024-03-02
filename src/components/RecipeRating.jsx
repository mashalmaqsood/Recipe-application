import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const RecipeRating = ({ rating }) => {
  const getRatingStars = () => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;
    const ratingStars = [];
    for (let i = 0; i < fullStars; i++) {
      ratingStars.push(<FaStar key={i} className="text-yellow ml-1" />);
    }
    if (halfStars) {
      ratingStars.push(<FaStarHalf key="half" className="text-yellow ml-1" />);
    }
    return ratingStars;
  };

  return getRatingStars();
};

export default RecipeRating;
