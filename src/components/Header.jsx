import { useEffect, useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { getAreas, getCategories } from "../api/recipe/services";

export default function Header() {

  const [areas, setAreas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const getAllAreas = async () => {
    try {
      let resp = await getAreas();
      setAreas(resp.data.meals);
    } catch (error) {
      console.error(error);
      setAreas([]);
    }
  };
  const getAllCategories = async () => {
    try {
      let resp = await getCategories();
      setCategories(resp.data.meals);
    } catch (error) {
      console.error(error);
      setCategories([]);
    }
  };
  useEffect(() => {
    if (areas.length <= 0) getAllAreas();
    if (categories.length <= 0) getAllCategories();
  }, []);

  
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <div className="w-80 sm:w-160 lg:w-200 xl:w-280 h-40 sm:h-55 lg:h-65 p-4 px-6 gap-2 flex flex-col items-center justify-center">
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between">
          <div className="flex justify-start w-full md:w-1/3 lg:w-[25%]">
            <img
              className="w-35 sm:w-45"
              src="/images/el-chef-logo-01.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/3 lg:w-[35%]">
            <Search />
          </div>
          
          <div className="flex w-full justify-end absolute right-4 top-4 md:relative md:right-0 md:top-0 md:w-1/3 lg:w-[40%]">
            <ul className="text-lg lg:text-xl hidden lg:flex gap-10 xl:gap-12">
              <li className="text-orange-400 active:underline cursor-pointer">
                <Link to="/"> Home</Link>
              </li>

              <li className="relative group">
                <span className="text-orange-400 cursor-pointer flex items-center gap-1">
                  Area
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <div
                  className="absolute right-10 mt-2 w-72 sm:w-125 bg-white shadow-lg rounded-lg
                  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-4
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 z-50"
                >
                  {areas.map((area, index) => (
                    <Link
                      key={`area-${index}`}
                      className="px-2 py-1 text-sm sm:text-base hover:bg-orange-100/30 hover:text-orange-400 rounded-md transition"
                      to={`/meal-recipes/area/${area.strArea}`}
                    >
                      {area.strArea}
                    </Link>
                  ))}
                </div>
              </li>


              <li className="relative group">
                <span className="text-orange-400 cursor-pointer flex items-center gap-1">
                  Category
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                 <div
                  className="absolute right-10 mt-2 w-72 sm:w-120 bg-white shadow-lg rounded-lg
                  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 p-4
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-300 z-50"
                >
                  {categories.map((category, index) => (
                    <Link
                      key={`category-${index}`}
                      className="px-2 py-1 text-sm sm:text-base hover:bg-orange-100/30 hover:text-orange-400 rounded-md transition"
                      to={`/meal-recipes/category/${category.strCategory}`}
                    >
                      {category.strCategory}
                    </Link>
                  ))}
                </div>
               
              </li>
            </ul>
            
             <div className="lg:hidden flex flex-col gap-2">
              <button
                className="bg-orange-400 rounded-md p-1 size-10 text-white"
                onClick={() => toggleDropdown("menu")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              {/* Menu desplegable móvil */}
              {openDropdown === "menu" && (
                <ul className="absolute top-10 right-5 w-56 bg-white shadow-lg rounded-lg flex flex-col text-base sm:text-lg p-2 z-50">
                  <li className="px-4 py-2 text-orange-400 hover:bg-orange-100/30 cursor-pointer">
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <button
                      onClick={() => toggleDropdown("area")}
                      className="w-full flex justify-between items-center px-4 py-2 text-orange-400 hover:bg-orange-100/30"
                    >
                      Area
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openDropdown === "area" ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === "area" && (
                      <ul className="pl-6">
                        {areas.map((area, index) => (
                          <li key={`m-area-${index}`} className="px-4 py-2 hover:bg-orange-100/30 cursor-pointer z-50">
                            {area.strArea}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  <li>
                    <button
                      onClick={() => toggleDropdown("category")}
                      className="w-full flex justify-between items-center px-4 py-2 text-orange-400 hover:bg-orange-100/30"
                    >
                      Category
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          openDropdown === "category" ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === "category" && (
                      <ul className="pl-6">
                        {categories.map((cat, index) => (
                          <li key={`m-cat-${index}`} className="px-4 py-2 hover:bg-orange-100/30 cursor-pointer">
                            {cat.strCategory}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


