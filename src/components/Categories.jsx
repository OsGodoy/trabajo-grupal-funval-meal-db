import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Loading from "../components/shared/Loading";
import Message from "../components/shared/Message";

import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        setIsLoading(false);
        setCategories(res.data.categories);
        setIsShow(true);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        console.error("error: ", err);
      });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full gap-6 py-10">
      <h3 className="text-orange-900 flex text-2xl ss:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl justify-center items-center">
        ↓ MORE RECIPES ↓
      </h3>

      {isLoading && <Loading text="Loading Categories..." />}
      {isError && <Message text="Couldn't find the Categories" />}

      {isShow && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full place-items-center">
          {categories.slice(0, 4).map((reset, index) => (
            <div
              key={reset.idCategory}
              className={`flex items-center h-30 w-full
                ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
            >
              <Link
                to={`/meal-recipes/category/${reset.strCategory}`}
                className={`bg-gradient-to-l w-[90%] flex items-center justify-between p-2 lg:hover:scale-105 lg:transition-transform 
                  ${
                    index % 2 === 0
                      ? "flex-row from-[#D16F2A] sm:from-orange-300 via-orange-300 to-orange-300 rounded-l-full sm:rounded-r-full"
                      : "flex-row-reverse from-orange-300 via-orange-300 to-[#D16F2A] sm:to-orange-300 rounded-r-full sm:rounded-l-full"
                  }`}
              >
                <div className="bg-white shadow-lg h-25 w-25 rounded-full p-2 flex items-center justify-center overflow-hidden">
                  <img src={reset.strCategoryThumb} alt={reset.strCategory} />
                </div>
                <h3
                  className={`uppercase w-[50%] text-orange-900 font-medium text-center text-lg md:text-xl lg:text-2xl xl:text-3xl
                    ${index % 2 === 0 ? "text-start" : "text-end"}`}
                >
                  {reset.strCategory}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
