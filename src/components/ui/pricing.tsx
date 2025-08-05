"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import { Check, Star } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

export interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular?: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export default function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const switchRef = useRef<HTMLButtonElement>(null);

  

const handleToggle = (checked: boolean) => {
  // checked = true => Annual
  setIsMonthly(!checked);

  if (checked && switchRef.current) {
    const rect = switchRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x: x / window.innerWidth, y: y / window.innerHeight },
      colors: [
        "hsl(var(--primary))",
        "hsl(var(--accent))",
        "hsl(var(--secondary))",
        "hsl(var(--muted))",
      ],
      ticks: 200,
      gravity: 1.2,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["circle"],
    });
  }
};


  return (
    <div className="container py-20">
    {/* Section Header */}
<div className="text-center mb-12">
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 inline-block relative">
    {title}
    <span className="block w-16 h-1 bg-blue-500 rounded-full mx-auto mt-2"></span>
  </h2>
  <p className="max-w-2xl mx-auto text-gray-500 mt-4 whitespace-pre-line">
    {description}
  </p>
</div>


      {/* Billing Toggle */}
    <div className="flex justify-center mb-10 items-center space-x-3">
  <Switch
    ref={switchRef as any}
    checked={!isMonthly}  // ON = Annual
    onCheckedChange={(checked) => handleToggle(checked)}
  />
  <span className="font-semibold">
    Annual billing <span className="text-primary">(Save 20%)</span>
  </span>
</div>



      {/* Pricing Cards */}
 

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
         <motion.div
  key={index}
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: index * 0.2 }}
  className={cn(
    "relative flex flex-col p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300",
    "bg-gradient-to-br from-background/90 to-background/70 hover:from-background hover:to-background",
    plan.isPopular
      ? "border-primary shadow-[0_0_30px_rgba(37,99,235,0.2)] scale-[1.02]"
      : "border-border hover:shadow-lg hover:scale-[1.01]"
  )}
>
  {/* Popular Badge */}
  {plan.isPopular && (
    <div className="absolute top-0 right-0 bg-primary py-1 px-3 rounded-bl-xl rounded-tr-xl flex items-center animate-pulse shadow-md">
      <Star className="text-primary-foreground h-4 w-4 fill-current" />
      <span className="text-primary-foreground ml-1 font-semibold text-sm">Popular</span>
    </div>
  )}

  {/* Plan Title */}
  <p className="text-lg font-semibold text-primary">{plan.name}</p>

  {/* Price */}
  <div className="mt-6 flex items-center justify-center gap-x-2">
    <span className="text-5xl font-extrabold tracking-tight text-foreground">
      <NumberFlow
        value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
        format={{
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }}
        formatter={(value) => `$${value}`}
        transformTiming={{ duration: 500, easing: "ease-out" }}
        willChange
        className="tabular-nums drop-shadow-sm"
      />
    </span>
    <span className="text-sm font-semibold text-muted-foreground">/ {plan.period}</span>
  </div>
  <p className="text-xs leading-5 text-muted-foreground">
    {isMonthly ? "billed monthly" : "billed annually"}
  </p>

  {/* Features */}
  <ul className="mt-6 gap-3 flex flex-col text-sm text-muted-foreground">
    {plan.features.map((feature, idx) => (
      <li
        key={idx}
        className="flex items-center gap-3 group hover:text-foreground transition-colors"
      >
        <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
          <Check className="h-4 w-4 text-primary" />
        </div>
        <span className="text-left">{feature}</span>
      </li>
    ))}
  </ul>

  {/* Button */}
  <a
    href={plan.href}
    className={cn(
      buttonVariants({ variant: plan.isPopular ? "default" : "outline" }),
      "w-full text-lg font-semibold py-3 mt-6 transition-all hover:scale-[1.02] shadow-sm"
    )}
  >
    {plan.buttonText}
  </a>

  {/* Description */}
  <p className="mt-6 text-xs leading-5 text-muted-foreground">{plan.description}</p>
</motion.div>

        ))}
      </div>
    </div>
  );
}
