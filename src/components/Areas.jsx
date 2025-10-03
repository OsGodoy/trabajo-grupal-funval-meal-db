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
        for (let i = 0; i < 3; i++) {
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
    <div className="flex flex-col justify-center items-center w-full gap-3 py-10">
      <h1 className="flex text-2xl ss:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-primary w-full justify-center items-center">
        Area
      </h1>
      {isShow && (
        <div className="gap-10 md:gap-20 flex flex-wrap  py-4 px-2 justify-center items-center">
          {areas.map((recipe) => (
            <Link
              to={`/meal-recipes/area/${recipe.strArea}`}
              key={recipe.idMeal}
            >
              <div className="flex flex-col justify-center items-center py-3 drop-shadow-xl gap-4 lg:gap-6 lg:hover:scale-105 transition-transform ">
                <img
                  className="object-cover rounded-[15px] md:rounded-[20px] lg:rounded-[25px] xl:rounded-[30px] 2xl:rounded-[35px] drop-shadow-2xl h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] 2xl:h-[350px] 2xl:w-[350px]"
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                />
                <p className="justify-center md:text-xl lg:text-2xl xl:text-3xl  items-center font-secondary ">
                  {recipe.strArea}
                </p>
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
