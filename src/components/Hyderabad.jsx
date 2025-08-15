import React from "react";
import { Helmet } from "react-helmet-async";

import HeroMerged from "./HeroMerged";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Pricing from "./ui/pricing";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Hyderabad() {
  return (
    <>
      <Helmet>
        <title>Hyderabad Web Design & Development | Sri Yantra Tech</title>
        <meta
          name="description"
          content="Professional web design & development services in Hyderabad. Create fast, responsive, and beautiful websites with Sri Yantra Tech."
        />
        <meta
          name="keywords"
          content="Hyderabad web design, Hyderabad website development, SEO Hyderabad"
        />
        <link
          rel="canonical"
          href="https://www.sriyantratech.com/hyderabad-web-design"
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
