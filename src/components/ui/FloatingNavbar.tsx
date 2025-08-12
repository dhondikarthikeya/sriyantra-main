"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  isButton?: boolean;
}

export default function FloatingNavbar() {
  const navItems: NavItem[] = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact Us", href: "#contact", isButton: true },
  ];

  const [active, setActive] = useState("Home");
  const [showLogo, setShowLogo] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .filter((item) => !item.isButton)
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const current = navItems.find((item) => item.href === `#${id}`);
          if (entry.isIntersecting && current && !current.isButton) {
            setActive(current.name);
          }
        });
      },
      {
        threshold: [0.3, 0.6],
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    if (!homeSection) return;

    const logoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setShowLogo(entry.isIntersecting));
      },
      { threshold: 0, rootMargin: "0px" }
    );

    logoObserver.observe(homeSection);
    return () => logoObserver.disconnect();
  }, []);

  const handleClick = (item: NavItem) => {
    if (!item.isButton) setActive(item.name);
    const el = document.querySelector(item.href);
    if (el) {
      const yOffset = -30; // adjust for navbar height
      const y =
        el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const MenuToggle = ({ toggled }: { toggled: boolean }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-black"
    >
      <motion.line
        animate={toggled ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        origin="12 12"
        x1="3"
        y1="7"
        x2="21"
        y2="7"
        initial={false}
        transition={{ duration: 0.3 }}
      />
      <motion.line
        animate={toggled ? { opacity: 0 } : { opacity: 1 }}
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        initial={false}
        transition={{ duration: 0.2 }}
      />
      <motion.line
        animate={toggled ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        origin="12 12"
        x1="3"
        y1="17"
        x2="21"
        y2="17"
        initial={false}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );

  return (
    <>
      {showLogo && (
        <motion.div
          className="fixed top-6 left-6 z-[999]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-[180px] h-[80px] backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-2xl flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="h-14 object-contain" />
          </div>
        </motion.div>
      )}

      <div className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-[998]">
        <nav className="relative flex items-center gap-2 px-2 py-1 bg-white rounded-full shadow-lg border border-gray-200">
          {navItems.map((item) => {
            const isActive = active === item.name;
            const isButton = item.isButton;

            return (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className={cn(
                  "relative px-6 py-2 text-sm font-medium rounded-full transition-all z-10",
                  isButton
                    ? "text-sm font-semibold px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow transition-all"
                    : "text-sm px-4 py-2 text-gray-700 hover:text-gray-900 transition-all"
                )}
              >
                <span className="relative z-20">{item.name}</span>
                {!isButton && isActive && (
                  <>
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-gray-100 rounded-full z-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    <motion.div
                      layoutId="lamp"
                      className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-2 rounded-full bg-black/80 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
                      transition={{ type: "spring", stiffness: 250, damping: 25 }}
                    />
                  </>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="md:hidden fixed top-6 right-6 z-[999]">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="bg-white p-3 rounded-xl border border-gray-300 shadow-lg hover:shadow-xl active:scale-95 transition-transform duration-200"
        >
          <MenuToggle toggled={menuOpen} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen z-[998] bg-[#0f172a] text-white flex flex-col items-center justify-center space-y-6 px-6"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className={cn(
                  "w-full text-center py-3 text-xl rounded-xl font-semibold transition-all",
                  item.isButton
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "hover:text-blue-400"
                )}
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
