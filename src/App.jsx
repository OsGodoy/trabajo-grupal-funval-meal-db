import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Circulos from "./components/Circulos";

export default function App() {
  return (
    <>
      <main className="bg-orange-100 flex flex-col items-center min-h-screen">
        <Header />
        <Search />
      </main>
    </>
  );
}
