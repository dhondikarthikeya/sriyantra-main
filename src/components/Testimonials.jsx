"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// ✅ Example Testimonials Data
const testimonialsData = [
  {
    name: "John Doe",
    designation: "CEO, TechCorp",
    quote:
      "BlueFlights transformed our online presence and helped us reach a global audience effortlessly.",
    src: "https://images.unsplash.com/photo-1603415526960-f7e0328b9b69?q=80&w=800",
  },
  {
    name: "Sarah Smith",
    designation: "Founder, Bakehouse",
    quote:
      "The website they built for our bakery is stunning and has significantly boosted our online orders.",
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800",
  },
  {
    name: "Michael Johnson",
    designation: "Marketing Head, FitnessPro",
    quote:
      "Our new landing page is modern, fast, and perfectly aligned with our brand vision.",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
  },
];

export const AnimatedTestimonials = ({
  testimonials = testimonialsData,
  autoplay = true,
  className = "",
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <section id="clients" className={`max-w-sm md:max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-20 ${className}`}>
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 inline-block relative">
          Our Clients
          <span className="block w-16 h-1 bg-blue-500 rounded-full mx-auto mt-2"></span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500 mt-4">
          Trusted by companies and professionals who rely on us to enhance their productivity.
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left: Image Animation */}
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Quote & Controls */}
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500">
              {testimonials[active].designation}
            </p>

            <motion.p className="text-lg text-gray-600 mt-8 leading-relaxed">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Controls */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
            >
              <IconArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTestimonials;
