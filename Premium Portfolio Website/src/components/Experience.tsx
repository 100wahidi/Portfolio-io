import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Société Générale ATS",
    role: "Software & Data Engineering Intern",
    period: "2024",
    type: "Banking & Capital Markets",
    bullets: [
      "Built scalable Python and SQL validation pipelines for financial data quality assurance",
      "Optimized analytical systems and database workloads, significantly reducing query latency",
      "Worked on CI/CD pipelines, maintainable architectures, and production-ready engineering",
      "Contributed to cross-functional teams on data governance and reporting infrastructure",
    ],
    color: "border-red-500/30",
    dot: "bg-red-400",
    badge: "bg-red-500/10 text-red-300",
  },
  {
    company: "Attijariwafa Bank",
    role: "Quantitative Research Intern",
    period: "2023",
    type: "Investment Banking",
    bullets: [
      "Developed interest-rate forecasting models using ARIMA and machine learning approaches",
      "Built fixed-income pricing models, risk analytics tools, and backtesting frameworks",
      "Created Streamlit dashboards connected to live market data for real-time risk monitoring",
      "Researched and implemented quantitative strategies in the fixed-income space",
    ],
    color: "border-amber-500/30",
    dot: "bg-amber-400",
    badge: "bg-amber-500/10 text-amber-300",
  },
  {
    company: "OCP Group",
    role: "Optimization & Data Science Intern",
    period: "2023",
    type: "Industrial / Operations Research",
    bullets: [
      "Modelled and solved the Vehicle Routing Problem (VRP) using combinatorial optimization",
      "Implemented multi-objective optimization algorithms for logistics planning",
      "Conducted quantitative simulation studies and sensitivity analysis",
      "Delivered data-driven recommendations backed by rigorous mathematical modelling",
    ],
    color: "border-green-500/30",
    dot: "bg-green-400",
    badge: "bg-green-500/10 text-green-300",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4 block">
            04 / Experience
          </span>
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-white"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Professional{" "}
            <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 top-8 w-4 h-4 rounded-full ${exp.dot} hidden md:block ring-4 ring-black shadow-lg`} />

                <div className={`glass rounded-2xl border ${exp.color} p-7 group hover:-translate-y-1 transition-transform duration-200`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <Building2 size={14} className="text-slate-500" />
                        <span className="text-white font-semibold font-display text-lg"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {exp.company}
                        </span>
                      </div>
                      <div className="text-slate-400 text-sm font-medium pl-5">{exp.role}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${exp.badge}`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-slate-600 text-xs font-mono">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-blue-400/60 mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
