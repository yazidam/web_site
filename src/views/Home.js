import React from "react";
import About from "../components/home/About";
import Feature from "../components/home/Feature";
import Hero from "../components/home/Hero";
import Works from "../components/home/Works";

const Home = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Feature />
      <Works />
    </div>
  );
};

export default Home;
