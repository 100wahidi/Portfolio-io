import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabaseClient'; // Ensure path matches your setup
import { 
  ExternalLink, 
  Mail, 
  Menu, 
  X, 
  CheckCircle2, 
  ChevronRight, 
  TrendingUp, 
  Database, 
  Layers, 
  Cpu, 
  ZoomIn, 
  Sparkles,
  Code2,
  Binary
} from 'lucide-react';

/* QRT Isometric Cube Brand Logo */
const QrtCubeLogo = () => (
  <svg className="w-8 h-8 text-sky-400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" stroke="currentColor" strokeWidth="3" fill="rgba(56, 189, 248, 0.1)" />
    <path d="M50 10 L50 50 L85 70" stroke="currentColor" strokeWidth="2" />
    <path d="M50 50 L15 70" stroke="currentColor" strokeWidth="2" />
    <path d="M50 50 L50 90" stroke="currentColor" strokeWidth="2" />
    <path d="M32.5 20 L67.5 40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    <path d="M67.5 20 L32.5 40" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
  </svg>
);

/* Inline SVGs for External Links */
const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

/* Sub-Component: Toast for Latest Project */
function FetchLastProject({ onOpenTab }) {
  const [lastProject, setLastProject] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function fetchLatestProject() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('id, title, content')
          .order('created_at', { ascending: true })
          .limit(1)
          .single();

        if (error) throw error;

        if (data) {
          setLastProject(data);
          setTimeout(() => setVisible(true), 600);
        }
      } catch (err) {
        console.error("Error fetching latest project notification:", err.message);
      }
    }

    fetchLatestProject();
  }, []);

  if (!lastProject || !visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full sm:w-96 bg-[#0d162a]/95 border border-sky-500/40 rounded-xl p-4 shadow-2xl backdrop-blur-xl animate-fadeIn">
      <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
        <div className="flex items-center space-x-2 text-sky-400 font-mono text-[11px] uppercase tracking-widest font-bold">
          <Sparkles className="w-4 h-4 animate-pulse text-sky-400" />
          <span>Featured Research</span>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/10 transition"
          title="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
          {lastProject.title}
        </h4>

        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-sans">
          {lastProject.content}
        </p>

        <div className="pt-2 flex justify-end">
          <button
            onClick={() => {
              if (onOpenTab) onOpenTab('projects');
              setVisible(false);
            }}
            className="px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-[#060a14] font-bold text-[11px] font-mono uppercase tracking-wider rounded transition flex items-center space-x-1"
          >
            <span>Explore Projects</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* Professional Experience Data */
const EXPERIENCES = [
  {
    id: "sg-ats",
    title: "SOCIÉTÉ GÉNÉRALE ATS",
    role: "Data & Software Engineering Intern (PFE)",
    period: "FEB 2026 – JUNE 2026",
    location: "Casablanca, Morocco",
    image: import.meta.env.BASE_URL + 'SG_ATS.png',
    desc: "Architected a high-throughput Data Quality API using Python, FastAPI, and Pandera for financial risk governance. Optimized relational database query execution and indexing strategies in PostgreSQL, while standardizing automated deployment pipelines via Docker and CI/CD."
  },
  {
    id: "attijari",
    title: "ATTIJARIWAFA BANK – TRADING DESK",
    role: "Quantitative Analyst Intern",
    period: "JUNE 2025 – AUG 2025",
    location: "Casablanca, Morocco",
    image: import.meta.env.BASE_URL + 'AWB.png',
    desc: "Engineered quantitative fixed-income pricing models, yield curve bootstrapping engines, and econometric forecasting pipelines (ARIMA). Developed real-time sensitivity analytics (Greeks) and interactive risk monitoring dashboards using Streamlit and Plotly."
  },
  {
    id: "ocp",
    title: "GROUPE OCP",
    role: "Operations Research & Optimization Intern",
    period: "JULY 2024 – AUG 2024",
    location: "Jorf Lasfar, Morocco",
    image: import.meta.env.BASE_URL + 'VRP.png',
    desc: "Formulated mixed-integer linear programming (MILP) algorithms and heuristics for Vehicle Routing Problems with Time Windows (VRPTW). Preprocessed high-dimensional logistics datasets to minimize transport latency and operational cost."
  }
];

/* Research & Engineering Projects */
const PROJECTS = [
  {
    id: "get-cv",
    title: "GET_CV: GENAI RAG ENGINE",
    category: "AI SYSTEMS & CLOUD ARCHITECTURE",
    image: import.meta.env.BASE_URL + 'CV_GEN.png',
    desc: "Full-stack generative AI architecture integrating LangChain, Supabase, and pgvector for semantic retrieval. Engineered custom validation guardrails to ensure structural consistency, low-latency document synthesis, and factual grounding.",
    link: "https://github.com/100wahidi"
  },
  {
    id: "anomaly",
    title: "FINANCIAL ANOMALY DETECTION",
    category: "DEEP LEARNING & PROBABILISTIC ML",
    image: import.meta.env.BASE_URL + 'AEs.png',
    desc: "PyTorch-based deep learning framework implementing Autoencoder architectures (Vanilla, Sparse, and Denoising) to model normal transaction distributions and isolate high-risk financial anomalies via ROC-AUC benchmarking.",
    link: "https://github.com/100wahidi"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("mouad.alwahidi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen qrt-bg-pattern text-slate-100 font-sans selection:bg-sky-500 selection:text-white relative">
      
      {/* 1. TOP NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#060a14]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo & Identity */}
          <div onClick={() => setActiveTab('about')} className="flex items-center space-x-3 cursor-pointer group">
            <QrtCubeLogo />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-widest text-white group-hover:text-sky-400 transition">
                MOUAD WAHIDI <span className="text-sky-400">/</span> 
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                Software & Quant Engineer
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold tracking-wide">
            <button
              onClick={() => setActiveTab('about')}
              className={`pb-1 transition-all ${
                activeTab === 'about'
                  ? 'text-white border-b-2 border-sky-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              About & Focus
            </button>
            <button
              onClick={() => setActiveTab('experiences')}
              className={`pb-1 transition-all ${
                activeTab === 'experiences'
                  ? 'text-white border-b-2 border-sky-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Experiences
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`pb-1 transition-all ${
                activeTab === 'projects'
                  ? 'text-white border-b-2 border-sky-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Research & Projects
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-5 text-slate-300">
            <a href="https://github.com/100wahidi" target="_blank" rel="noreferrer" className="hover:text-white transition" title="GitHub Profile">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mouad-wahidi-a35874257/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition" title="LinkedIn Profile">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#060a14] border-b border-white/10 px-6 py-4 space-y-3 text-sm font-semibold">
            <button onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }} className="block w-full text-left text-slate-200">About & Focus</button>
            <button onClick={() => { setActiveTab('experiences'); setMobileMenuOpen(false); }} className="block w-full text-left text-slate-200">Experiences</button>
            <button onClick={() => { setActiveTab('projects'); setMobileMenuOpen(false); }} className="block w-full text-left text-slate-200">Research & Projects</button>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER */}
      <section className="relative w-full h-80 sm:h-96 overflow-hidden border-b border-white/10">
        <img 
          src={import.meta.env.BASE_URL + 'EMI_BACK.jpg'} 
          alt="Quantitative Engineering Banner" 
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextSibling.style.display = 'flex';
          }}
          className="w-full h-full object-cover object-center opacity-40 brightness-90"
        />
        
        <div className="hidden w-full h-full bg-[#0a1124] items-center justify-center">
          <div className="text-center space-y-2">
            <Cpu className="w-12 h-12 text-sky-400 mx-auto opacity-60" />
            <p className="text-xs font-mono text-slate-400">Place your main image as /EMI_BACK.jpg</p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#060a14] via-transparent to-[#060a14]/80 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-sky-500/10 skew-x-12 transform -translate-x-1/4 pointer-events-none border-r border-sky-400/20" />
      </section>

      {/* 3. MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">

        {/* TAB 1: ABOUT ME & DOMAIN FOCUS */}
        {activeTab === 'about' && (
          <div className="space-y-16 animate-fadeIn">
            
            {/* Main Header / Bio */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start border-b border-white/10 pb-16">
              <div className="md:col-span-5">
                <h1 className="text-5xl font-black tracking-widest text-white leading-none uppercase">
                  ABOUT ME
                </h1>
              </div>

              <div className="md:col-span-7 space-y-6">
                <h2 className="text-2xl font-extrabold tracking-wide text-white uppercase leading-snug">
                  STATE ENGINEER IN MODELING, SCIENTIFIC COMPUTING & QUANTITATIVE SYSTEMS
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  Graduate of <strong className="text-white">École Mohammadia d'Ingénieurs (EMI)</strong>. I engineer scalable, high-performance software systems at the intersection of applied mathematics, low-latency backend architectures, and machine learning. Driven by first-principles problem solving, I bridge abstract mathematical theory with robust, production-grade software.
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button 
                    onClick={() => setActiveTab('experiences')}
                    className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-[#060a14] font-bold text-xs uppercase tracking-widest transition flex items-center space-x-2"
                  >
                    <span>View Experiences</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={copyEmail}
                    className="px-6 py-3 border border-white/20 hover:border-white text-white font-bold text-xs uppercase tracking-widest transition flex items-center space-x-2"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-sky-400" />}
                    <span>{copied ? "Email Copied" : "Contact Me"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Core Domain Pillars */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
                // CORE TECHNICAL DOMAINS & RESEARCH FOCUS
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Pillar 1: Software Engineering */}
                <div className="qrt-card p-8 space-y-4 border-l-2 border-l-sky-400">
                  <Code2 className="w-7 h-7 text-sky-400" />
                  <h3 className="font-bold text-white uppercase tracking-wider text-base">Software Engineering</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Committed to building scalable, maintainable architectures guided by <strong className="text-slate-100">SOLID principles</strong> and clean design patterns. Focused on delivering modular REST APIs, understanding database internals and indexing, and optimizing low-latency data pipelines.
                  </p>
                </div>

                {/* Pillar 2: Applied Mathematics */}
                <div className="qrt-card p-8 space-y-4 border-l-2 border-l-indigo-400">
                  <Binary className="w-7 h-7 text-indigo-400" />
                  <h3 className="font-bold text-white uppercase tracking-wider text-base">Applied Mathematics</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Embracing mathematical abstraction to elevate analytical rigor and logical reasoning. Deeply invested in <strong className="text-slate-100">Partial Differential Equations (PDEs)</strong>, <strong className="text-slate-100">Stochastic Differential Equations (SDEs)</strong>, and differential calculus for modeling complex continuous-time dynamics.
                  </p>
                </div>

                {/* Pillar 3: AI & Statistical Systems */}
                <div className="qrt-card p-8 space-y-4 border-l-2 border-l-emerald-400">
                  <Layers className="w-7 h-7 text-emerald-400" />
                  <h3 className="font-bold text-white uppercase tracking-wider text-base">AI & Statistical Learning</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Treating modern AI through the lens of probabilistic distributions and statistical mechanics. Actively researching <strong className="text-slate-100">LLM internal architectures</strong>, parameter efficiency, hallucination mitigation, and empirical verification frameworks for generative systems.
                  </p>
                </div>

              </div>
            </div>

            {/* Detailed Interest Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="bg-[#0a1124]/60 border border-white/10 p-6 rounded-lg space-y-3">
                <h4 className="text-sm font-mono text-sky-400 uppercase tracking-wider font-bold flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Quantitative Finance & Risk</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fixed income modeling, zero-coupon yield curve bootstrapping, interest rate term structures (Hull-White, Vasicek), Monte Carlo simulations, and sensitivity analytics (Greeks) for active risk management.
                </p>
              </div>

              <div className="bg-[#0a1124]/60 border border-white/10 p-6 rounded-lg space-y-3">
                <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider font-bold flex items-center space-x-2">
                  <Database className="w-4 h-4" />
                  <span>Data Architecture & DevOps</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  FastAPI microservices, PostgreSQL query execution tuning, vector embeddings (pgvector), schema validation engines (Pandera), and automated CI/CD container workflows with Docker.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: EXPERIENCES SECTION */}
        {activeTab === 'experiences' && (
          <div className="space-y-16 animate-fadeIn">
            <h2 className="text-4xl font-black tracking-widest text-white uppercase border-b border-white/10 pb-6">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-16">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center qrt-card p-8 rounded-none">
                  
                  {/* Left Column: Image Card */}
                  <div 
                    onClick={() => setModalImage({ src: exp.image, title: exp.title })}
                    className="md:col-span-5 relative group overflow-hidden border border-white/10 cursor-pointer bg-[#0a1124]"
                  >
                    <img 
                      src={exp.image} 
                      alt={exp.title}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                      className="w-full h-64 object-cover brightness-90 group-hover:scale-105 transition duration-500"
                    />
                    
                    <div className="hidden w-full h-64 bg-[#0d162a] flex-col items-center justify-center p-4 text-center">
                      <Cpu className="w-10 h-10 text-sky-400 mb-2 opacity-70" />
                      <span className="text-xs font-mono text-slate-400">{exp.image}</span>
                    </div>

                    <div className="absolute inset-0 bg-sky-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 text-white font-mono text-xs uppercase tracking-widest font-bold">
                      <ZoomIn className="w-5 h-5 text-sky-400" />
                      <span>Expand Image</span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Right Column: Description */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="text-xs font-mono text-sky-400 tracking-widest">{exp.period} • {exp.location}</div>
                    <h3 className="text-2xl font-extrabold text-white tracking-wide uppercase">{exp.title}</h3>
                    <div className="text-sm font-bold text-slate-300 uppercase tracking-wider">{exp.role}</div>
                    <p className="text-sm text-slate-300 leading-relaxed pt-2">
                      {exp.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: PROJECTS SECTION */}
        {activeTab === 'projects' && (
          <div className="space-y-16 animate-fadeIn">
            <h2 className="text-4xl font-black tracking-widest text-white uppercase border-b border-white/10 pb-6">
              RESEARCH & ENGINEERING PROJECTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="qrt-card-hover p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    <div 
                      onClick={() => setModalImage({ src: proj.image, title: proj.title })}
                      className="w-full h-48 overflow-hidden border border-white/10 relative cursor-pointer group bg-[#0a1124]"
                    >
                      <img 
                        src={proj.image} 
                        alt={proj.title}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextSibling.style.display = 'flex';
                        }}
                        className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition duration-500"
                      />
                      <div className="hidden w-full h-full bg-[#0d162a] flex-col items-center justify-center p-4 text-center">
                        <Cpu className="w-8 h-8 text-sky-400 mb-2 opacity-70" />
                        <span className="text-xs font-mono text-slate-400">{proj.image}</span>
                      </div>

                      <div className="absolute inset-0 bg-sky-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 text-white font-mono text-xs uppercase tracking-widest font-bold">
                        <ZoomIn className="w-5 h-5 text-sky-400" />
                        <span>Expand View</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono text-sky-400 tracking-widest">{proj.category}</span>
                      <a href={proj.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white" title="View Source">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>

                    <h3 className="text-xl font-extrabold text-white uppercase tracking-wider">{proj.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{proj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* 4. NOTIFICATION TOAST */}
      <FetchLastProject onOpenTab={(tab) => setActiveTab(tab)} />

      {/* 5. IMAGE LIGHTBOX MODAL */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setModalImage(null)}
        >
          <div 
            className="relative max-w-6xl w-full bg-[#0d162a] border border-white/20 rounded-xl overflow-hidden p-3 shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-4 py-2 border-b border-white/10">
              <span className="text-sm font-extrabold font-mono text-sky-400 uppercase tracking-widest">
                {modalImage.title}
              </span>
              <button 
                onClick={() => setModalImage(null)}
                className="text-slate-400 hover:text-white p-1 rounded-md transition hover:bg-white/10 flex items-center space-x-1"
              >
                <span className="text-xs font-mono uppercase tracking-wider hidden sm:inline">Close</span>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative max-h-[80vh] overflow-auto flex justify-center items-center bg-[#060a14] rounded-lg p-2 border border-white/5">
              <img 
                src={modalImage.src} 
                alt={modalImage.title}
                className="max-h-[78vh] w-auto max-w-full object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 bg-[#04070e] text-center text-xs font-mono text-slate-500">
        MOUAD WAHIDI • ÉCOLE MOHAMMADIA D'INGÉNIEURS (EMI) • STATE ENGINEER IN MODELING & SCIENTIFIC COMPUTING
      </footer>
    </div>
  );
}