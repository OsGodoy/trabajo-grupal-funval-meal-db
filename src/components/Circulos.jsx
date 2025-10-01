import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Circulos() {
  const [resetas, setResetas] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php/")
      .then((res) => setResetas(res.data.meals));
  }, []);
  return (
    <div className="flex flex-wrap p-3">
      {resetas.map((reseta) => (
        <div
          className="gap-3 flex flex-col justify-center items-center"
          key={reseta.idMeal}
        >
          <img
            className="object-cover rounded-full drop-shadow-2xl h-[200px]"
            src={reseta.strMealThumb}
            alt={reseta.strMeal}
          />
          <h3 className="h3">{reseta.strMeal}</h3>
        </div>
      ))}
      ;
    </div>
  );
}
