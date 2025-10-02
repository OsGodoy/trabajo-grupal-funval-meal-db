import client from "./client";

const getRandomMeals = async (amount = 10) => {
  const requests = Array.from({ length: amount }, () =>
    client.get("random.php")
  );

  const responses = await Promise.all(requests);
  return responses.map((r) => r.data.meals[0]);
};

const getMealsByFilterType = async (filterType, query) => {
  try {
    const filterMap = {
      category: "c",
      area: "a",
      ingredient: "i",
    };

    const type = filterMap[filterType];
    if (!type) throw new Error("Invalid filter");

    const response = await client.get("/filter.php", {
      params: { [type]: query },
    });

    return response.data.meals || [];
  } catch (error) {
    console.error("Error get meals:", error);
    return [];
  }
};


const getFilterMeals = async (query) => {
  try {
    const [byCategory, byArea, byIngredient] = await Promise.all([
      client.get("/filter.php", { params: { c: query } }),
      client.get("/filter.php", { params: { a: query } }),
      client.get("/filter.php", { params: { i: query } }),
    ]);

    
    const results = [
      ...(byCategory.data.meals || []),
      ...(byArea.data.meals || []),
      ...(byIngredient.data.meals || []),
    ];

    return results;
  } catch (error) {
    console.error("Error get meals:", error);
    return [];
  }
};

const getMealsCategory = () => client.get("/categories.php");
const searchMealDetails = (id) =>  client.get("/lookup.php", { params: { i: id } });

const getAreas = () => client.get("/list.php", { params: { a: "list" } });
const getCategories = () => client.get("/list.php", { params: { c: "list" } });


export {
  getRandomMeals,
  searchMealDetails,
  getAreas,
  getCategories,
  getMealsByFilterType,
  getMealsCategory,
  getFilterMeals
};
