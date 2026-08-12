import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, ExternalLink } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const links = [
  {
    Icon: Mail,
    label: "Email",
    value: "mouad.alwahidi@gmail.com",
    href: "mailto:mouad.alwahidi@gmail.com",
    desc: "Best for research and professional enquiries",
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: "mouad-wahidi-a35874257",
    href: "https://www.linkedin.com/in/mouad-wahidi-a35874257/",
    desc: "Professional network and career updates",
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    value: "100wahidi",
    href: "https://github.com/100wahidi",
    desc: "Open-source projects and code",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-mono text-blue-400 tracking-widest uppercase mb-4 block">
              08 / Contact
            </span>
            <h2
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Let's{" "}
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6 text-lg">
              I'm open to research collaborations, MSc/PhD programme enquiries,
              ML engineering roles, and interesting conversations about AI.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Whether you're a researcher, recruiter, or fellow engineer — I'd
              love to hear from you. I typically respond within 24 hours.
            </p>

            <div className="flex items-center gap-2 text-slate-600 text-sm font-mono">
              <MapPin size={13} />
              Morocco · Open to relocate globally
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + 0.1 * i }}
                whileHover={{ x: 4, transition: { duration: 0.15 } }}
                className="flex items-center gap-4 glass rounded-2xl border border-white/[0.07] p-5 hover:border-blue-500/20 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors text-blue-400">
                  <link.Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-600 font-mono uppercase tracking-widest mb-0.5">
                    {link.label}
                  </div>
                  <div className="text-white font-medium text-sm truncate">{link.value}</div>
                  <div className="text-slate-600 text-xs mt-0.5">{link.desc}</div>
                </div>
                <ArrowUpRight size={14} className="text-slate-700 group-hover:text-blue-400 transition-colors shrink-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/[0.06]">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-700 font-mono">
          <span>© 2026 Mouad Wahidi. Built with React, TypeScript & Framer Motion.</span>
          <span>mouad.alwahidi@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
