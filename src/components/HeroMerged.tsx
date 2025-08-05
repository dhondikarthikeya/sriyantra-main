"use client";

import FloatingNavbar from "@/components/ui/FloatingNavbar";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function HeroMerged() {
  return (
    <div className="relative">
      <FloatingNavbar />
      <HeroGeometric
        badge="BlueFlights"
        title1="Affordable Websites"
        title2="For Small Businesses"
      />
    </div>
  );
}
