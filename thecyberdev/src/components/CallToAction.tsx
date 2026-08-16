import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Sparkles, Terminal } from 'lucide-react';

interface CallToActionProps {
  onStartProject: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onStartProject }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#020617] border-t border-white/5">
      {/* Background ambient glowing gradient */}
      <div className="absolute inset-0 bg-dots-polish opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#0f172a] border border-white/10 p-8 sm:p-12 md:p-16 text-center space-y-8 shadow-2xl overflow-hidden">
          
          {/* Subtle top glowing line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>START YOUR DIGITAL TRANSFORMATION</span>
          </div>

          {/* Headline & Subtitle */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Secure?</span>
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Let's turn your idea into a secure, modern digital solution.
            </p>
          </div>

          {/* Action CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Security & Response Guarantee */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400 border-t border-white/5">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> Free Architecture Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" /> NDA & Data Privacy Protected
            </span>
            <span className="flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-blue-400" /> Response in &lt;12 Hours
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
