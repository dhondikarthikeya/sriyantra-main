"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

// 🌟 Glassmorphic Floating Shape
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.15]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[6px]", // Frosted glass
            "border border-white/[0.3]", // Subtle border
            "shadow-[0_0_50px_8px_rgba(255,255,255,0.15)]", // Soft glow
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.35),transparent_70%)]" // Highlight
          )}
        />
      </motion.div>
    </motion.div>
  );
}

// 🌟 Hero Section Component
function HeroGeometric({
  badge = "BlueFlights",
  title1 = "Affordable Websites",
  title2 = "For Small Businesses",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.4 + i * 0.2 },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating Shapes (Responsive Sizes) */}
      <ElegantShape delay={0.3} width={300} height={80} rotate={12} gradient="from-indigo-500/[0.2]" className="left-[-10%] top-[15%] sm:w-[400px] sm:h-[100px] md:w-[600px] md:h-[140px]" />
      <ElegantShape delay={0.5} width={250} height={70} rotate={-15} gradient="from-rose-500/[0.2]" className="right-[-5%] top-[70%] sm:w-[350px] sm:h-[90px] md:w-[500px] md:h-[120px]" />
      <ElegantShape delay={0.4} width={180} height={50} rotate={-8} gradient="from-violet-500/[0.2]" className="left-[5%] bottom-[5%] sm:w-[250px] sm:h-[70px] md:w-[300px] md:h-[80px]" />
      <ElegantShape delay={0.6} width={150} height={40} rotate={20} gradient="from-amber-500/[0.2]" className="right-[15%] top-[10%] sm:w-[200px] sm:h-[50px] md:w-[200px] md:h-[60px]" />
      <ElegantShape delay={0.7} width={120} height={35} rotate={-25} gradient="from-cyan-500/[0.2]" className="left-[20%] top-[5%] sm:w-[180px] sm:h-[50px] md:w-[150px] md:h-[40px]" />

      {/* Hero Text */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.12] mb-4 sm:mb-6 shadow-lg"
        >
          <Circle className="h-2 w-2 sm:h-2.5 sm:w-2.5 fill-rose-500/80" />
          <span className="text-xs sm:text-sm md:text-base text-white/70 tracking-wide">{badge}</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-5xl md:text-7xl font-semibold mb-4 sm:mb-6 leading-snug tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            {title1}
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            {title2}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm sm:text-base md:text-lg text-white/60 max-w-md sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Sri Yantra Tech helps small & medium businesses go online with stunning,
          responsive websites starting at just ₹4,999.
        </motion.p>
      </div>

      {/* Top & Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>
  );
}

export { HeroGeometric };
