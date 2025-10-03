import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";

export default function Areas() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      let tempMeals = [];
      for (let i = 0; i < 6; i++) {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        tempMeals.push(res.data.meals[0]);
      }
      setAreas(tempMeals);
    };
    fetchMeals();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full gap-3">
      <h1 className="flex text-2xl ss:text-4xl md:text-6xl lg:text-8xl xl:text-[8rem] 2xl:text-[10rem] font-primary w-full justify-center items-center">
        Area
      </h1>
      <div className="gap-5 flex flex-wrap  py-4 px-2 justify-center items-center">
        {areas.map((recipe) => (
          <Link to="">
            <div
              className="flex flex-col justify-center items-center py-3 drop-shadow-xl gap-4 lg:gap-6"
              key={recipe.idMeal}
            >
              <img
                className="object-cover rounded-[15px] md:rounded-[20px] lg:rounded-[25px] xl:rounded-[30px] 2xl:rounded-[35px] drop-shadow-2xl h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] 2xl:h-[350px] 2xl:w-[350px]"
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />
              <p className="justify-center md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl items-center font-secondary ">
                {recipe.strArea}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
