import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

function Github({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

const projects = [
  {
    number: "01",
    title: "Deep Learning-Based Anomaly Detection in Banking Data",
    desc: "Developed Autoencoder-based anomaly detection systems using PyTorch. Applied feature engineering, dimensionality reduction, benchmarking of multiple architectures, K-Fold Cross Validation, and ROC-AUC evaluation to detect fraudulent transactions in high-dimensional financial data.",
    tags: ["Python", "PyTorch", "Scikit-Learn", "Autoencoders", "Financial ML"],
    accent: "blue",
    highlight: "Anomaly Detection · Autoencoders · Financial ML",
  },
  {
    number: "02",
    title: "Physics-Informed Neural Networks (PINNs) for Option Pricing",
    desc: "Developed PINNs for solving the Black-Scholes PDE with neural networks as surrogate solvers. Studied approximation quality, optimization dynamics, convergence behaviour, and neural network generalization in a scientific computing context.",
    tags: ["Python", "PyTorch", "PINNs", "PDEs", "Scientific Computing"],
    accent: "violet",
    highlight: "Scientific ML · Black-Scholes · Neural PDEs",
  },
  {
    number: "03",
    title: "Get_CV — RAG-Based Intelligent Resume Generation Platform",
    desc: "Built a full-stack Retrieval-Augmented Generation platform using FastAPI, React, PostgreSQL, pgvector and Large Language Models. The system intelligently generates tailored CVs using semantic search over candidate profiles and job descriptions.",
    tags: ["FastAPI", "React", "PostgreSQL", "pgvector", "Docker", "LLMs", "RAG"],
    accent: "cyan",
    highlight: "Full-Stack · LLMs · Vector Search",
  },
];

const accentMap = {
  blue: { border: "border-blue-500/25", glow: "rgba(59,130,246,0.08)", tag: "bg-blue-500/10 text-blue-300 border-blue-500/20", num: "text-blue-400" },
  violet: { border: "border-violet-500/25", glow: "rgba(139,92,246,0.08)", tag: "bg-violet-500/10 text-violet-300 border-violet-500/20", num: "text-violet-400" },
  cyan: { border: "border-cyan-500/25", glow: "rgba(6,182,212,0.08)", tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20", num: "text-cyan-400" },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4 block">
            03 / Featured Projects
          </span>
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-white"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Selected{" "}
            <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, i) => {
            const acc = accentMap[p.accent as keyof typeof accentMap];
            return (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl border ${acc.border} glass overflow-hidden cursor-default`}
                style={{ boxShadow: `inset 0 0 60px ${acc.glow}` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse 60% 60% at 50% 0%, ${acc.glow} 0%, transparent 100%)` }} />

                <div className="relative p-8 md:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`font-mono text-xs font-medium ${acc.num}`}>{p.number}</span>
                        <span className="text-xs text-slate-600 font-mono">{p.highlight}</span>
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-display font-bold text-white mb-4 leading-snug"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-3xl mb-6">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className={`px-3 py-1 rounded-lg text-xs font-medium border ${acc.tag}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col items-end gap-3 shrink-0">
                      <a
                        href="https://github.com/100wahidi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                      </a>
                      <div className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-slate-400 hover:text-white transition-colors group-hover:text-white">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
