import React, { useState, useRef, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function GetQuote() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // success or error message
  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState("auto");

  const GETFORM_ENDPOINT = "https://getform.io/f/brogoola"; // ← Replace this with your Getform endpoint URL

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("message", formData.message);

      const response = await fetch(GETFORM_ENDPOINT, {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        setStatus("Thank you! Your request has been submitted.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again.");
    }
  };

  // Dynamically measure and set form height to sync with animation height
  useEffect(() => {
    const updateHeight = () => {
      if (formRef.current) {
        setFormHeight(formRef.current.offsetHeight + "px");
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
          Get a Free Quote
          <span className="block w-16 h-1 bg-blue-500 rounded-full mx-auto mt-2"></span>
        </h2>
        <p className="max-w-xl mx-auto text-gray-500 mt-4">
          Fill out the form below and our team will respond within 24 hours.
        </p>
      </div>

      {/* Lottie + Form Layout */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-12 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Lottie Animation - Matches Form Height */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <DotLottieReact
            src="https://lottie.host/9c37a762-78de-4c71-9b38-4aa274aa9ce2/e7Bp3zJKeT.lottie"
            loop
            autoplay
            style={{
              width: "100%",
              height: formHeight,
              objectFit: "contain",
            }}
          />
        </div>

        {/* Form Box */}
        <div
          ref={formRef}
          className="w-full md:w-1/2 bg-white shadow-lg border border-blue-100 rounded-2xl p-8 space-y-4 flex flex-col justify-center"
        >
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-transform duration-200 hover:scale-[1.02]"
            >
              Submit Request
            </button>
          </form>
          {/* Submission status message */}
          {status && (
            <p
              className={`mt-4 text-center font-medium ${
                status.startsWith("Thank")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
