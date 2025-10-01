import React from "react";

export default function Header() {
  return (
    <>
      <div className="w-80 h-40 p-4 px-6 gap-2 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between">
          <img className="w-35" src="/images/el-chef-logo-01.png" alt="" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="bg-orange-400 rounded-md p-1 size-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <h1 className="text-2xl ">Culinary Recipes</h1>
      </div>
    </>
  );
}
