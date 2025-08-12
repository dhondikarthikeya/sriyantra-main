"use client";

import React, { Suspense, useRef } from "react";
import FloatingNavbar from "@/components/ui/FloatingNavbar";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

/* ---------- Earth Component ---------- */
function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);

  const [colorMap, bumpMap, specMap] = useLoader(THREE.TextureLoader, [
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
    "https://threejs.org/examples/textures/planets/earth_normal_2048.jpg",
    "https://threejs.org/examples/textures/planets/earth_specular_2048.jpg",
  ]);

  // Determine scale based on screen width
  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth < 1024; // mobile & tablet
  const earthScale = isSmallScreen ? 1.4 : 1.6; // slightly smaller on small screens

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <mesh ref={earthRef} scale={earthScale}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.05}
        specularMap={specMap}
        specular={new THREE.Color("#ffffff")}
        shininess={30}
      />
    </mesh>
  );
}

/* ---------- Atmosphere Glow ---------- */
function Atmosphere() {
  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth < 1024;
  const atmosphereScale = isSmallScreen ? 1.5 : 1.7; // match smaller Earth size

  return (
    <mesh scale={atmosphereScale}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial
        color={new THREE.Color(0x66ccff)}
        side={THREE.BackSide}
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

/* ---------- Centered Star Field ---------- */
function CenteredStarField() {
  return (
    <Sparkles
      count={800}
      scale={[10, 6, 10]} // Focused area
      size={2}
      speed={0.3}
      noise={1}
      color="#FFD700"
      opacity={0.95}
    />
  );
}

/* ---------- 3D Scene ---------- */
function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={1.0} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-4, -3, -4]} intensity={0.6} color="#88ccff" />

      <Suspense fallback={null}>
        <Earth />
        <Atmosphere />
        <CenteredStarField />
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} enabled={false} />
    </Canvas>
  );
}

/* ---------- Fallback for mobile ---------- */
function FallbackHero() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-72 h-72 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
        🌍
      </div>
    </div>
  );
}

/* ---------- Letter-by-letter animation variants ---------- */
const letterContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.06 * i },
  }),
};

const letterVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.4 },
  },
};

/* ---------- Animated Title with responsive text ---------- */
function AnimatedTitle({ text }: { text: string }) {
  return (
    <motion.h1
      variants={letterContainer}
      initial="hidden"
      animate="visible"
      className="
        relative z-10 mt-6 font-semibold tracking-normal text-white font-poppins flex flex-wrap justify-center gap-1
        text-3xl sm:text-4xl md:text-5xl lg:text-7xl
      "
      style={{ letterSpacing: "-0.02em" }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariant}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

/* ---------- Main Component ---------- */
export default function HeroMerged({
  splashActive,
  fadeOut,
}: {
  splashActive?: boolean;
  fadeOut?: boolean;
}) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-black text-white font-poppins"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {splashActive && (
        <div
          className={`fixed inset-0 flex flex-col justify-center items-center z-50 transition-all duration-1000 ease-out ${
            fadeOut
              ? "opacity-0 pointer-events-none scale-95"
              : "opacity-100 scale-100"
          } transform-gpu`}
          style={{ backdropFilter: "blur(12px)" }}
        >
          <div className="absolute inset-0 bg-black/85" />
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(90deg, rgba(255,255,255,0.02), transparent 30%)",
              mixBlendMode: "screen",
            }}
          />

          <div
            className="relative w-full max-w-5xl h-[520px] md:h-[640px] select-none
                       px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
            style={{ pointerEvents: "none" }}
          >
            {!prefersReducedMotion ? (
              <div className="absolute inset-0">
                <HeroCanvas />
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <FallbackHero />
              </div>
            )}
          </div>

          {/* ---------- Animated Title ---------- */}
          <AnimatedTitle text="Sri Yantra Tech" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="
              relative z-10 mt-4 max-w-2xl text-center text-gray-300 tracking-wide
              text-sm sm:text-base md:text-lg lg:text-xl px-4
            "
          >
            Elegant code. Thoughtful design. Growth that lasts.
          </motion.p>
        </div>
      )}

      {!splashActive && (
        <>
          <FloatingNavbar />
          <HeroGeometric
            badge="Sri Yantra Tech"
            title1="Affordable Websites"
            title2="For Small Businesses @₹4999"
          />
        </>
      )}
    </div>
  );
}
