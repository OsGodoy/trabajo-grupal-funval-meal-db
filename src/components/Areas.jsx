import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import Loading from "../components/shared/Loading";
import Message from "../components/shared/Message";

export default function Areas() {
  const [areas, setAreas] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      try {
        let tempMeals = [];
        for (let i = 0; i < 4; i++) {
          const res = await axios.get(
            "https://www.themealdb.com/api/json/v1/1/random.php"
          );
          tempMeals.push(res.data.meals[0]);
        }
        setIsLoading(false);
        setIsShow(true);
        setAreas(tempMeals);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log("this is the error: ", error);
      }
    };
    fetchMeals();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full pt-6">
      <h1 className="flex font-medium text-xl text-center lg:text-2xl font-primary w-70 justify-center items-center">
        RECIPES AROUND THE WORLD
      </h1>
      {isShow && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-center sm:px-4">
          {areas.map((recipe, index) => (
            <Link
              to={`/meal-recipes/area/${recipe.strArea}`}
              key={recipe.idMeal}
            >
              <div
                className={`bg-[url(/images/pass-card.png)] bg-size-[auto_450px] h-120 w-80 bg-no-repeat bg-center flex flex-col justify-center items-center gap-1 lg:gap-6 lg:hover:scale-105 transition-transform md:p-4 
              ${index % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
              >
                <div className="relative top-3 w-[70%] gap-1 flex flex-col items-center justify-center">
                  <p className="text-orange-900 font-semibold justify-center text-xl xl:text-2xl  items-center font-secondary ">
                    {recipe.strArea}
                  </p>
                  <img
                    className="object-cover rounded-lg border-1 border-gray-300"
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {isError && <Message text="Couldn't find the Areas" />}
      {isLoading && <Loading text="Loading Areas..." />}
    </div>
  );
}
