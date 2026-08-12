import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles, Network, FlaskConical, Eye, Atom, BarChart3, Server, LineChart,
} from "lucide-react";

const areas = [
  {
    icon: Sparkles,
    title: "Generative AI",
    desc: "Diffusion models, VAEs, GANs, and large-scale generative architectures for complex data distributions.",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20",
    accent: "text-violet-400",
  },
  {
    icon: Network,
    title: "Foundation Models",
    desc: "Pre-training, fine-tuning, and alignment of large transformer architectures across modalities.",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
    accent: "text-blue-400",
  },
  {
    icon: FlaskConical,
    title: "Deep Learning Theory",
    desc: "Optimization dynamics, loss landscape geometry, generalization bounds, and expressivity.",
    color: "from-sky-500/20 to-blue-500/10",
    border: "border-sky-500/20",
    accent: "text-sky-400",
  },
  {
    icon: Eye,
    title: "Representation Learning",
    desc: "Self-supervised learning, contrastive objectives, disentanglement, and learned embeddings.",
    color: "from-teal-500/20 to-green-500/10",
    border: "border-teal-500/20",
    accent: "text-teal-400",
  },
  {
    icon: Atom,
    title: "Scientific Machine Learning",
    desc: "Physics-Informed Neural Networks, neural operators, and data-driven discovery of physical laws.",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/20",
    accent: "text-orange-400",
  },
  {
    icon: BarChart3,
    title: "Statistical Learning",
    desc: "PAC learning, Bayesian inference, non-parametric methods, and probabilistic graphical models.",
    color: "from-rose-500/20 to-pink-500/10",
    border: "border-rose-500/20",
    accent: "text-rose-400",
  },
  {
    icon: Server,
    title: "ML Systems",
    desc: "Scalable training pipelines, distributed learning, model serving, and MLOps infrastructure.",
    color: "from-indigo-500/20 to-blue-500/10",
    border: "border-indigo-500/20",
    accent: "text-indigo-400",
  },
  {
    icon: LineChart,
    title: "AI for Quantitative Finance",
    desc: "Time-series forecasting, risk modeling, option pricing, and algorithmic strategy development.",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
  },
];

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4 block">
            02 / Research Interests
          </span>
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-white"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Areas of{" "}
            <span className="gradient-text">Investigation</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Spanning theory, systems, and applications at the frontier of
            machine learning and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-5 border ${a.border} bg-gradient-to-br ${a.color} cursor-default group overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.04), transparent 70%)" }} />
              <div className={`w-9 h-9 rounded-lg bg-black/30 flex items-center justify-center mb-4`}>
                <a.icon size={18} className={a.accent} />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{a.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
