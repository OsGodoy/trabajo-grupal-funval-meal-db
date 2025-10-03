import MealRecipeCard from "./MealRecipeCard";

function MealRecipeList({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {data.map((element, index) => (
        <MealRecipeCard key={`${index}-${element.idMeal}`} item={element} />
      ))}
    </div>
  );
}

export default MealRecipeList;
