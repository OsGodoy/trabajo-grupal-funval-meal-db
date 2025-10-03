import React from "react";

export default function LoadingCarousel() {
  return (
    <>
      <section className="w-[70%] h-56 md:h-96 lg:h-110 xl:h-125  p-4 flex flex-col gap-2 animate-pulse items-center justify-center">
        <div className="bg-orange-200 h-50 sm:h-80 md:h-100 lg:h-120 xl:h-130 w-full flex items-center justify-center rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 text-orange-900 animate-spin"
            style={{ animationDuration: "2s" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
