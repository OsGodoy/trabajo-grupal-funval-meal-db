import Areas from "../components/Areas";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-orange-100 flex flex-col items-center min-h-screen">
      <Header />
      <div className="w-58 sm:w-100 sm:h-15 flex items-center justify-center text-center">
        <h1 className="text-2xl leading-[25px]">
          Find the best culinary recipes!
        </h1>
      </div>
      <div className="flex items-center justify-center w-full h-100 sm:h-120 m-4">
        <Carousel />
      </div>
      <Link
        to="/meal-recipes"
        className="bg-orange-400 border-3 border-orange-300 text-base rounded-lg text-white px-6 py-2 cursor-pointer hover:scale-105 duration-200"
      >
        <div className="animate-pulse flex items-center justify-center gap-2">
          Check out all Recipes
          <p className="text-3xl">🍽</p>
        </div>
      </Link>
      <Areas />
      <Categories />
      <Footer />
    </main>
  );
}

export default Home;
