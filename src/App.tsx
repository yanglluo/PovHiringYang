import { useState } from "react";
import Hero from "./components/Hero";
import WhyMeSection from "./components/WhyMeSection";
import ProjectsSection from "./components/ProjectsSection";
import HowIThinkSection from "./components/HowIThinkSection";
import FooterSection from "./components/FooterSection";
import ResumeModal from "./components/ResumeModal";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="bg-[#050505] min-h-screen antialiased">
      <Hero onResumeClick={() => setIsResumeOpen(true)} />
      <WhyMeSection />
      <ProjectsSection />
      <HowIThinkSection />
      <FooterSection onResumeClick={() => setIsResumeOpen(true)} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
}

export default App;
