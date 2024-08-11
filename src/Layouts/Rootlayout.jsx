import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/shared/Navigation";
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
