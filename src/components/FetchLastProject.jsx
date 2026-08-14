import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Sparkles, X, ChevronRight } from 'lucide-react';

export default function FetchLastProject({ onOpenTab }) {
  const [lastProject, setLastProject] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestProject() {
      try {
        setLoading(true);
        // Query strictly selects ONLY id, title, content
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
        console.error("Error fetching latest project:", err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestProject();
  }, []);

  if (loading || !lastProject || !visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full sm:w-96 bg-[#0d162a]/95 border border-sky-500/40 rounded-xl p-4 shadow-2xl backdrop-blur-xl animate-fadeIn">
      {/* Toast Top Header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
        <div className="flex items-center space-x-2 text-sky-400 font-mono text-[11px] uppercase tracking-widest font-bold">
          <Sparkles className="w-4 h-4 animate-pulse text-sky-400" />
          <span>Latest Project Highlight</span>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/10 transition"
          title="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Project Title & Content */}
      <div className="space-y-2">
        <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
          {lastProject.title}
        </h4>

        <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-sans">
          {lastProject.content}
        </p>

        {/* Action Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={() => {
              if (onOpenTab) onOpenTab('projects');
              setVisible(false);
            }}
            className="px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-[#060a14] font-bold text-[11px] font-mono uppercase tracking-wider rounded transition flex items-center space-x-1"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}