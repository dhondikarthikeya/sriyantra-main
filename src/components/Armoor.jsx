import React from "react";
import { Helmet } from "react-helmet-async";


import HeroMerged from "./HeroMerged";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Pricing from "./ui/pricing";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Armoor() {
  return (
    <>
      <Helmet>
        <title>Armoor Web Design & Development | Sri Yantra Tech</title>
        <meta
          name="description"
          content="Professional website design, development, and SEO services for businesses in Armoor. Sri Yantra Tech helps you grow online."
        />
        <meta
          name="keywords"
          content="Armoor web design, Armoor website development, SEO Armoor"
        />
        <link
          rel="canonical"
          href="https://www.sriyantratech.com/armoor-web-design"
        />
      </Helmet>

      <main>
        <section id="home">
          <HeroMerged splashActive={false} />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="pricing" className="container mx-auto px-4 py-20">
          <Pricing />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
{/*       <Footer /> */}
    </>
  );
}
