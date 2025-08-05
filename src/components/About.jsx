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
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // Intersection Observer hook to trigger animation on scroll
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full bg-gray-50 py-24 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight sm:leading-snug md:leading-snug mb-6 max-w-3xl mx-auto">
          Empowering{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            Small & Medium
          </span>{" "}
          Businesses to Go Online
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-snug max-w-3xl mx-auto mt-2 px-4">
          At <span className="font-semibold text-indigo-600">BlueFlights</span>, 
          we help businesses establish a professional online presence quickly and 
          affordably. Our goal is to make digital transformation accessible to 
          everyone — from small startups to growing enterprises.
        </p>
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
              <Card className="border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 
                transition-all duration-300 rounded-xl">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-indigo-50 mb-4 transition-transform duration-300 hover:scale-110">
                    <Icon className="w-7 h-7 text-indigo-600" />
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
    </section>
  );
}
