import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MealRecipes from "./pages/MealRecipes";
import MealRecipeDetails from "./pages/MealRecipeDetails";

export default function App() {
  const [search, setSearch] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<Home setSearch={setSearch} />}></Route>
      <Route
        path="/meal-recipes"
        element={<MealRecipes search={search} setSearch={setSearch} />}
      ></Route>
      <Route
        path="/meal-recipe-details/:id"
        element={<MealRecipeDetails />}
      ></Route>
    </Routes>
  );
}
