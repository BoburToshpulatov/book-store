import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommended from "./Recommended";
import News from "./News";

const Home = () => {
  return (
    <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
    </main>
  );
};

export default Home;
