import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Areas() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        console.log("respuesta de API: ", res.data.meals);
        setAreas(res.data.meals);
      })
      .catch((err) => console.error("error al traer recetas: ", err));
  }, []);
  console.log(areas.data);
  return (
    <div className="gap-3 grid grid-cols-2 p-3 justify-center items-center">
      {areas.slice(0, 6).map((area) => (
        <div
          className="flex flex-col justify-center items-center"
          key={area.idMeal}
        >
          <img
            className="object-cover rounded-full drop-shadow-2xl h-[100px]"
            src={area.strMealThumb}
            alt={area.strCategory}
          />
          <h3 className="secondary">{area.strMeal}</h3>
        </div>
      ))}
      ;
    </div>
  );
}
