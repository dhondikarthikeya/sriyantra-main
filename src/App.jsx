import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import HeroMerged from "./components/HeroMerged";
import About from "./components/About";
import AboutDetails from "./components/AboutDetails";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/ui/pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetails from "./components/ServiceDetails";
// import ViewPlans from "./components/ViewPlans";

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowSplash(false), 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const hideFooterRoutes = [
    "/services-details",
    "/about-details",
    "/view-plans",
  ];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  // When splash is visible, show only splash + HeroMerged, no footer
  if (location.pathname === "/" && showSplash) {
    return (
      <>
        <main>
          <section id="home">
            <HeroMerged splashActive={true} fadeOut={fadeOut} />
          </section>
        </main>
      </>
    );
  }

  // After splash, render full home page sections with footer
  if (location.pathname === "/") {
    return (
      <>
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
        {shouldShowFooter && <Footer />}
      </>
    );
  }

  // Other routes render normally with footer logic
  return (
    <>
      <main key={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/services-details" element={<ServiceDetails />} />
          <Route path="/about-details" element={<AboutDetails />} />
          <Route path="/view-plans" element={<ViewPlans />} />
        </Routes>
      </main>
      {shouldShowFooter && <Footer />}
    </>
  );
}

export default App;
