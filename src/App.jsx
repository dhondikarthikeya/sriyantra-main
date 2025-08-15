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

// ✅ New city-specific pages
import Hyderabad from "./components/Hyderabad";
import Nizamabad from "./components/Nizamabad";
import Armoor from "./components/Armoor";

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

  // ✅ Routes that already include their own footer
  const pagesWithOwnFooter = [
    "/hyderabad",
    "/hyderabad-web-design",
    "/nizamabad",
    "/nizamabad-web-design",
    "/armoor",
    "/armoor-web-design",
  ];

  // ✅ Routes that should not show the global footer
  const hideFooterRoutes = [
    "/services-details",
    "/about-details",
    ...pagesWithOwnFooter
  ];

  const shouldShowFooter =
    !hideFooterRoutes.includes(location.pathname);

  // ✅ Splash screen
  if (location.pathname === "/" && showSplash) {
    return (
      <main>
        <section id="home">
          <HeroMerged splashActive={true} fadeOut={fadeOut} />
        </section>
      </main>
    );
  }

  // ✅ Homepage
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

  // ✅ Other routes
  return (
    <>
      <main key={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/services-details" element={<ServiceDetails />} />
          <Route path="/about-details" element={<AboutDetails />} />

          {/* ✅ City-specific routes */}
          <Route path="/hyderabad" element={<Hyderabad />} />
          <Route path="/hyderabad-web-design" element={<Hyderabad />} />

          <Route path="/nizamabad" element={<Nizamabad />} />
          <Route path="/nizamabad-web-design" element={<Nizamabad />} />

          <Route path="/armoor" element={<Armoor />} />
          <Route path="/armoor-web-design" element={<Armoor />} />
        </Routes>
      </main>
      {shouldShowFooter && <Footer />}
    </>
  );
}

export default App;

