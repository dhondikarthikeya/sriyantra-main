"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Globe, Palette, Rocket,
  ShoppingCart, Database, Wrench, Server, Layers
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Design & Development",
      desc: "Beautiful, responsive websites built for your business.",
      icon: Globe,
      color: "text-blue-500 bg-blue-100",
    },
    {
      title: "UI/UX Designing",
      desc: "Modern, user-friendly interfaces for the best experience.",
      icon: Palette,
      color: "text-green-500 bg-green-100",
    },
    {
      title: "Digital Marketing & Branding",
      desc: "Grow your business with SEO, social media, and branding.",
      icon: Rocket,
      color: "text-yellow-500 bg-yellow-100",
    },
    {
      title: "Custom Web Apps",
      desc: "Tailored solutions built for your unique business logic.",
      icon: Database,
      color: "text-purple-500 bg-purple-100",
    },
    {
      title: "eCommerce Development",
      desc: "Scalable online stores with payment integrations.",
      icon: ShoppingCart,
      color: "text-pink-500 bg-pink-100",
    },
    {
      title: "Ongoing Support & Maintenance",
      desc: "We keep your site secure and up-to-date.",
      icon: Wrench,
      color: "text-indigo-500 bg-indigo-100",
    },
    {
      title: "Website Hosting",
      desc: "Fast, secure, and reliable hosting for your business.",
      icon: Server,
      color: "text-orange-500 bg-orange-100",
    },
    {
      title: "Vertical SaaS Solutions",
      desc: "Industry-specific SaaS tailored for your unique niche.",
      icon: Layers,
      color: "text-cyan-500 bg-cyan-100",
    },
  ];

  // Navigate & reset scroll instantly
  const handleKnowMoreClick = () => {
    navigate("/services-details");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 inline-block relative">
          Our Services
          <span className="block w-16 h-1 bg-blue-500 rounded-full mx-auto mt-2"></span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500 mt-4">
          Everything you need to take your business online — modern, secure, and scalable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 items-stretch">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="h-full"
            >
              <Card className="group relative h-full rounded-2xl border border-white/30 
                  bg-white/30 backdrop-blur-md shadow-lg hover:shadow-2xl 
                  transition-all duration-500 hover:scale-[1.03]">
                <CardContent className="flex flex-col items-center justify-center text-center p-8 h-full">
                  <div
                    className={`p-4 rounded-full mb-4 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 ${service.color}`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{service.desc}</p>
                </CardContent>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/60 transition-all duration-500 pointer-events-none"></div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
          >
            Need something custom? Contact us!
          </a>
          <button
            onClick={handleKnowMoreClick}
            className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Know more
          </button>
        </div>
      </div>
    </section>
  );
}
