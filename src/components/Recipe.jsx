import React from "react";
import { useNavigate } from "react-router-dom";
import RecipeRating from "./RecipeRating";

const Recipe = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <>
      {recipes?.map((recipe, index) => (
        <div
          className="max-w-sm transform h-1/6 w-80 transition hover:scale-105 rounded overflow-hidden shadow-lg"
          onClick={() => navigate(`/recipe/${recipe?.id}`)}
          key={index}
        >
          <img className="w-full" src={recipe.image} alt="recipe image" />
          <div className="px-6 py-4">
            <div className="font-bold text-base mb-2 text-center">
              {recipe.name}
              <div className="flex justify-center m-2">
                <RecipeRating rating={recipe?.rating} />
              </div>
              <span className="font-mono text-base">{recipe.rating} reviews</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Recipe;
