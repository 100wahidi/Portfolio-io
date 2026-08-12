import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-white/[0.06] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#hero"
            className="font-display font-semibold text-white tracking-tight text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="gradient-text-blue">MW</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => handleNav(l.href)}
                className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                  active === l.href
                    ? "text-white bg-white/[0.08]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="mailto:mouad.alwahidi@gmail.com"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-200"
          >
            Get in Touch
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-400 hover:text-white p-2 rounded-lg transition"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 glass rounded-2xl p-4 flex flex-col gap-1 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => handleNav(l.href)}
                className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
