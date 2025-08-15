import React from "react";
import { Helmet } from "react-helmet-async";

import HeroMerged from "./HeroMerged";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Pricing from "./ui/pricing";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Nizamabad() {
  return (
    <>
      <Helmet>
        <title>Nizamabad Web Design & Development | Sri Yantra Tech</title>
        <meta
          name="description"
          content="Custom websites and SEO-friendly web design for businesses in Nizamabad. Build your online presence with Sri Yantra Tech."
        />
        <meta
          name="keywords"
          content="Nizamabad web design, Nizamabad website development, SEO Nizamabad"
        />
        <link
          rel="canonical"
          href="https://www.sriyantratech.com/nizamabad-web-design"
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
