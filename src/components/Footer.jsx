"use client";

import { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const Shape = ({ className, delay = 0, size = 200, rotate = 0, gradient = "from-blue-500/[0.15]" }) => (
    <motion.div
      initial={{ opacity: 0, y: 80, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width: size, height: size / 3 }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} 
            backdrop-blur-[2px] border-2 border-white/[0.1] shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]`}
        />
      </motion.div>
    </motion.div>
  );

  return (
    <footer className="relative overflow-hidden bg-[#030303] text-white mt-20">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-blue-900/20" />

      {/* Animated Shapes */}
      <Shape className="left-[10%] bottom-[30%]" size={300} rotate={15} gradient="from-indigo-500/[0.12]" />
      <Shape className="right-[5%] bottom-[50%]" size={250} rotate={-20} gradient="from-rose-500/[0.12]" />
      <Shape className="left-[25%] bottom-[10%]" size={180} rotate={25} gradient="from-cyan-500/[0.12]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Brand Column */}
          <div>
            <h3 className="text-3xl font-bold">BlueFlights</h3>
            <p className="text-gray-200 mt-2 text-sm md:text-base max-w-xs mx-auto md:mx-0">
              Affordable websites for small & medium businesses.
            </p>
            <p className="text-gray-300 mt-2 text-xs md:text-sm max-w-xs mx-auto md:mx-0">
              We help you grow online with modern, scalable, and beautiful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h4 className="font-semibold text-white mb-2">Quick Links</h4>
            <a href="#" className="text-gray-200 hover:text-white transition-colors">About Us</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Social & Newsletter */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-semibold text-white mb-1">Connect With Us</h4>
            <div className="flex gap-6">
              <a href="#" title="Facebook" className="hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6 text-white/80 hover:text-white" />
              </a>
              <a href="#" title="Twitter" className="hover:scale-110 transition-transform">
                <Twitter className="w-6 h-6 text-white/80 hover:text-white" />
              </a>
              <a href="#" title="Instagram" className="hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-white/80 hover:text-white" />
              </a>
              <a href="#" title="LinkedIn" className="hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-white/80 hover:text-white" />
              </a>
            </div>

            {/* Newsletter Subscription */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex mt-4 w-full max-w-xs bg-white/10 rounded-md overflow-hidden"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-300 text-xs">
          © {new Date().getFullYear()} BlueFlights. All rights reserved.
        </div>

        {/* Scroll-to-top Button */}
        {showScroll && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </div>
    </footer>
  );
}
