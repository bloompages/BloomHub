import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ResultsSection from "./components/sections/ResultsSection";
import ContactSection from "./components/sections/ContactSection";
import {
  highlights,
  services,
  aboutItems,
  resultItems,
} from "./data/siteData";
import FloatingWhatsApp from "./components/ui/FloatingWhats";

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
    <div className="min-h-screen bg-white text-zinc-900 transition-colors duration-300 dark:bg-black dark:text-white selection:bg-pink-500/40 selection:text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Header theme={theme} setTheme={setTheme} />

      <main>
        <HeroSection highlights={highlights} />
        <AboutSection items={aboutItems} />
        <ServicesSection services={services} />
        <ResultsSection items={resultItems} />
        <ContactSection />
      </main>
    <FloatingWhatsApp />
      <Footer />
    </div>
  );
}