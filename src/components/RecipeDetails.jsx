import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import spinner from "../images/spinner.gif";

const RecipeDetails = () => {
  const [recipePayload, setRecipePayload] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
    setRecipePayload(res?.data);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className="text-center">
          <img src={spinner} alt="loading" />
        </div>
      ) : (
        <div className="pt-10 flex justify-center flex-col mb-10">
          <div className="font-bold font-mono text-5xl mb-16 text-center">
            <span className="text-purple">
              {recipePayload?.name} <br />
            </span>
            <span className="text-3xl text-purple">
              Rating : {recipePayload?.rating}
            </span>
            <br />
            <span className="text-3xl text-purple">
              Cuisine : {recipePayload?.cuisine}
            </span>
          </div>
          <div className="flex justify-center ml-20">
            <div className=" max-w-lg">
              <img
                className="rounded"
                src={recipePayload?.image}
                alt="recipe image"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-3xl text-start ml-10 mb-5 sm:inline">
                <p className="text-purple font-bold mb-5 font-mono">
                  Ingredients:
                </p>
                {recipePayload?.ingredients.map((ingredient, index) => (
                  <li className="text-xl" key={index}>
                    {ingredient}
                  </li>
                ))}
              </div>
              <div className="text-3xl text-start ml-10 sm:inline">
                <p className="text-purple font-bold mb-5 font-mono">
                  Instructions :
                </p>
                {recipePayload?.instructions.map((instructions, index) => (
                  <li className="text-xl" key={index}>
                    {instructions}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetails;
