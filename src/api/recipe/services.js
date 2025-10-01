import client from "./client";

const getRandomMeals = async (amount = 10) => {
  const requests = Array.from({ length: amount }, () =>
    client.get("random.php")
  );

  const responses = await Promise.all(requests);
  return responses.map((r) => r.data.meals[0]);
};

const searchMeals = (query = "Arrabiata") =>  client.get("/search.php", { params: { s: query } });

const searchMealDetails = (id) =>  client.get("/lookup.php", { params: { i: id } });

const getAreas = () => client.get("/list.php", { params: { a: "list" } });
const getCategories = () => client.get("/list.php", { params: { c: "list" } });

const getMealsByCategory = () => client.get("/filter.php", { params: { c: "list" } });
const getMealsByArea = () => client.get("/filter.php", { params: { a: "list" } });
const getMealsByIngredient = () => client.get("/filter.php", { params: { i: "list" } });

export {
  getRandomMeals,
  searchMeals,
  searchMealDetails,
  getAreas,
  getCategories,
  getMealsByCategory,
  getMealsByArea,
  getMealsByIngredient
};
