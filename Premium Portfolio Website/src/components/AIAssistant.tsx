import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, User } from "lucide-react";

type Message = { role: "user" | "assistant"; text: string };

const knowledgeBase: Record<string, string> = {
  experience: `Mouad has 3 professional internships:
• Société Générale ATS (Software & Data Engineering): Built Python/SQL validation pipelines, optimized analytical systems, worked on CI/CD and production architectures.
• Attijariwafa Bank (Quantitative Research): Interest-rate forecasting with ARIMA and ML, fixed-income pricing, risk analytics, Streamlit dashboards.
• OCP Group (Optimization & Data Science): Vehicle Routing Problem modelling, multi-objective optimization, quantitative simulation studies.`,

  projects: `Mouad's key projects:
1. Deep Learning Anomaly Detection in Banking — Autoencoder-based system using PyTorch, K-Fold CV, ROC-AUC evaluation.
2. PINNs for Option Pricing — Physics-Informed Neural Networks for the Black-Scholes PDE, studying convergence and optimization dynamics.
3. Get_CV RAG Platform — Full-stack Retrieval-Augmented Generation system with FastAPI, React, PostgreSQL, pgvector and LLMs.`,

  skills: `Mouad's technical skills:
• ML/AI: Deep Learning, Autoencoders, PINNs, Generative AI, LLMs, RAG, Representation Learning
• Programming: Python (expert), TypeScript, SQL, JavaScript, C++
• Frameworks: PyTorch, Scikit-Learn, FastAPI, React, LangChain, Streamlit
• Mathematics: Optimization, Probability & Statistics, Numerical Analysis, Stochastic Processes
• Infrastructure: Docker, PostgreSQL, pgvector, GitHub Actions, CI/CD, Linux`,

  research: `Mouad's research interests span:
• Generative AI & Foundation Models
• Deep Learning Theory (optimization dynamics, generalization)
• Representation Learning & Self-supervised Learning
• Scientific Machine Learning (PINNs, neural operators)
• Statistical Learning Theory
• ML Systems & scalable training
• AI for Quantitative Finance`,

  education: `Mouad is an Applied Mathematics and AI Engineer with strong foundations in Machine Learning, Deep Learning, Optimization, Statistics, and Scientific Computing. He is targeting MSc/PhD programmes in Machine Learning and AI research at leading institutions.`,

  contact: `You can reach Mouad at:
• Email: mouad.alwahidi@gmail.com
• LinkedIn: linkedin.com/in/mouad-wahidi-a35874257
• GitHub: github.com/100wahidi`,
};

function generateResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.match(/experience|work|intern|job|career|societe|attijariwafa|ocp/))
    return knowledgeBase.experience;
  if (lower.match(/project|build|creat|develop|anomaly|pinn|option|rag|cv|get_cv/))
    return knowledgeBase.projects;
  if (lower.match(/skill|technolog|language|python|pytorch|framework|tool/))
    return knowledgeBase.skills;
  if (lower.match(/research|interest|generative|foundation|scientific|representation/))
    return knowledgeBase.research;
  if (lower.match(/education|study|degree|msc|phd|university|math/))
    return knowledgeBase.education;
  if (lower.match(/contact|email|linkedin|github|reach|hire/))
    return knowledgeBase.contact;
  if (lower.match(/who|about|mouad|yourself|tell me/))
    return `Mouad Wahidi is a Machine Learning Research Engineer and Applied Mathematics graduate. He specializes in Deep Learning, Scientific ML, and AI Systems. With experience at Société Générale, Attijariwafa Bank, and OCP Group, he bridges rigorous mathematical theory with production engineering. He's passionate about Generative AI, Foundation Models, and Physics-Informed Neural Networks.`;
  if (lower.match(/hello|hi|hey|greet/))
    return `Hello! I'm Mouad's AI assistant. I can answer questions about his experience, research interests, projects, skills, or how to get in touch. What would you like to know?`;

  return `I can answer questions about Mouad's professional experience, research interests, projects, technical skills, education, or contact information. Try asking something like "What projects has he worked on?" or "What are his ML skills?"`;
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hello! I'm Mouad's AI assistant. Ask me anything about his research, experience, skills, or projects.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const next: Message[] = [...messages, { role: "user", text }];
    setMessages(next);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages([...next, { role: "assistant", text: generateResponse(text) }]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-xl shadow-blue-500/25 hover:scale-105 transition-transform"
        aria-label="Open AI Assistant"
      >
        <Sparkles size={22} className="text-white" />
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl overflow-hidden glass border border-blue-500/20 shadow-2xl shadow-black/60 flex flex-col"
            style={{ maxHeight: "520px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07] bg-gradient-to-r from-blue-600/10 to-violet-600/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                  <Bot size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Ask Mouad AI</div>
                  <div className="text-xs text-blue-300/60 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online · Powered by knowledge base
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-lg glass-light flex items-center justify-center text-slate-500 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      msg.role === "assistant"
                        ? "bg-gradient-to-br from-blue-500 to-violet-600"
                        : "bg-slate-700"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot size={13} className="text-white" />
                    ) : (
                      <User size={13} className="text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                      msg.role === "assistant"
                        ? "bg-white/[0.05] text-slate-300 rounded-tl-sm"
                        : "bg-blue-500/80 text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                    <Bot size={13} className="text-white" />
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm bg-white/[0.05] flex gap-1 items-center">
                    {[0, 1, 2].map((j) => (
                      <motion.span
                        key={j}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: j * 0.15 }}
                        className="w-1.5 h-1.5 rounded-full bg-blue-400"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/[0.07]">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                  placeholder="Ask about research, skills, projects..."
                  className="flex-1 bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none focus:border-blue-500/50 transition-colors"
                />
                <button
                  onClick={send}
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-xl bg-blue-500 hover:bg-blue-400 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all"
                >
                  <Send size={14} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
