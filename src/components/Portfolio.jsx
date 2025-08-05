import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Bakery Website",
      desc: "Modern, responsive website for a local bakery.",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200",
    },
    {
      title: "Fitness Studio",
      desc: "Landing page and class schedule system.",
      img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1200",
    },
    {
      title: "Startup Landing Page",
      desc: "Professional SaaS landing page for a tech startup.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 bg-gray-50 scroll-mt-24" // ✅ scroll-mt avoids navbar overlap
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 inline-block relative">
          Our Portfolio
          <span className="block w-16 h-1 bg-blue-500 rounded-full mx-auto mt-2"></span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-500 mt-4">
          Here are some of the recent websites we designed for small and medium
          businesses.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            <Card className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl bg-white">
              {/* Thumbnail */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
                    View Project
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <CardContent className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
