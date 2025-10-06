import MealRecipeCard from "./MealRecipeCard";

function MealRecipeList({ data }) {
  return (
    <div className="w-80 sm:w-160 md:w-180 lg:w-230 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
      {data.map((element, index) => (
        <MealRecipeCard key={`${index}-${element.idMeal}`} item={element} />
      ))}
    </div>
  );
}

export default MealRecipeList;
