import React from "react";
import Navigation from "../components/shared/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const Rootlayout = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
