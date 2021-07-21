import React from "react";
import About from "../components/home/About";
import Feature from "../components/home/Feature";
import Faq from "../components/home/Faq";

import Hero from "../components/home/Hero";
import Works from "../components/home/Works";

const Home = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Feature />
      <Works />
      <Faq />
    </div>
  );
};

export default Home;
