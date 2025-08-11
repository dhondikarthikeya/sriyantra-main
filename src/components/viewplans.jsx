// src/components/ViewPlans.jsx
import React from "react";
import Pricing from "./ui/pricing"; // ✅ Reuse existing pricing cards
import { Link } from "react-router-dom";

export default function ViewPlans() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Our Plans</h1>

        <Pricing /> {/* ✅ Reuse pricing cards */}

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
