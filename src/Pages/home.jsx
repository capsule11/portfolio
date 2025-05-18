import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

function Home() {
  return (
    <>
    <div className="sticky top-0 z-50 w-full backdrop-blur-3xl bg-[#f0f2f5]/80">
      <Navbar />
    </div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
