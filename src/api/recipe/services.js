import client from "./client";

const getRandomMeals = async (amount = 10) => {
  const requests = Array.from({ length: amount }, () =>
    client.get("random.php")
  );

  const responses = await Promise.all(requests);
  return responses.map((r) => r.data.meals[0]);
};

const searchMeals = (query = "Arrabiata") =>
  client.get("/search.php", { params: { s: query } });

const searchMealDetails = (id) =>
  client.get("/lookup.php", { params: { i: id } });

const getAreas = (id) => client.get("/list.php", { params: { a: list } });

export { getRandomMeals, searchMeals, searchMealDetails, getAreas };
