import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((err) => console.error("error: ", err));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full gap-3 py-10">
      <h1 className="flex text-2xl ss:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-primary w-full justify-center items-center">
        Category
      </h1>
      <div className="gap-20 flex flex-wrap p-3 justify-center items-center">
        {categories.slice(0, 3).map((reset) => (
          <Link
            to={`/meal-recipes/category/${reset.strCategory}`}
            key={reset.idCategory}
            className="flex flex-col justify-center items-center gap-4 lg:hover:scale-105 lg:transition-transform"
          >
            <img
              className="object-cover rounded-full drop-shadow-2xl h-[100px] w-[160px] md:h-[150px] md:w-[210px] lg:h-[180px] lg:w-[240px] xl:h-[230px] xl:w-[290px] 2xl:h-[280px] 2xl:w-[340px]"
              src={reset.strCategoryThumb}
              alt={reset.strCategory}
            />
            <h3 className="text-[15px] md:text-xl lg:text-2xl xl:text-3xl ">
              {reset.strCategory}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
