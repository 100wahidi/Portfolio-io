import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Loader2, AlertCircle } from 'lucide-react';

export default function FetchPerso({ 
  tableName = 'projects', 
  titleKey = 'title', 
  contentKey = 'content',
  renderItem 
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        // Fetch data dynamically based on the passed tableName
        const { data: result, error: fetchError } = await supabase
          .from(tableName)
          .select('*');

        if (fetchError) throw fetchError;

        setData(result || []);
      } catch (err) {
        console.error(`Error fetching table "${tableName}":`, err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (tableName) {
      fetchData();
    }
  }, [tableName]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 text-sky-400 space-x-3 font-mono">
        <Loader2 className="w-6 h-6 animate-spin" />
        <span className="text-xs uppercase tracking-widest">
          Fetching {tableName}...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-950/40 border border-red-800/50 rounded text-red-300 font-mono text-xs flex items-center space-x-3">
        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
        <div>
          <span className="font-bold uppercase tracking-wider block">
            Error loading "{tableName}"
          </span>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="p-4 text-xs font-mono text-slate-500 uppercase tracking-widest">
        No records found in public.{tableName}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {data.map((item, index) => {
        // If a custom render function is provided, use it
        if (renderItem) {
          return <React.Fragment key={item.id || index}>{renderItem(item)}</React.Fragment>;
        }

        // Default QRT-styled card fallback
        return (
          <div 
            key={item.id || index} 
            className="qrt-card p-6 space-y-2 border-l-2 border-l-sky-400"
          >
            <h3 className="text-base font-extrabold text-white uppercase tracking-wider">
              {item[titleKey] || 'Untitled'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {item[contentKey] || 'No description available.'}
            </p>
          </div>
        );
      })}
    </div>
  );
}