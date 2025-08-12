import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Corporate Website for Tech Startup",
    description:
      "Designed and developed a modern, responsive website for a fast-growing tech startup, featuring smooth animations and lead capture forms.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
    category: "Web Development",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Built a robust online store with secure checkout, product filters, and mobile-first design to maximize conversions.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&auto=format&fit=crop&q=80",
    category: "E-Commerce",
  },
  {
    title: "Travel Booking Web App",
    description:
      "Developed a feature-rich travel booking system with real-time search, user accounts, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&auto=format&fit=crop&q=80",
    category: "Web Application",
  },
  {
    title: "Personal Brand Portfolio",
    description:
      "Created a sleek and interactive portfolio for a creative professional, including blog, gallery, and contact form.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80",
    category: "Design & Development",
  },
  {
    title: "Restaurant Ordering Website",
    description:
      "Built a responsive online ordering system for a restaurant, complete with menu management and delivery tracking.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200&auto=format&fit=crop&q=80",
    category: "Web App",
  },
  {
    title: "Real Estate Listing Platform",
    description:
      "Developed a property listing site with map integration, advanced search filters, and agent dashboards.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&auto=format&fit=crop&q=80",
    category: "Web Platform",
  },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-800 inline-block relative"
          >
            Our Portfolio
            <span className="block w-16 h-1 bg-blue-500 rounded-full mx-auto mt-2"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 max-w-2xl mx-auto mt-4"
          >
            A selection of our recent work — combining creativity, technology, and business impact.
          </motion.p>
        </div>

        {/* Responsive Category Filter */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex gap-3 min-w-max px-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors duration-300 whitespace-nowrap ${
                  filter === cat
                    ? "bg-blue-600 text-white border-blue-600"  // changed indigo to blue here
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">{/* changed indigo to blue */}
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{/* changed indigo to blue */}
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
