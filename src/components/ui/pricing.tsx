"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import { Check, Sparkles, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
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
  title?: string;
  description?: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter Plan",
    price: "5499",
    yearlyPrice: "5499",
    period: "One-Time",
    features: [
      "1 Page Static Website",
      "Mobile-Responsive Design",
      "Free Hosting for 1 Year",
      "Delivery in 3 Days",
      "Lifetime SSL Certificate",
      "Basic SEO Setup",
    ],
    description:
      "Best For: Individuals, freelancers, or small local businesses getting started online.",
    buttonText: "Get Started",
    href: "/#contact",
  },
  {
    name: "🚀 Business Plan",
    price: "10499",
    yearlyPrice: "10499",
    period: "One-Time",
    features: [
      "Up to 5 Pages (Home, About, Services, Contact, etc.)",
      "Custom UI/UX Design",
      "Social Media Integration",
      "SEO-Ready Pages (Basic)",
      "Admin Panel (to manage content)",
      "Google Business Profile Setup",
      "Analytics Integration (Google Analytics)",
      "Delivery in 5–7 Days",
      "Support for 1 Month",
    ],
    description:
      "Best For: Small & Medium Businesses needing a strong digital presence.",
    buttonText: "Start Now",
    href: "/#contact",
    isPopular: true,
  },
  {
    name: "🔥 Pro Plan",
    price: "20999",
    yearlyPrice: "20999",
    period: "Starting At",
    features: [
      "Unlimited Pages",
      "Blog, Portfolio, Testimonials Sections",
      "Payment Gateway Integration (Razorpay/Stripe)",
      "Full SEO Setup with Keywords",
      "Speed & Performance Optimized",
      "Ongoing Support (up to 3 Months)",
      "Google Analytics + Search Console Setup",
      "Backup & Maintenance Plan",
    ],
    description:
      "Best For: Businesses wanting dynamic features, automation & growth tools.",
    buttonText: "Get Custom Quote",
    href: "/#contact",
  },
];

export default function Pricing({
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
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
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 inline-block relative tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
          <span className="block w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-2"></span>
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-gray-500 mt-4 text-base whitespace-pre-line"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14 lg:gap-16 justify-center items-start">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: plan.isPopular ? -30 : 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={cn(
              "relative flex flex-col p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 bg-white/80 shadow-md hover:shadow-2xl hover:scale-[1.015]",
              // Remove bottom margin for Business Plan on mobile
              index === 1 ? "mb-0 sm:mb-0" : "mb-8 sm:mb-0",
              plan.isPopular
                ? "border-primary shadow-2xl scale-[1.05] z-10"
                : "border-border"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-black py-1 px-3 rounded-bl-xl rounded-tr-xl flex items-center shadow-lg">
                <Star className="text-white h-4 w-4 fill-current" />
                <span className="text-white ml-1 font-semibold text-sm">
                  Popular
                </span>
              </div>
            )}

            <div className="text-center mb-2">
              <p className="text-xl font-bold text-primary tracking-wide uppercase inline-flex items-center justify-center gap-2">
                {plan.name === "Starter Plan" && (
                  <Sparkles className="w-5 h-5 text-primary" />
                )}
                {plan.name}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-center gap-x-2">
              <span className="text-5xl font-extrabold tracking-tight text-foreground drop-shadow-md">
                <NumberFlow
                  value={Number(plan.price)}
                  format={{
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }}
                  formatter={(value) => `₹${value}`}
                  transformTiming={{ duration: 500, easing: "ease-out" }}
                  willChange
                  className="tabular-nums"
                />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                / {plan.period}
              </span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              {plan.period === "One-Time" ? "one-time payment" : "starting rate"}
            </p>

            <ul className="mt-6 gap-3 flex flex-col text-sm text-muted-foreground">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 group hover:text-foreground transition-colors"
                >
                  <div className="h-6 w-6 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-left leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={plan.href}
              style={{
                color: "rgb(37 99 235 / var(--tw-text-opacity, 1))",
                borderColor: "rgb(37 99 235 / var(--tw-text-opacity, 1))",
              }}
              className={cn(
                buttonVariants({
                  variant: plan.isPopular ? "default" : "outline",
                }),
                "w-full text-lg font-semibold py-3 mt-6 transition-all hover:scale-[1.03] shadow-md"
              )}
            >
              {plan.buttonText}
            </a>

            <p className="mt-6 text-xs leading-5 text-muted-foreground text-center italic">
              {plan.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
