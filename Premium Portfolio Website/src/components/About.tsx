import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, TrendingUp, Layers } from "lucide-react";

const interests = [
  { icon: Brain, label: "Generative AI", desc: "Foundation models, diffusion, transformers" },
  { icon: Layers, label: "Representation Learning", desc: "Self-supervised, contrastive, embeddings" },
  { icon: Cpu, label: "Scientific ML", desc: "PINNs, neural operators, physics-constrained" },
  { icon: TrendingUp, label: "AI for Finance", desc: "Quantitative research, risk modeling" },
];

const stats = [
  { value: "3+", label: "Research Projects" },
  { value: "3", label: "Industry Internships" },
  { value: "MSc", label: "Target Degree" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4 block">
            01 / About
          </span>
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Building intelligence at the{" "}
            <span className="gradient-text">frontier</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm an Applied Mathematics and AI Engineer with deep foundations
              in Machine Learning, Deep Learning, Optimization, Statistics, and
              Scientific Computing.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My work lives at the intersection of rigorous mathematical theory
              and practical AI systems — from Physics-Informed Neural Networks
              that solve PDEs to production RAG platforms and anomaly detection
              pipelines at scale.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I'm driven by the goal of making machine learning not just
              powerful, but theoretically grounded and scientifically principled.
              Whether it's understanding optimization dynamics or building
              reliable ML systems for financial markets, I approach every
              problem with mathematical rigor and engineering discipline.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text-blue font-display"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: interest cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {interests.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-5 cursor-default group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <item.icon size={20} className="text-blue-400" />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
