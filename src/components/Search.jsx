import React from "react";

export default function Search() {
  return (
    <>
      <div className="border w-80 flex items-center justify-center">
        <input
          className="bg-white p-2 rounded-full"
          type="text"
          placeholder="Qué receta buscas?"
        />
      </div>
    </>
  );
}
