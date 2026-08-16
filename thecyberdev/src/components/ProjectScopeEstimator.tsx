import React, { useState } from 'react';
import { Calculator, ShieldCheck, Globe, Smartphone, Check, ArrowRight, Sparkles } from 'lucide-react';

interface EstimatorProps {
  onApplyScopeToContact: (scopeSummary: string, serviceKey: string) => void;
}

export const ProjectScopeEstimator: React.FC<EstimatorProps> = ({ onApplyScopeToContact }) => {
  const [selectedService, setSelectedService] = useState<'cybersecurity' | 'web-dev' | 'app-dev' | 'combo'>('cybersecurity');
  const [scale, setScale] = useState<'startup' | 'business' | 'enterprise'>('business');
  const [includeSecurityAudit, setIncludeSecurityAudit] = useState(true);
  const [needOngoingSupport, setNeedOngoingSupport] = useState(true);

  const getTimeline = () => {
    if (selectedService === 'cybersecurity') return scale === 'enterprise' ? '2-3 weeks' : '1-2 weeks';
    if (selectedService === 'web-dev') return scale === 'enterprise' ? '4-6 weeks' : '2-4 weeks';
    if (selectedService === 'app-dev') return scale === 'enterprise' ? '8-12 weeks' : '4-8 weeks';
    return '6-10 weeks';
  };

  const handleApply = () => {
    const serviceName = selectedService === 'cybersecurity' ? 'Cybersecurity Assessment'
      : selectedService === 'web-dev' ? 'Website Development'
      : selectedService === 'app-dev' ? 'Mobile App Development'
      : 'Full-Stack Web, App & Security Solution';

    const summary = `Selected Project Scope:
- Core Service: ${serviceName}
- Scale: ${scale.toUpperCase()} Tier
- Defensive Security Hardening: ${includeSecurityAudit ? 'Included' : 'Standard'}
- Ongoing Maintenance & Patching: ${needOngoingSupport ? 'Requested' : 'Optional'}
- Target Estimated Timeline: ~${getTimeline()}`;

    const serviceKey = selectedService === 'cybersecurity' ? 'cybersecurity'
      : selectedService === 'web-dev' ? 'web-development'
      : selectedService === 'app-dev' ? 'app-development'
      : 'multi-discipline';

    onApplyScopeToContact(summary, serviceKey);
  };

  return (
    <section className="py-20 bg-[#020617] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE SCOPING TOOL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Estimate Your Project Architecture
          </h2>
          <p className="text-slate-400 text-sm">
            Select your requirements to estimate timeline and architecture scope, then transfer it directly to our engineering team.
          </p>
        </div>

        {/* Interactive Estimator Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0f172a] border border-white/10 space-y-8 shadow-2xl">
          
          {/* Step 1: Select Main Service */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              1. Select Primary Discipline:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { id: 'cybersecurity', label: 'Cybersecurity', icon: ShieldCheck, desc: 'Audit & PenTest' },
                { id: 'web-dev', label: 'Website Dev', icon: Globe, desc: 'Web & Portals' },
                { id: 'app-dev', label: 'App Dev', icon: Smartphone, desc: 'iOS & Android' },
                { id: 'combo', label: 'All-in-One', icon: Sparkles, desc: 'Full Ecosystem' },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = selectedService === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedService(item.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-500/10 border-cyan-400 shadow-md shadow-cyan-950/40'
                        : 'bg-slate-950/60 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <div className="text-sm font-bold text-white">{item.label}</div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">{item.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Scale */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
              2. Project Scale & Infrastructure Tier:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'startup', label: 'Launch / Startup', desc: 'Fast MVP, essential security baseline & responsive design.' },
                { id: 'business', label: 'Growing Business', desc: 'Custom workflows, rigorous vulnerability scanning & high-speed optimization.' },
                { id: 'enterprise', label: 'Enterprise / Scale', desc: 'Dedicated zero-trust architecture, multi-platform apps & continuous monitoring.' },
              ].map((tier) => {
                const isSelected = scale === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setScale(tier.id as any)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500/10 border-emerald-400 shadow-md shadow-emerald-950/40'
                        : 'bg-slate-950/60 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="text-sm font-bold text-white flex items-center justify-between">
                      <span>{tier.label}</span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                    </div>
                    <div className="text-xs text-slate-400 mt-1 leading-relaxed">{tier.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Add-on Checkboxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <label
              onClick={() => setIncludeSecurityAudit(!includeSecurityAudit)}
              className="p-3.5 rounded-xl bg-slate-950/80 border border-white/5 hover:border-white/10 flex items-center gap-3 cursor-pointer select-none"
            >
              <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${includeSecurityAudit ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-700'}`}>
                {includeSecurityAudit && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <div className="text-xs">
                <span className="text-white font-semibold block">Full OWASP Vulnerability Audit</span>
                <span className="text-slate-400 text-[11px]">Deep code & network scanning</span>
              </div>
            </label>

            <label
              onClick={() => setNeedOngoingSupport(!needOngoingSupport)}
              className="p-3.5 rounded-xl bg-slate-950/80 border border-white/5 hover:border-white/10 flex items-center gap-3 cursor-pointer select-none"
            >
              <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${needOngoingSupport ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-700'}`}>
                {needOngoingSupport && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <div className="text-xs">
                <span className="text-white font-semibold block">24/7 Monitoring & Patching</span>
                <span className="text-slate-400 text-[11px]">Continuous maintenance support</span>
              </div>
            </label>
          </div>

          {/* Summary & Transfer Button */}
          <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950/60 p-4 rounded-xl border border-white/5">
            <div className="text-center sm:text-left font-mono">
              <span className="text-xs text-slate-400 block">Estimated Engineering Phase:</span>
              <span className="text-lg font-bold text-cyan-300">~{getTimeline()}</span>
            </div>

            <button
              onClick={handleApply}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20 transition-colors"
            >
              <span>Transfer Scope to Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
