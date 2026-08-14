import Button from './ui/Button';

export default function Hero() {
  return (
    <section id="home" className="grid items-center gap-8 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-2xl shadow-slate-950/30 sm:p-10 md:grid-cols-12">
      <div className="space-y-6 md:col-span-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/50 bg-emerald-950/60 px-3 py-1 text-xs font-medium text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for Quant & AI opportunities
        </div>

        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Mouad Wahidi</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            State Engineer in Modeling & Scientific Computing from EMI, focused on quantitative finance,
            machine learning, and AI-driven product engineering.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
            <div className="text-xs text-slate-400">Education</div>
            <div className="mt-1 text-sm font-semibold text-white">EMI</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
            <div className="text-xs text-slate-400">Focus</div>
            <div className="mt-1 text-sm font-semibold text-white">Quant & AI</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3">
            <div className="text-xs text-slate-400">Location</div>
            <div className="mt-1 text-sm font-semibold text-white">Morocco</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#projects">
            <Button>Explore Projects</Button>
          </a>
          <a href="mailto:mouad.alwahidi@gmail.com">
            <Button variant="secondary">Contact Me</Button>
          </a>
        </div>
      </div>

      <div className="flex justify-center md:col-span-4">
        <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-sky-500 via-indigo-500 to-slate-800 p-1 shadow-2xl shadow-sky-900/30">
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-900 text-5xl font-bold text-sky-400">
            MW
          </div>
        </div>
      </div>
    </section>
  );
}
