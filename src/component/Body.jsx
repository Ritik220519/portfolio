import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";

const Body = () => {
  return (
    <div className="">
      <Navbar />
      <About/>
      <Skills/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
