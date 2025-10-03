import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
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
    <div className="flex flex-col justify-center items-center w-full gap-3">
      <h1 className="flex text-2xl ss:text-4xl md:text-6xl lg:text-8xl xl:text-[8rem] 2xl:text-[10rem] font-primary w-full justify-center items-center">
        Category
      </h1>
      <div className="gap-5 flex flex-wrap p-3 justify-center items-center">
        {categoria.slice(0, 6).map((reseta) => (
          <div
            className="flex flex-col justify-center items-center gap-4"
            key={reseta.idCategory}
          >
            <img
              className="object-cover rounded-full drop-shadow-2xl h-[100px] w-[160px] md:h-[150px] md:w-[210px] lg:h-[200px] lg:w-[260px] xl:h-[250px] xl:w-[310px] 2xl:h-[300px] 2xl:w-[360px]"
              src={reseta.strCategoryThumb}
              alt={reseta.strCategory}
            />
            <h3 className="text-[15px] md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl">
              {reseta.strCategory}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
