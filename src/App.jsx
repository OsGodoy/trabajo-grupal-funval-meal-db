import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MealRecipes from "./pages/MealRecipes";
import MealRecipeDetails from "./pages/MealRecipeDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/meal-recipes" element={<MealRecipes />}></Route>
      <Route
        path="/meal-recipes/:typeFilterUrl/:searchUrl"
        element={<MealRecipes />}
      ></Route>
      <Route
        path="/meal-recipe-details/:id"
        element={<MealRecipeDetails />}
      ></Route>
    </Routes>
  );
}
