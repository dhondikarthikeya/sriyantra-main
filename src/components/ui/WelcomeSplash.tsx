"use client";

import { useEffect, useState } from "react";

interface WelcomeSplashProps {
  onFinish: () => void;
  message?: string;
  duration?: number;
}

export default function WelcomeSplash({
  onFinish,
  message = "Welcome to Sri Yantra Tech!",
  duration = 2500,
}: WelcomeSplashProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 500); // fade duration
    }, duration);

    return () => clearTimeout(timer);
  }, [onFinish, duration]);

  return (
    <div
      className={`fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-800 text-white z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-5xl font-bold mb-6 animate-pulse">{message}</h1>
      <div className="loader border-t-4 border-white rounded-full w-16 h-16 animate-spin"></div>

      <style jsx>{`
        .loader {
          border-top-color: #fff;
        }
      `}</style>
    </div>
  );
}
