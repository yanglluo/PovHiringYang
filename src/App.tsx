import Hero from "./components/Hero";
import WhyMeSection from "./components/WhyMeSection";
import ProjectsSection from "./components/ProjectsSection";
import HowIThinkSection from "./components/HowIThinkSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <main className="bg-[#050505] min-h-screen antialiased">
      <Hero />
      <WhyMeSection />
      <ProjectsSection />
      <HowIThinkSection />
      <FooterSection />
    </main>
  );
}

export default App;
