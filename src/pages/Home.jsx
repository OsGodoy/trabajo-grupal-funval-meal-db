import Carousel from "../components/Carousel";
import Header from "../components/Header";
import LoadingCarousel from "../components/LoadingCarousel";
import Search from "../components/Search";

function Home() {
  return (
    <>
      <main className="bg-orange-100 flex flex-col items-center min-h-screen">
        <Header />
        <div className="lg:hidden">
          <Search />
        </div>
        <Carousel />
        <button className="bg-orange-400 border-3 border-orange-300 text-base rounded-lg text-white px-6 py-2 sm:px-8 sm:py-4  cursor-pointer hover:scale-105 duration-200">
          <div className="animate-pulse flex items-center justify-center gap-2">
            Check out all Recipes
            <p className="text-3xl">🍽</p>
          </div>
        </button>
        <LoadingCarousel />
      </main>
    </>
  );
}

export default Home;
