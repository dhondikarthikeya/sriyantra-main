"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string; // always format: "/#sectionId"
  isButton?: boolean;
}

interface TubelightNavbarProps {
  items: NavItem[];
}

export function TubelightNavbar({ items }: TubelightNavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState("Home");
  const [showLogo, setShowLogo] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight active based on scroll if on home page and sections exist
  useEffect(() => {
    if (location.pathname !== "/") {
      setActive(""); // No highlight on other pages
      setShowLogo(false);
      return;
    }

    const sections = items
      .map((item) => item.href.split("#")[1]) // get section id after #
      .filter(Boolean)
      .map((id) => document.getElementById(id!))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const navItem = items.find((item) => item.href.endsWith(`#${id}`));
            if (navItem) {
              setActive(navItem.name);
              setShowLogo(navItem.name === "Home");
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname, items]);

  const handleClick = (item: NavItem) => {
    if (!item.isButton) setActive(item.name);

    const [path, hash] = item.href.split("#");

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        if (hash) {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    } else {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    setMenuOpen(false);
  };

  return (
    <>
      {/* Floating Glass Logo */}
      {showLogo && (
        <motion.div
          className="fixed top-6 left-6 z-[999]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-[180px] h-[80px] backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-2xl flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="h-14 object-contain" />
          </div>
        </motion.div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-[998]">
        <nav className="relative flex items-center gap-2 px-2 py-1 bg-white rounded-full shadow-lg border border-gray-200">
          {items.map((item) => {
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

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-6 right-6 z-[999]">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="bg-white p-3 rounded-xl border border-gray-300 shadow-lg"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="text-black" /> : <Menu className="text-black" />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen z-[998] bg-[#0f172a] text-white flex flex-col items-center justify-center space-y-6 px-6"
          >
            {/* Glass Logo inside mobile menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-[160px] h-[70px] backdrop-blur-md bg-white/10 border border-white/30 shadow-md rounded-2xl flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="h-12 object-contain" />
              </div>
            </motion.div>

            {items.map((item) => (
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
