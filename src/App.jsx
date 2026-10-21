import { MotionConfig } from "framer-motion";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import MarqueeStrip from "./components/sections/MarqueeStrip";
import SolutionsSection from "./components/sections/SolutionsSection";
import AgentShowcaseSection from "./components/sections/AgentShowcaseSection";
import HubFlowSection from "./components/sections/HubFlowSection";
import ProcessSection from "./components/sections/ProcessSection";
import DifferentialsSection from "./components/sections/DifferentialsSection";
import FaqSection from "./components/sections/FaqSection";
import ContactSection from "./components/sections/ContactSection";
import FloatingWhatsApp from "./components/ui/FloatingWhats";
import ScrollGlow from "./components/ui/ScrollGlow";
import ScrollProgress from "./components/ui/ScrollProgress";

import {
  highlights,
  marqueeItems,
  solutions,
  agentDemo,
  hubFlow,
  processSteps,
  differentials,
  faqItems,
  interestOptions,
} from "./data/siteData";

// O site usa só o tema escuro (identidade da BloomHub): a classe `dark`
// fica fixa no <html> do index.html.
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-hidden bg-ink text-white selection:bg-purple-500/40 selection:text-white">
        <ScrollProgress />
        <ScrollGlow />

        <Header />

        <main className="relative z-10">
          <HeroSection highlights={highlights} />
          <MarqueeStrip items={marqueeItems} />
          <SolutionsSection solutions={solutions} />
          <AgentShowcaseSection demo={agentDemo} />
          <HubFlowSection steps={hubFlow} />
          <ProcessSection steps={processSteps} />
          <DifferentialsSection items={differentials} />
          <FaqSection items={faqItems} />
          <ContactSection interestOptions={interestOptions} />
        </main>

        <FloatingWhatsApp />

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
