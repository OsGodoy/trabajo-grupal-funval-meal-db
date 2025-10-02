import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { searchMealDetails } from '../api/recipe/services'
import Loading from '../components/shared/Loading'
import Message from '../components/shared/Message'

function MealRecipeDetails() {
  const { id } = useParams()
  const [meal, setMeal] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isShow, setisShow] = useState(false)

  useEffect(() => {
    if (id) {
      setIsLoading(true)
      searchMealDetails(id)
        .then((res) => {
          setIsLoading(false)
          console.log(res)
          setMeal(res.data.meals[0])
          setisShow(true)
        })
        .catch((error) => {
          setIsLoading(false)
          setIsError(true)
          console.log(error)
          setMeal([])
        })
    }
  }, [id])

  const getIngredients = (meal) => {
    const ingredients = []
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`]
      const measure = meal[`strMeasure${i}`]
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({ ingredient, measure })
      }
    }
    return ingredients
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center mx-auto p-10">
      {isLoading && <Loading text="Loading details..." />}
      {isError && <Message message="Couldn't find the meal :c" />}
      {isShow && (
        <div className="xl:w-[70%] 2xl:w-[60%]">
          {/* logo y título */}
          <div className="flex flex-col items-center justify-center text-center mb-4">
            <Header />
            <h2 className="mt-4 font-bold text-xl">{meal.strMeal}</h2>
          </div>

          {/* imagen + ingredientes */}
          <div className="flex flex-col justify-center items-center gap-2 mb-4 w-full sm:flex-row">
            <div className="p-2 w-full sm:w-[60%]">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-xl w-full object-cover h-auto max-w-md md:max-w-lg lg:max-w-xl mx-auto"
              />
            </div>
            <div className="p-2 text-sm w-full flex flex-col justify-center items-center sm:w-[40%]">
              <h3 className="font-bold mb-1">Ingredients:</h3>
              <ul className="list-disc list-inside space-y-1 overflow-y-auto w-full md:max-h-38 lg:max-h-50">
                {getIngredients(meal).map((item, idx) => (
                  <li key={idx}>
                    {item.ingredient} - {item.measure}
                  </li>
                ))}
              </ul>
              {/* modo de preparar */}
              <div className="p-2 mb-4 hidden md:block">
                <h3 className="font-bold mb-1">Instructions:</h3>
                <p className="text-sm overflow-y-auto max-h-28 lg:max-h-60 xl:max-h-80">
                  {meal.strInstructions}
                </p>
              </div>

              {/* link al video */}
              {meal.strYoutube && (
                <div className="text-center mb-4 hidden md:block">
                  <a
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    ▶ Watch Video
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* modo de preparar */}
          <div className="p-2 mb-4 md:hidden">
            <h3 className="font-bold mb-1">Instructions:</h3>
            <p className="text-sm">{meal.strInstructions}</p>
          </div>

          {/* link al video */}
          {meal.strYoutube && (
            <div className="text-center mb-4 md:hidden">
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                ▶ Watch Video
              </a>
            </div>
          )}

          {/* comentarios / puntuación */}
          <div className="w-full rounded-xl p-2">
            <h3 className="font-bold mb-1">Comments </h3>
            <textarea
              placeholder="Write a comment..."
              className="w-full p-2 border  rounded-md h-auto bg-white xl:h-40"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default MealRecipeDetails
