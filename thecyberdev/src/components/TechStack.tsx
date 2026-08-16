import React from 'react';
import { Terminal, Shield, Code, Cpu, Cloud, Layers } from 'lucide-react';
import { TECH_STACK } from '../data/content';

export const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-[#020617] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>TRUSTED MODERN ECOSYSTEM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Battle-Tested Technologies & Security Frameworks
          </h2>
        </div>

        {/* Tech Stack 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((group, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0f172a] border border-white/10 space-y-4 hover:border-cyan-500/30 transition-colors shadow-xl"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-cyan-300 font-mono pb-2 border-b border-white/5">
                {idx === 0 && <Shield className="w-4 h-4 text-cyan-400" />}
                {idx === 1 && <Code className="w-4 h-4 text-emerald-400" />}
                {idx === 2 && <Cpu className="w-4 h-4 text-blue-400" />}
                {idx === 3 && <Cloud className="w-4 h-4 text-purple-400" />}
                <span>{group.name}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-white/5 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
