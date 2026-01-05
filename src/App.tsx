import Hero from "./components/Hero";
import POVSection from "./components/POVSection";
import ThinkingSection from "./components/ThinkingSection";
import TechDemo from "./components/TechDemo";
import CaseStudiesLite from "./components/CaseStudiesLite";
import SignalSection from "./components/SignalSection";
import CTASection from "./components/CTASection";

function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-white antialiased">
      <Hero />
      <POVSection />
      <ThinkingSection />
      <TechDemo />
      <CaseStudiesLite />
      <SignalSection />
      <CTASection />
    </main>
  );
}

export default App;
