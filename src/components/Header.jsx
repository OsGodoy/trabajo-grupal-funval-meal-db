import React from "react";

export default function Header() {
  return (
    <>
      <div className="w-80 p-4 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <img className="border " src="/images/el-chef-logo-01.png" alt="" />
        </div>
        <h1 className="text-2xl">Recetas Culinarias</h1>
      </div>
    </>
  );
}
