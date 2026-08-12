import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";

function Github({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

const repos = [
];

export default function GitHub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="github" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4 block">
            07 / Open Source
          </span>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-white"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              GitHub{" "}
              <span className="gradient-text">Repositories</span>
            </h2>
            <a
              href="https://github.com/100wahidi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              <Github size={16} />
              github.com/100wahidi
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-slate-500 text-sm mb-12"
        >
          Representative repositories — visit GitHub for the full catalog.
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/100wahidi/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="glass rounded-2xl border border-white/[0.07] p-5 hover:border-blue-500/20 transition-colors group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Github size={14} className="text-slate-500" />
                  <span className="text-blue-400 text-sm font-mono font-medium group-hover:text-blue-300 transition-colors">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink size={12} className="text-slate-700 group-hover:text-slate-400 transition-colors" />
              </div>

              <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4">
                {repo.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {repo.topics.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-600 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.langColor }}
                  />
                  {repo.lang}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={11} />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={11} />
                  {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
