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
    <div className=" bg-orange-200 rounded-lg flex flex-col justify-center items-center w-[90%] lg:w-250 gap-6 py-6 m-4">
      <h3 className="text-orange-900 flex text-xl lg:text-2xl xl:text-3xl justify-center items-center">
        MORE RECIPES
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
                className={`bg-[#D16F2A] shadow-lg shadow-black/30 w-[80%] flex items-center justify-between p-2 lg:hover:scale-105 lg:transition-transform 
                  ${
                    index % 2 === 0
                      ? "flex-row rounded-l-full sm:rounded-r-full"
                      : "flex-row-reverse rounded-r-full sm:rounded-l-full"
                  }`}
              >
                <div className="bg-white shadow-lg h-25 w-25 rounded-full p-2 flex items-center justify-center overflow-hidden">
                  <img src={reset.strCategoryThumb} alt={reset.strCategory} />
                </div>
                <h3
                  className={`uppercase w-[50%] text-orange-200 font-medium text-center text-lg lg:text-xl
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
