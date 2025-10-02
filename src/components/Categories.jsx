import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Circulos() {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        console.log("respuesta de API: ", res.data);
        setCategoria(res.data.categories);
      })
      .catch((err) => console.error("error al traer recetas: ", err));
  }, []);
  console.log(categoria.data);
  return (
    <div className="gap-3 grid grid-cols-2 p-3 justify-center items-center">
      {categoria.slice(0, 6).map((reseta) => (
        <div
          className="flex flex-col justify-center items-center"
          key={reseta.idCategory}
        >
          <img
            className="object-cover rounded-full drop-shadow-2xl h-[100px]"
            src={reseta.strCategoryThumb}
            alt={reseta.strCategory}
          />
          <h3 className="secondary">{reseta.strCategory}</h3>
        </div>
      ))}
      ;
    </div>
  );
}
