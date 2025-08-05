"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  isButton?: boolean; // ✅ flag for special button
}

export default function FloatingNavbar() {
  const navItems: NavItem[] = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Clients", href: "#clients" },
    { name: "Contact Us", href: "#contact", isButton: true }, // ✅ special button
  ];

  const [active, setActive] = useState("Home");

  // ✅ Scroll Spy
  useEffect(() => {
    const sections = navItems
      .filter((item) => !item.isButton)
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const current = navItems.find((item) => item.href === `#${id}`);
            if (current && !current.isButton) setActive(current.name);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (item: NavItem) => {
    if (!item.isButton) setActive(item.name);
    const el = document.querySelector(item.href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
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
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  : "text-gray-700 hover:text-gray-900"
              )}
            >
              {/* Text */}
              <span className="relative z-20">{item.name}</span>

              {/* Active Background Pill for normal links */}
              {!isButton && isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gray-100 rounded-full z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Glowing Lamp for active link */}
              {!isButton && isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-2 rounded-full bg-black/80 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
                  transition={{ type: "spring", stiffness: 250, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
