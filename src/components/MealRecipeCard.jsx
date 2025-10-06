import { Link } from "react-router-dom";

function MealRecipeCard({ item }) {
  return (
    <Link
      className="bg-orange-950 rounded-xl pb-2 flex flex-col gap-1 mb-4"
      to={`/meal-recipe-details/${item.idMeal}`}
    >
      <div className="relative rounded-t-xl overflow-hidden h-65 md:h-70 group">
        <img
          src={item.strMealThumb}
          alt={item.strMeal}
          className="absolute inset-0 h-full w-full object-cover object-center rounded-t-xl
          transition-transform duration-500 ease-in-out 
                 group-hover:scale-110"
        />

        <div
          className="absolute inset-0 rounded-t-xl 
            flex items-end justify-center lg:items-center 
            opacity-100 md:hover:bg-black/60  
            lg:opacity-0 lg:hover:opacity-100 lg:transition-opacity duration-300"
        >
          <span
            className="px-2 py-1 w-full text-[10px] 
        text-white  text-center bg-black/60 lg:bg-transparent
        cursor-pointer lg:rounded-none lg:text-lg xl:text-xl
        transform translate-y-6 opacity-0 
        group-hover:translate-y-0 group-hover:opacity-100 
        transition-all duration-500 ease-out
        md:px-4 md:py-2 ss:text-xs ms:text-sm"
          >
            See recipe
          </span>
        </div>
      </div>
      <h3 className="text-lg text-center text-orange-100"> {item.strMeal} </h3>
    </Link>
  );
}

export default MealRecipeCard;
