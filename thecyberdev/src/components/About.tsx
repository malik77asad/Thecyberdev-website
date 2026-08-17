import React from 'react';
import { ShieldCheck, Cpu, CheckCircle2, Briefcase, TrendingUp, Terminal, Award } from 'lucide-react';

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

        {/* Mission & Qualities */}
        <div className="max-w-5xl mx-auto space-y-6">
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
      </div>
    </section>
  );
};
