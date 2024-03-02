import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import data from "../data.json";
import Recipe from "./Recipe";

const Home = () => {
  const [recipePayload, setRecipePayload] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("https://dummyjson.com/recipes");
    setRecipePayload(res.data.recipes);
  };

  return (
    <>
      <div
        className="flex uppercase font-bold justify-center 
        text-3xl tracking-wider bg-white p-14"
      >
        <p className="block md:inline md:mr-2">
          SIMPLE RECIPES MADE FOR <span className="text-purple italic">
             real, actual, everyday life.
          </span>
        </p>
      </div>
      <div className="flex justify-center">
        <div className="overflow-x-scroll lg:overflow-x-auto py-4">
          <ol className="text-center mb-4 flex space-x-14 py-4 ">
            {data?.categories?.map((category, index) => (
              <li className="block w-20 md:w-24 flex-grow flex-shrink-0 text-center hover:opacity-60">
                <Link to={`category/${category.name}`} key={index}>
                  <img
                    src={category.image}
                    alt="meal"
                    className="rounded-full w-20 h-20 md:w-24 md:h-24 mb-2"
                  />
                  <p className="text-black font-bold">{category.name}</p>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <img
          src="https://cdn0.iconfinder.com/data/icons/medical-icons-set-cartoon-style/512/a781-512.png"
          width={100}
        />
        <h2 className="mt-7 font-mono font-bold uppercase text-purple text-3xl tracking-widest text-center">
          All Recipes
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 items-center">
        <Recipe recipes={recipePayload} />
      </div>
    </>
  );
};

export default Home;
