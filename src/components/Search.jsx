import { useState } from "react";

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [variableSearch, setVariableSearch] = useState("");

  return (
    <>
      <div className="w-70 md:w-90 xl:w-100 flex items-center justify-center">
        <section className="bg-white w-[80%] p-2 px-3 gap-2 sm:gap-8 md:gap-10 xl:gap-15 rounded-full flex items-center justify-center">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            className="md:text-base p-1 outline-none"
            type="text"
            placeholder="What do we eat today?"
          />
          <button
            onClick={() => setVariableSearch(inputValue)}
            className="cursor-pointer hover:scale-105 duration-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7 text-orange-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </section>
      </div>
    </>
  );
}
