import Header from "../components/Header";
import LoadingCarousel from "../components/LoadingCarousel";
import Search from "../components/Search";

function Home() {
  return (
    <>
      <main className="bg-orange-100 flex flex-col items-center min-h-screen">
        <Header />
        <Search />
        <LoadingCarousel />
      </main>
    </>
  );
}

export default Home;
