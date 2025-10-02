import React from "react";

export default function Carousel() {
  return (
    <>
      <section className="w-80 sm:w-140 md:w-160 lg:w-200 xl:w-220 p-4 flex flex-col gap-2 items-center justify-center">
        <div className="h-50 sm:h-90 md:h-100 lg:h-120 xl:h-130 w-full flex items-center justify-center rounded-xl">
          <span className="h-15 w-72 sm:w-132 md:w-152 lg:w-192 xl:w-212 absolute flex items-center justify-center self-end">
            <p className="bg-black/50 backdrop-blur-sm text-white h-8 w-full text-start flex items-center px-2">
              Nombre del plato
            </p>
          </span>
          <img
            className="border h-full w-full rounded-xl object-cover"
            src="link"
            alt="imagen"
          />
        </div>
        <div className="bg-orange-900 h-8 sm:h-10 w-full flex items-center justify-center gap-4 sm:gap-10 rounded-xl">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 sm:size-6 text-orange-100 cursor-pointer hover:scale-105"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <ul className="text-orange-100 text-xs sm:text-base flex items-center justify-center gap-10">
            <li className="active:underline cursor-pointer">1</li>
            <li className="active:underline cursor-pointer">2</li>
            <li className="active:underline cursor-pointer">3</li>
          </ul>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 sm:size-6 text-orange-100 cursor-pointer hover:scale-105"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
