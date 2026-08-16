import React from 'react';
import { ShieldCheck, Cpu, CheckCircle2, Briefcase, TrendingUp, Lock, Terminal, Activity, Award } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      title: 'Security-focused',
      description: 'Proactive vulnerability assessments, defensive architecture, and OWASP compliance woven into all code.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      bg: 'bg-cyan-950/50 border-cyan-500/30'
    },
    {
      title: 'Modern technology',
      description: 'Leveraging modern frameworks, type-safe TypeScript, and cloud-native serverless systems.',
      icon: Cpu,
      color: 'text-blue-400',
      bg: 'bg-blue-950/50 border-blue-500/30'
    },
    {
      title: 'Reliable solutions',
      description: 'High-availability infrastructure engineered for zero downtime and dependable mission-critical operations.',
      icon: CheckCircle2,
      color: 'text-emerald-400',
      bg: 'bg-emerald-950/50 border-emerald-500/30'
    },
    {
      title: 'Business-oriented approach',
      description: 'Transforming technical excellence directly into revenue growth, client trust, and brand authority.',
      icon: Briefcase,
      color: 'text-amber-400',
      bg: 'bg-amber-950/50 border-amber-500/30'
    },
    {
      title: 'Scalable development',
      description: 'Clean modular architectures designed to seamlessly scale from initial launch to millions of daily users.',
      icon: TrendingUp,
      color: 'text-purple-400',
      bg: 'bg-purple-950/50 border-purple-500/30'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#020617] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dots-polish opacity-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>WHO WE ARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TheCyberDev</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            TheCyberDev is a technology-focused company providing cybersecurity and digital development solutions for modern businesses and organizations.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Mission & 5 Qualities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 to-blue-500" />
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                Our Core Mission
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Our goal is to help businesses establish a strong digital presence while keeping their websites, applications, and digital systems secure. We eliminate the friction between security compliance and rapid digital innovation.
              </p>
            </div>

            {/* 5 Highlighted Qualities */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                Engineered for Excellence:
              </div>
              
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/40 hover:bg-slate-900/70 border border-white/5 hover:border-white/10 transition-all flex items-start gap-4 group"
                  >
                    <div className={`p-2.5 rounded-lg border ${item.bg} ${item.color} shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Technology-themed Visual & Matrix */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Architecture Card */}
            <div className="p-6 rounded-2xl bg-[#0f172a] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-white/5 text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5 font-semibold">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  SYSTEM INTEGRITY MATRIX
                </span>
                <span className="text-emerald-400 font-semibold">100% OPERATIONAL</span>
              </div>

              {/* Matrix Metrics */}
              <div className="py-5 space-y-4">
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Defensive Security Posture</span>
                    <span className="text-cyan-400">99.9%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-white/5">
                    <div className="bg-gradient-to-r from-cyan-500 to-teal-400 h-full w-[99.9%]" />
                  </div>
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Web Architecture & Speed (Lighthouse)</span>
                    <span className="text-emerald-400">100/100</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-white/5">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-full" />
                  </div>
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Mobile App Performance & Stability</span>
                    <span className="text-blue-400">99.8%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-white/5">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-400 h-full w-[99.8%]" />
                  </div>
                </div>
              </div>

              {/* Zero-Trust Badge */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="text-white font-bold">Zero-Trust Framework</div>
                  <div className="text-slate-400 text-[11px]">Strict verification for every API endpoint and user interaction.</div>
                </div>
              </div>
            </div>

            {/* Quick stats mini-grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 text-center font-mono">
                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Reliable Systems</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 text-center font-mono">
                <div className="text-2xl font-bold text-emerald-400">0-Day</div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Defensive Standards</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
