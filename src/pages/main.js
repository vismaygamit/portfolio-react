import React from "react";
import About from "./about";
import Services from "./services";
import Counter from "./counter";
import Portfolio from "./portfolio";
import Testimonials from "./testimonials";
import Contact from "./contact";
import Fullstack from "./fullstack";

const main = (props) => {
  return (
    <main id="main">
      <About />
      <Fullstack />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default main;
