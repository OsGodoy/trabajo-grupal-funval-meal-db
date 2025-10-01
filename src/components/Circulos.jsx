import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Circulos() {
  const [resetas, setResetas] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => setResetas(res.data.meals[0]));
  }, []);
  return [
    resetas.map((reseta) => (
      <div key={reseta.idMeal}>
        <img src="" alt="" />
        <h3></h3>
      </div>
    )),
  ];
}
