export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 font-bold text-white">
            MW
          </div>
          <div>
            <div className="text-lg font-bold text-white">Mouad Wahidi</div>
            <div className="text-xs text-sky-400">Quant & AI Engineer</div>
          </div>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          <a href="#home" className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">Home</a>
          <a href="#experience" className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">Experience</a>
          <a href="#projects" className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">Projects</a>
          <a href="#contact" className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}
