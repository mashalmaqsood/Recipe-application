import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import spinner from '../images/spinner.gif'
import Recipe from "./Recipe";

const Categories = () => {
  const [recipePayload, setRecipePayload] = useState([]);
  const [loading,setLoading]=useState(true)
  const { category } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("https://dummyjson.com/recipes");
    const data = res.data.recipes.filter((recipe) =>
      recipe.mealType.includes(category)
    );
    setRecipePayload(data);
    setLoading(false);
  };

  return (
    <>
      <div className="text-center text-purple text-5xl m-14 font-new underline ">
        {recipePayload.length > 1
          ? `${category} Recipes`
          : `${category} Recipe`}
      </div>
      <div className="mt-7 flex flex-wrap gap-4 justify-center">
        {loading? (
         <div className='text-center'>
        <img src={spinner} alt='loading'/>
      </div>
      ): <Recipe recipes={recipePayload} />}
      </div>
    </>
  );
};

export default Categories;
