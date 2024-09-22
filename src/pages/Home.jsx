import React, { useEffect } from "react";
import Banner from "../components/screens/homepage/Banner";
import ProductsSection from "../components/screens/homepage/ProductsSection";
import Services from "../components/screens/homepage/Services";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main>
      <Banner />
      <Services />
      <ProductsSection />
    </main>
  );
};

export default Home;
