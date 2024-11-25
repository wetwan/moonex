import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="bg-img font-FiraCode  bg-cover bg-no-repeat h-[70hv]  ">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Features /> 
      <Faq />
      <Footer />
    </>
  );
};

export default App;
