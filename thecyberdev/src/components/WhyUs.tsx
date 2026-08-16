import React from 'react';
import { ShieldCheck, Cpu, Sliders, TrendingUp, CheckCircle, Terminal, Lock, Zap } from 'lucide-react';
import { WHY_US_FEATURES, STATS } from '../data/content';

export const WhyUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Cpu':
        return Cpu;
      case 'Sliders':
        return Sliders;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="why-us" className="py-24 relative bg-[#020617] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dots-polish opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>THE COMPETITIVE ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TheCyberDev?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We bridge the gap between uncompromising cybersecurity and frictionless software design to deliver business resilience.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_FEATURES.map((feature, idx) => {
            const Icon = getIcon(feature.iconName);
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-[#0f172a] hover:bg-[#131d35] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Icon */}
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {feature.highlight}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center text-[11px] font-mono text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
                  <span>Enterprise Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 text-center space-y-1 shadow-lg"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
