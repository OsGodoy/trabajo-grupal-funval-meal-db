
import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MealRecipes from "./pages/MealRecipes";
import MealRecipeDetails from "./pages/MealRecipeDetails";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" elemen={<Home />} ></Route>
        <Route path="/meal-recipes" elemen={<MealRecipes />} ></Route>
        <Route path="/Meal-recipe-details/:id" elemen={<MealRecipeDetails />} ></Route>
      </Routes>
    </>
  );
}
