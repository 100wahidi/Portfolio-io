import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Code2, Package, Calculator, Cloud } from "lucide-react";

const skillGroups = [
  {
    icon: Brain,
    category: "Machine Learning",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    skills: [
      "Deep Learning", "Representation Learning", "Autoencoders",
      "Physics-Informed NNs", "Generative AI", "LLMs", "RAG", "Transformers",
    ],
  },
  {
    icon: Code2,
    category: "Programming",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    skills: ["Python", "TypeScript", "SQL", "JavaScript", "C++", "R", "Bash"],
  },
  {
    icon: Package,
    category: "Frameworks",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    skills: ["PyTorch", "Scikit-Learn", "FastAPI", "React", "LangChain", "Streamlit", "NumPy", "Pandas"],
  },
  {
    icon: Calculator,
    category: "Mathematics",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    skills: [
      "Optimization Theory", "Probability & Statistics", "Numerical Analysis",
      "Stochastic Processes", "Linear Algebra", "Measure Theory",
    ],
  },
  {
    icon: Cloud,
    category: "Infrastructure",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    skills: ["Docker", "PostgreSQL", "pgvector", "GitHub Actions", "CI/CD", "Linux", "REST APIs"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4 block">
            05 / Skills
          </span>
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-white"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Technical{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              className={`glass rounded-2xl border ${group.border} p-6 hover:-translate-y-1 transition-transform duration-200 ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl ${group.bg} flex items-center justify-center`}>
                  <group.icon size={18} className={group.color} />
                </div>
                <span className="text-white font-semibold text-sm">{group.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${group.border} ${group.bg} ${group.color} hover:brightness-125 transition-all cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
