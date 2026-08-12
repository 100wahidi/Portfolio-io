import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import AIAssistant from "./components/AIAssistant";

export default function App() {
  return (
    <div className="noise min-h-screen bg-[#050a0f] text-white overflow-x-hidden">
      {/* SEO meta hints wired in index.html */}
      <Navbar />
      <main>
        <Hero />

        {/* Subtle section divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        </div>

        <About />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        </div>

        <Research />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        </div>

        <Projects />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        </div>

        <Experience />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        </div>

        <Skills />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        </div>


        <GitHub />

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        </div>

        <Contact />
      </main>

      <AIAssistant />
    </div>
  );
}
