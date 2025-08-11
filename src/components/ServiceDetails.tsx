"use client";

import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Globe,
  Palette,
  Rocket,
  Smartphone,
  ShoppingCart,
  Database,
  Wrench,
  Server,
  Layers,
  Home,
} from "lucide-react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export default function ServiceDetails() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      desc: "We craft high-performing, fully responsive websites that look stunning on any device. Our code is clean, fast, and optimized for the best user experience and search rankings.",
      color: "text-blue-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Our designs are not just pretty—they’re strategic. We focus on intuitive navigation, eye-catching visuals, and smooth user interactions to keep your audience engaged.",
      color: "text-pink-500",
    },
    {
      icon: Rocket,
      title: "SEO Optimization",
      desc: "From keyword research to technical improvements, we ensure your site climbs search engine rankings, attracts more visitors, and converts traffic into loyal customers.",
      color: "text-green-500",
    },
    {
      icon: Smartphone,
      title: "App Development",
      desc: "We build high-quality, cross-platform mobile apps with smooth performance, modern interfaces, and powerful functionality to bring your ideas to users’ fingertips.",
      color: "text-purple-500",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      desc: "Our secure and scalable online store solutions integrate with popular payment systems, inventory management, and marketing tools to help your business grow.",
      color: "text-orange-500",
    },
    {
      icon: Database,
      title: "Database Management",
      desc: "We design, optimize, and maintain databases that are secure, scalable, and efficient, ensuring your data works for you without slowing down your business.",
      color: "text-yellow-500",
    },
    {
      icon: Wrench,
      title: "Maintenance",
      desc: "From regular updates to emergency fixes, we keep your website and applications running smoothly with proactive monitoring and quick support.",
      color: "text-red-500",
    },
    {
      icon: Server,
      title: "Hosting",
      desc: "Fast, secure, and reliable hosting solutions tailored to your needs, with 24/7 monitoring, backups, and optimization for top performance.",
      color: "text-teal-500",
    },
    {
      icon: Layers,
      title: "Custom Solutions",
      desc: "Got a unique challenge? We create tailor-made software solutions designed specifically to meet your business goals and solve complex problems.",
      color: "text-indigo-500",
    },
  ];

  const goToHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Container stagger variant
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animate heading on scroll
  const Heading = () => {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [inView, controls]);

    const variants = {
      hidden: { opacity: 0, y: 50, scale: 0.8 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 },
      },
    };

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 inline-block relative">
          Our Services
          <span className="block w-16 h-1 bg-blue-500 rounded-full mx-auto mt-2"></span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500 mt-4">
          Everything you need to take your business online — modern, secure,
          and scalable.
        </p>
      </motion.div>
    );
  };

  // GlowCard with scroll fade + slide only, no scale on hover or tap
  const GlowCard = ({ children, className, delay }) => {
    const ref = React.useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [inView, controls]);

    const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 20,
          delay,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        className={clsx(
          "relative rounded-2xl bg-white border border-gray-200 shadow-lg overflow-hidden",
          "hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:border-blue-400 transition-all duration-300 ease-in-out",
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 p-6 flex flex-col items-center justify-between min-h-[300px] text-center">
          {children}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Heading />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <GlowCard key={index} delay={index * 0.15}>
                  <Icon className={clsx("w-12 h-12 mb-4", service.color)} />
                  <h3 className="text-2xl font-semibold text-gray-900 leading-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {service.desc}
                  </p>
                </GlowCard>
              );
            })}
          </motion.div>

          {/* CTA with subtle infinite pulse and fade on scroll */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              Need something custom? Contact us!
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Home Button with fade and slide from bottom */}
      <motion.button
        onClick={goToHome}
        aria-label="Go to Home"
        className="fixed bottom-8 right-6 bg-gradient-to-tr from-blue-600 to-indigo-700 text-white p-4 rounded-full shadow-lg hover:from-indigo-700 hover:to-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        initial={{ opacity: 0, y: 60, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.7, type: "spring", stiffness: 130 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <Home size={28} />
      </motion.button>
    </>
  );
}
