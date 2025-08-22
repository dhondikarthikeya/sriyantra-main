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

// ✅ Terms & Conditions page
import TermsAndConditions from "./components/TermsAndConditions";

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

  // ✅ Hide footer for city pages (normal + -web-design)
  const hideFooterRoutes = [
    "/services-details",
    "/about-details",
    "/hyderabad",
    "/hyderabad-web-design",
    "/nizamabad",
    "/nizamabad-web-design",
    "/armoor",
    "/armoor-web-design",
    "/terms", // hide footer if you don’t want it on terms page
  ];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  // ✅ Splash screen logic
  if (location.pathname === "/" && showSplash) {
    return (
      <main>
        <section id="home">
          <HeroMerged splashActive={true} fadeOut={fadeOut} />
        </section>
      </main>
    );
  }

  // ✅ Homepage after splash
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

          {/* ✅ Terms & Conditions route */}
          <Route
            path="/terms"
            element={
              <TermsAndConditions
                effectiveDate="August 22, 2025"
                email="info@sriyantratech.com"
                phone="+91-9876543210"
                website="https://www.sriyantratech.com"
                cityState="Hyderabad, Telangana"
              />
            }
          />
        </Routes>
      </main>
      {shouldShowFooter && <Footer />}
    </>
  );
}

export default App;
