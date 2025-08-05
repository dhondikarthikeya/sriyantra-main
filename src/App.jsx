import HeroMerged from "./components/HeroMerged";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/ui/pricing"; // ✅ default import
import { AnimatedTestimonials } from "./components/Testimonials"; // ✅ use relative import to avoid alias issue
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const plans = [
  {
    name: "Starter",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support",
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "Professional",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "299",
    yearlyPrice: "239",
    period: "per month",
    features: [
      "Everything in Professional",
      "Custom solutions",
      "Dedicated account manager",
      "1-hour support response time",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80",
  },
  {
    quote: "This solution significantly improved our team's productivity.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80",
  },
];

function App() {
  return (
    <>
      <header></header>

      <main>
        <section id="home">
          <HeroMerged />
        </section>
        <section id="projects">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        
        <section id="resume">
          <Portfolio />
        </section>
        <section id="pricing" className="container mx-auto px-4 py-20">
          <Pricing plans={plans} />
        </section>
        <section id="testimonials">
          <AnimatedTestimonials testimonials={testimonials} autoplay />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
