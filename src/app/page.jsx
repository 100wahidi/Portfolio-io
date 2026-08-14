import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.16),rgba(15,23,42,0))]" />

      <Header />

      <main className="relative z-10 mx-auto max-w-6xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
