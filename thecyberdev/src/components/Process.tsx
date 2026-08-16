import React from 'react';
import { Terminal, Search, Compass, Code2, Rocket, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export const Process: React.FC = () => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return Search;
      case '02':
        return Compass;
      case '03':
        return Code2;
      case '04':
        return Rocket;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="process" className="py-24 relative bg-[#020617] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dots-polish opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>DEVELOPMENT LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">We Work</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A disciplined, 4-step engineering roadmap ensuring technical excellence, tight security adherence, and timely delivery.
          </p>
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting gradient line */}
          <div className="absolute top-14 left-12 right-12 h-0.5 bg-gradient-to-r from-cyan-500 via-emerald-400 to-blue-500 z-0 opacity-40" />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step) => {
              const Icon = getStepIcon(step.number);
              return (
                <div key={step.number} className="space-y-4">
                  
                  {/* Step Icon Node */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-xl shadow-cyan-950 font-mono font-bold text-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-slate-900 px-2.5 py-1 rounded-full border border-white/10">
                      Step {step.number}
                    </span>
                  </div>

                  {/* Step Card Content */}
                  <div className="p-5 rounded-2xl bg-[#0f172a] border border-white/10 space-y-3 h-full hover:border-cyan-500/30 transition-colors shadow-lg">
                    <h3 className="text-lg font-bold text-white flex items-center justify-between">
                      <span>{step.title}</span>
                      <span className="text-[11px] font-mono text-slate-500">{step.duration}</span>
                    </h3>

                    <p className="text-slate-400 text-xs leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-2 border-t border-white/5 space-y-1.5">
                      {step.activities.map((act, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Timeline (Vertical) */}
        <div className="lg:hidden space-y-6 relative">
          <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-400 to-blue-500 z-0 opacity-40" />

          {PROCESS_STEPS.map((step) => {
            const Icon = getStepIcon(step.number);
            return (
              <div key={step.number} className="relative z-10 flex items-start gap-4">
                {/* Step Circle */}
                <div className="w-12 h-12 rounded-xl bg-[#0f172a] border border-cyan-500/60 flex items-center justify-center text-cyan-400 shadow-lg shrink-0 font-mono font-bold">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Step Details */}
                <div className="flex-1 p-5 rounded-2xl bg-[#0f172a] border border-white/10 space-y-3 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      Step {step.number}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">{step.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-2 border-t border-white/5 space-y-1.5">
                    {step.activities.map((act, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
