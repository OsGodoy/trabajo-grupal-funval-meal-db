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
    <div className="bg-white flex flex-col justify-center items-center w-[90%] gap-6 py-6 mt-5 rounded-xl">
      <img src="/images/banderas-2.png" alt="" />
      <h1 className="flex text-xl ss:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-primary w-full justify-center items-center">
        Recipes around the world
      </h1>
      {isShow && (
        <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4 px-8 sm:px-4">
          {areas.map((recipe) => (
            <Link
              to={`/meal-recipes/area/${recipe.strArea}`}
              key={recipe.idMeal}
            >
              <div className="bg-orange-200 w-full flex flex-col justify-center items-center gap-1 lg:gap-6 lg:hover:scale-105 transition-transform p-2 md:p-4 rounded-xl">
                <p className="text-orange-900 font-semibold justify-center text-lg lg:text-2xl xl:text-3xl  items-center font-secondary ">
                  {recipe.strArea}
                </p>
                <img
                  className="object-cover rounded-lg"
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
      {isError && <Message text="Couldn't find the Areas" />}
      {isLoading && <Loading text="Loading Areas..." />}
      <img src="/images/banderas-4.png" alt="" />
    </div>
  );
}
