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

      <h1 className="text-2xl lg:text-3xl my-4">Culinary Recipes</h1>
      <Carousel />
      <Link
        to="/meal-recipes"
        className="bg-orange-400 border-3 border-orange-300 text-base rounded-lg text-white px-6 py-2 sm:px-8 sm:py-4  cursor-pointer hover:scale-105 duration-200"
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
