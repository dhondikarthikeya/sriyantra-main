import React from "react";
import { Home, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutDetails() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <section className="pt-20 pb-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16 px-4 sm:px-0">
            <div className="flex items-center justify-center gap-2 mb-6 animate-pulse">
              <Star size={32} color="#3b82f6" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight max-w-4xl mx-auto leading-tight">
                Empowering{" "}
                <span className="text-blue-600 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                  Small & Medium
                </span>{" "}
                Businesses to Go Online
              </h1>
            </div>
            <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed tracking-wide">
              At{" "}
              <span className="font-semibold text-blue-600 underline decoration-indigo-400 decoration-2 underline-offset-4">
                Sri Yantra Tech
              </span>
              , we specialize in helping businesses build a strong, professional
              online presence quickly and affordably. Our goal is to democratize
              digital transformation — making it accessible and effective for
              startups, retail stores, freelancers, and local service providers
              alike.
            </p>

            {/* Responsive tags: wrap on desktop, scroll on mobile/tablet */}
            <div className="
              flex flex-wrap justify-center mt-8
              max-md:flex-nowrap max-md:justify-start max-md:overflow-x-auto max-md:whitespace-nowrap scrollbar-hide
            ">
              {[
                { label: "Startups 🚀", bg: "bg-blue-100", text: "text-blue-700" },
                { label: "Retail Stores 🏪", bg: "bg-blue-100", text: "text-blue-700" },
                { label: "Freelancers 👩‍💻", bg: "bg-blue-100", text: "text-blue-700" },
                { label: "Local Services 📍", bg: "bg-blue-100", text: "text-blue-700" },
              ].map(({ label, bg, text }) => (
                <span
                  key={label}
                  className={`${bg} ${text} rounded-full px-4 py-1 text-sm font-medium shadow-sm hover:shadow-md transition-shadow cursor-default m-1`}
                  aria-label={label}
                  role="note"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20 px-4 sm:px-0">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Affordable Pricing",
                description: "Launch your business online without breaking the bank. Transparent pricing with no hidden fees.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M12 21h7M21 14h-8" />
                  </svg>
                ),
                title: "Growth Focused",
                description: "Designed to help small & medium businesses scale efficiently and effectively.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
                  </svg>
                ),
                title: "Customizable Designs",
                description: "Tailor your website’s look and feel to match your unique brand identity.",
              },
            ].map(({ icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl shadow-md p-8 text-center transition-transform hover:-translate-y-2 hover:shadow-lg duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <div>{icon}</div>
                <h3 className="font-semibold text-xl mt-4 mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{description}</p>
              </div>
            ))}
          </div>

          {/* More Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20 px-4 sm:px-0">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: "Easy Setup",
                description: "Get your website live quickly with minimal technical effort or learning curve.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-2.21-1.79-4-4-4m8 8a4 4 0 00-4-4" />
                    <circle cx={12} cy={12} r={10} />
                  </svg>
                ),
                title: "Secure & Reliable",
                description: "We prioritize your website's security and uptime so you can focus on your business.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx={12} cy={12} r={10} />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20" />
                  </svg>
                ),
                title: "Mobile-First & Global",
                description: "Responsive designs that work perfectly on any device and reach customers worldwide.",
              },
            ].map(({ icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl shadow-md p-8 text-center transition-transform hover:-translate-y-2 hover:shadow-lg duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <div>{icon}</div>
                <h3 className="font-semibold text-xl mt-4 mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{description}</p>
              </div>
            ))}
          </div>

          {/* Mission / Vision / Team / Contact */}
          <div className="max-w-4xl mx-auto space-y-16 text-gray-800 px-4 sm:px-0">
            {[
              {
                title: "Our Mission",
                iconColor: "text-blue-600",
                text: "To empower businesses with affordable and reliable online solutions, ensuring growth and success in the digital era. We believe every business deserves a beautiful, functional, and easy-to-manage website.",
              },
              {
                title: "Our Vision",
                iconColor: "text-indigo-600",
                text: "To be the leading platform for small and medium businesses worldwide, fostering innovation and digital inclusion through cutting-edge technology and dedicated support.",
              },
              {
                title: "Our Team",
                iconColor: "text-purple-600",
                text: "Our diverse team of passionate professionals is dedicated to supporting your business journey with expertise in technology, design, marketing, and customer success.",
              },
              {
                title: "Contact Information",
                iconColor: "text-teal-600",
                text: (
                  <>
                    Have questions? Reach out to us anytime at{" "}
                    <a href="mailto:contact@sriyantratech.com" className="text-blue-600 underline decoration-indigo-400 decoration-2 underline-offset-4 hover:text-indigo-600 transition">
                      contact@sriyantratech.com
                    </a>{" "}
                    or call us at <strong>+1-234-567-890</strong>. We’d love to hear from you!
                  </>
                ),
              },
            ].map(({ title, iconColor, text }) => (
              <section key={title}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                  <Star size={28} className={`${iconColor} animate-pulse`} />
                  {title}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed tracking-wide">{text}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Home Button */}
      <button
        onClick={goToHome}
        aria-label="Go to Home"
        className="fixed bottom-6 right-6 bg-gradient-to-tr from-blue-600 to-indigo-700 text-white p-4 rounded-full shadow-lg hover:from-indigo-700 hover:to-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <Home size={28} />
      </button>
    </>
  );
}
