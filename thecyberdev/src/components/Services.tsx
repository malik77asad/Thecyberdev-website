import React from 'react';
import { Shield, Globe, Smartphone, ArrowRight, CheckCircle2, Terminal, ExternalLink, Zap } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenDetails: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenDetails }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Shield':
        return Shield;
      case 'Globe':
        return Globe;
      case 'Smartphone':
        return Smartphone;
      default:
        return Shield;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#020617] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dots-polish opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>SOLUTIONS & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">We Do</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Enterprise-grade cybersecurity, high-performance website architectures, and custom mobile applications engineered for business scale.
          </p>
        </div>

        {/* 3 Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.iconName);
            const isCyan = service.accentColor === 'cyan';
            const isEmerald = service.accentColor === 'emerald';
            
            const accentBorder = isCyan
              ? 'hover:border-cyan-500/40 hover:shadow-cyan-950/40'
              : isEmerald
              ? 'hover:border-emerald-500/40 hover:shadow-emerald-950/40'
              : 'hover:border-blue-500/40 hover:shadow-blue-950/40';

            const iconBg = isCyan
              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
              : isEmerald
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              : 'bg-blue-500/10 text-blue-400 border-blue-500/30';

            const badgeBg = isCyan
              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
              : isEmerald
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              : 'bg-blue-500/10 text-blue-400 border-blue-500/20';

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-[#0f172a] border border-white/10 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-2xl ${accentBorder}`}
              >
                {/* Ambient Card Background Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${service.gradient} pointer-events-none`} />

                <div className="space-y-6 relative z-10">
                  
                  {/* Top Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 ${iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border uppercase tracking-wider ${badgeBg}`}>
                      {service.title}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-3 border-t border-white/5">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                      Core Capabilities:
                    </div>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isCyan ? 'text-cyan-400' : isEmerald ? 'text-emerald-400' : 'text-blue-400'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-3 relative z-10">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 border border-white/10 hover:border-cyan-400 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenDetails(service)}
                    className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    title="View details & deliverables"
                    aria-label={`View details for ${service.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/50 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Need a custom blended project (Web + App + Security Audit)?</span>
          </div>
          <button
            onClick={() => onSelectService(SERVICES[0])}
            className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4 font-semibold cursor-pointer"
          >
            Request a Multi-Discipline Proposal &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
