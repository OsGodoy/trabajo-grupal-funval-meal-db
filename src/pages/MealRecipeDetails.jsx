import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { searchMealDetails } from "../api/recipe/services";
import Loading from "../components/shared/Loading";
import Message from "../components/shared/Message";

function MealRecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isShow, setisShow] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      searchMealDetails(id)
        .then((res) => {
          setIsLoading(false);
          setMeal(res.data.meals[0]);
          setisShow(true);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(true);
          console.log(error);
          setMeal([]);
        });
    }
  }, [id]);

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {isLoading && <Loading text="Loading details..." />}
      {isError && <Message message="Couldn't find the meal :c" />}
      {isShow && (
        <div className="flex flex-col items-center justify-center xl:w-[70%] 2xl:w-[60%]">
          {/* logo y título */}
          <Header />
          {/* imagen + ingredientes */}
          <div className="flex flex-col justify-center items-center gap-2 mb-4 w-full sm:flex-row">
            <div className="flex flex-col gap-2 items-center justify-center w-full sm:w-[50%] md:w-[48%] lg:w-[45%] xl:w-[42%] p-6 md:pr-0">
              <h2 className="mt-4 font-bold text-xl">{meal.strMeal}</h2>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-xl w-full object-cover h-auto max-w-md md:max-w-lg"
              />
            </div>
            <div className="bg-[url(/images/libreta.png)] h-130 sm:h-110 lg:h-130 bg-contain bg-no-repeat bg-center p-8 text-sm w-full flex flex-col justify-center items-center sm:w-[40%]">
              <h3 className="text-lg font-semiboldbold underline mb-1">
                Ingredients:
              </h3>
              <ul className="lg:text-base list-disc list-inside space-y-1 overflow-y-auto w-65 p-2 h-80 sm:h-68 sm:w-56 lg:w-65 lg:h-85">
                {getIngredients(meal).map((item, idx) => (
                  <li key={idx}>
                    {item.ingredient} - {item.measure}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* modo de preparar */}
          <div className="px-6 sm:px-8 mb-4 sm:w-150 lg:w-200">
            <h3 className="text-lg lg:text-2xl font-semiboldbold underline mb-1">
              Instructions:
            </h3>
            <p className="text-sm lg:text-[18px] ">{meal.strInstructions}</p>
          </div>

          {/* link al video */}
          {meal.strYoutube && (
            <div className="flex items-center justify-center text-center mb-6">
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white bg-rose-500 border-3 border-rose-800 p-2 px-3 rounded-full"
              >
                Watch the video
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          )}

          {/* comentarios / puntuación */}
          <div className="flex flex-col items-center justify-center w-70 sm:w-100 lg:w-150 mb-6">
            <h3 className="text-base font-semiboldbold mb-1 self-start">
              Comments{" "}
            </h3>
            <textarea
              placeholder="Write a comment..."
              className="w-full p-2 border-2 border-gray-400 rounded-md h-auto bg-white xl:h-40"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MealRecipeDetails;
