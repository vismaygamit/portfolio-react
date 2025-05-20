import React from "react";
import About from "./about";
import Services from "./services";
import Counter from "./counter";
import Portfolio from "./portfolio";
import Testimonials from "./testimonials";
import Contact from "./contact";
import Fullstack from "./fullstack";
import Pricing from "./pricing";
import Product from "./prodcut";

const main = (props) => {
  return (
    <main id="main">
      <About />
      <Fullstack />
      <Product />
      <Services />
      <Counter />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default main;
