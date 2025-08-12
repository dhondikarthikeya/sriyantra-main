"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  TrendingUp,
  LayoutGrid,
  CheckCircle,
  ShieldCheck,
  Globe,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom"; // import useNavigate

const features = [
  {
    icon: Zap,
    title: "Affordable Pricing",
    description: "Launch your business online without breaking the bank.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Designed to help small & medium businesses scale online.",
  },
  {
    icon: LayoutGrid,
    title: "Customizable Designs",
    description: "Tailor your website to match your unique brand identity.",
  },
  {
    icon: CheckCircle,
    title: "Easy Setup",
    description: "Get your website live quickly with minimal technical effort.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "We prioritize security and uptime for your peace of mind.",
  },
  {
    icon: Globe,
    title: "Mobile-First & Global",
    description: "Responsive designs that work perfectly on any device.",
  },
];

export default function About() {
  // Faster animation settings
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" }, // Faster duration & delay
    }),
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  // Handler for "Know More" button click
  const handleNoMoreClick = () => {
    navigate("/about-details");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
  };

  return (
    <section className="w-full bg-gray-50 py-24 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20 px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight sm:leading-snug md:leading-snug mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }} // Faster
          viewport={{ once: true }}
        >
          Empowering{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-700">
            Small & Medium
          </span>{" "}
          Businesses to Go Online
        </motion.h1>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-snug max-w-3xl mx-auto mt-2 px-4">
          At{" "}
          <span className="font-semibold text-blue-600">Sri Yantra Tech</span>, we
          help businesses establish a professional online presence quickly and
          affordably. Our goal is to make digital transformation accessible to
          everyone — from small startups to growing enterprises.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {["Startups 🚀", "Retail Stores 🏪", "Freelancers 🧑‍💻", "Local Services 📍"].map(
            (tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full shadow-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Features Grid */}
      <div
        ref={ref}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <Card className="border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-blue-100 mb-4 transition-transform duration-300 hover:scale-110">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Buttons at Bottom */}
      <div className="text-center pt-20 space-y-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
          >
            <Phone className="w-5 h-5" /> Contact Us
          </a>

          <button
            onClick={handleNoMoreClick}
            className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Know more
          </button>
        </div>
      </div>
    </section>
  );
}
