import { useEffect, useState } from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import SolutionsSection from "./components/sections/SolutionsSection";
import ProcessSection from "./components/sections/ProcessSection";
import DifferentialsSection from "./components/sections/DifferentialsSection";
import FaqSection from "./components/sections/FaqSection";
import ContactSection from "./components/sections/ContactSection";
import FloatingWhatsApp from "./components/ui/FloatingWhats";
import ScrollGlow from "./components/ui/ScrollGlow";

import {
  highlights,
  featuredSolutions,
  solutions,
  processSteps,
  differentials,
  faqItems,
} from "./data/siteData";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-900 transition-colors duration-300 dark:bg-black dark:text-white selection:bg-pink-500/40 selection:text-white">
      <ScrollGlow />

      <Header theme={theme} setTheme={setTheme} />

      <main className="relative z-10">
        <HeroSection highlights={highlights} />
        <SolutionsSection featured={featuredSolutions} solutions={solutions} />
        <ProcessSection steps={processSteps} />
        <DifferentialsSection items={differentials} />
        <FaqSection items={faqItems} />
        <ContactSection />
      </main>

      <FloatingWhatsApp />

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
