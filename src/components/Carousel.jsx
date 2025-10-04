import { getRandomMeals } from "../api/recipe/services";
import { useEffect, useState } from "react";
import LoadingCarousel from "./LoadingCarousel";

export default function Carousel() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getMeals = async () => {
    try {
      const resp = await getRandomMeals(5);
      setData(resp);
    } catch (error) {
      console.error(error);
      setData([]);
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  // autoplay
  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % data.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [data]);

  if (data.length === 0) return <LoadingCarousel />;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {data.map((meal, index) => (
        <div key={`${index}-${meal.idMeal}`}>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`absolute w-full bottom-2 left-1/2 -translate-x-1/2 flex transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="h-15 w-full flex items-center justify-center ">
              <p className="bg-orange-950/90 w-full text-white text-center flex items-center justify-center p-1 text-[15px] lg:text-lg xl:text-xl">
                {meal.strMeal}
              </p>
            </span>
          </div>
        </div>
      ))}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + data.length) % data.length)
        }
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 hover:bg-black/70  text-white p-2 rounded-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % data.length)}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 hover:bg-black/70 text-white p-2 rounded-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
