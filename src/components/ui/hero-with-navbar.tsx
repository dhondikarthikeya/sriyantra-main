"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Circle, Home, User, Briefcase, FileText } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function HeroWithNavbar() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.4 + i * 0.2 },
    }),
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#030303] overflow-hidden">
      {/* Floating Navbar */}
      <NavBar items={navItems} />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
        >
          <Circle className="h-2 w-2 fill-rose-500/80" />
          <span className="text-sm text-white/60 tracking-wide">
            BlueFlights
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            Affordable Websites
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            For Small Businesses
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8"
        >
          BlueFlights helps small & medium businesses go online with stunning,
          responsive websites starting at just ₹4,999.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-md transition-transform hover:scale-105"
          >
            🚀 Get Your Website Today
          </Button>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white shadow-md transition-transform hover:scale-105"
          >
            💼 View Pricing Plans
          </Button>
        </motion.div>
      </div>

      {/* Optional Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>
  )
}
