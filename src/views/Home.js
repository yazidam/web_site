import React from "react";
import About from "../components/home/About";
import Feature from "../components/home/Feature";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Feature />
    </div>
  );
};

export default Home;
