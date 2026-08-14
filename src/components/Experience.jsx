import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Professional Experience</h2>

      <div className="space-y-6">
        {experience.map((item) => (
          <article key={item.role} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <p className="text-sky-400">{item.company}</p>
              </div>
              <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300">
                {item.period}
              </span>
            </div>
            <p className="text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
