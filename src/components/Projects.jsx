import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Featured Projects</h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-sky-400">{project.category}</div>
            <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-300">{project.description}</p>

            <div className="mb-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                  {item}
                </span>
              ))}
            </div>

            <a href={project.link} className="text-sm font-medium text-sky-400 hover:text-sky-300">
              View project →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
