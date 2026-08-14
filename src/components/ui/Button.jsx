export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-sky-600 text-white hover:bg-sky-500',
    secondary: 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700',
    ghost: 'bg-transparent text-slate-200 hover:bg-slate-800',
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
