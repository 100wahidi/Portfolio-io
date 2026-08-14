export default function Contact() {
  return (
    <section id="contact" className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
      <h2 className="mb-4 text-2xl font-bold text-white">Let&apos;s Connect</h2>
      <p className="max-w-2xl text-slate-300">
        I&apos;m open to engineering, quant, and AI-driven product opportunities. Reach out for collaborations,
        projects, or conversations around building data-intensive products.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <a href="mailto:mouad.alwahidi@gmail.com" className="rounded-xl bg-sky-600 px-5 py-3 font-medium text-white hover:bg-sky-500">
          mouad.alwahidi@gmail.com
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 font-medium text-slate-200 hover:bg-slate-700">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
