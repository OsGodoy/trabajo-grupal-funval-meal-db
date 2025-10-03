import { useEffect, useState } from "react";
import { getRandomMeals, getMealsByFilterType } from "../api/recipe/services";
import MealRecipeList from "../components/MealRecipeList";
import Header from "../components/Header";
import Search from "../components/Search";
import Loading from "../components/shared/Loading";
import Message from "../components/shared/Message";
import { useParams } from "react-router-dom";

function MealRecipes({ search }) {

    const { searchUrl =null, typeFilterUrl=null } = useParams();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isShow, setisShow] = useState(false);

    const getMeals = async () => {
        setIsLoading(true);
        try {
            let data = [];
            if (search) {
                data = await getMealsByFilterType(search.filterType, search.text);
            }else if (searchUrl && typeFilterUrl) {
                data = await getMealsByFilterType(typeFilterUrl, searchUrl);
            } else {
                data = await getRandomMeals();
            }
            setData(data);
            setisShow(true);
        } catch (error) {
            console.error(error);
            setIsError(true);
            setData([]);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getMeals();
    }, [searchUrl, search]);

    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <Header />
            {/* <Search /> */}
            {isLoading && <Loading text="Loading recipe..." />}
            {isError && <Message message="Couldn't find the meal " />}
            {isShow && <MealRecipeList data={data} />}
        </div>
    );
}

export default MealRecipes;