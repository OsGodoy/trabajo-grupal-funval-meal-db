import { useEffect, useState } from "react";
import { getRandomMeals } from "../api/recipe/services";
import MealRecipeList from "../components/MealRecipeList";
import Header from "../components/Header";
import Search from "../components/Search";

function MealRecipes({search}) {

    const [data, setData] = useState([]);
    const getMeals = async () => {
        try {
            let data = [];
            if (search) {
                data = await awaitgetMealsByFilterType(search.filterType,search.text);
            }else{
                data = await getRandomMeals();
            }
            setData(data);
        } catch (error) {
            console.error(error);
            setData([]);
        }
    };
    useEffect(() => {
        getMeals();
    }, []);
    
    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <Header />
            <Search />
            <MealRecipeList data={data} />
        </div>
    );
}

export default MealRecipes;