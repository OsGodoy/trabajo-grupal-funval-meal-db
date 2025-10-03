import { Link } from 'react-router-dom'

function MealRecipeCard({ item }) {
  return (
    <Link
      className="flex flex-col gap-1 mb-4"
      to={`/meal-recipe-details/${item.idMeal}`}
    >
      <div className="relative rounded-3xl overflow-hidden xs:h-60 ss:h-68 ms:h-74 md:h-68 lg:h-67 xl:h-75 2xl:h-140 group">
        <img
          src={item.strMealThumb}
          alt={item.strMeal}
          className="absolute inset-0 w-full h-full object-cover rounded-3xl
          transition-transform duration-500 ease-in-out 
                 group-hover:scale-110"
        />

        <div
          className="absolute inset-0  rounded-3xl 
            flex items-end justify-center lg:items-center 
            opacity-100 md:hover:bg-black/40  
            lg:opacity-0 lg:hover:opacity-100 lg:transition-opacity duration-300"
        >
          {/* Mobile + Tablet */}
          <span
            className="block lg:hidden px-2 py-1 rounded-b-3xl w-full text-[10px] 
      text-white text-center bg-black/50
      cursor-pointer
      transform translate-y-6 opacity-0 
      group-hover:translate-y-0 group-hover:opacity-100 
      transition-all duration-500 ease-out
      md:px-4 md:py-2 ss:text-xs ms:text-sm"
          >
            Pulse to see the recipe
          </span>

          {/* Desktop */}
          <span
            className="hidden lg:block px-2 py-1 rounded-b-3xl w-full text-[10px] 
      text-white text-center bg-transparent
      cursor-pointer lg:text-lg xl:text-xl
      transform translate-y-6 opacity-0 
      group-hover:translate-y-0 group-hover:opacity-100 
      transition-all duration-500 ease-out
      md:px-4 md:py-2 ss:text-xs ms:text-sm"
          >
            Click to see the recipe
          </span>
        </div>
      </div>
      <h3 className="text-2xl"> {item.strMeal} </h3>
    </Link>
  )
}

export default MealRecipeCard
