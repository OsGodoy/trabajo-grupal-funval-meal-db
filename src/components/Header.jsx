import React from "react";
import Search from "./Search";

export default function Header() {
  return (
    <>
      <div className="w-80 sm:w-160 lg:w-200 xl:w-280 h-40 sm:h-55 lg:h-65 p-4 px-6 gap-2 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between">
          <img
            className="w-35 sm:w-45"
            src="/images/el-chef-logo-01.png"
            alt=""
          />
          <div className="hidden lg:flex">
            <Search />
          </div>
          <ul className="text-lg lg:text-xl hidden md:flex gap-10 xl:gap-12">
            <li className="text-orange-400 active:underline cursor-pointer">
              Link
            </li>
            <li className="text-orange-400 active:underline cursor-pointer">
              Link
            </li>
            <li className="text-orange-400 active:underline cursor-pointer">
              Link
            </li>
            <li className="text-orange-400 active:underline cursor-pointer">
              Link
            </li>
          </ul>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="bg-orange-400 md:hidden rounded-md p-1 size-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <h1 className="text-2xl lg:text-3xl">Culinary Recipes</h1>
      </div>
    </>
  );
}
