import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Globe, Smartphone, ChevronDown } from 'lucide-react';
import { CyberHeroVisual } from './CyberHeroVisual';

interface HeroProps {
  onOpenGetStarted: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGetStarted, onExploreServices }) => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-6 text-left">
            
            {/* Status Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Next-Gen Security</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
              Secure. Build.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Innovate.
              </span>
            </h1>

            {/* Detailed Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              Comprehensive cybersecurity and digital development solutions for modern businesses. We build resilient systems that scale with your growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenGetStarted}
                className="bg-white text-slate-900 px-8 py-3.5 rounded-lg font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10 cursor-pointer active:scale-95 flex items-center gap-2 text-sm sm:text-base"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="border border-white/20 bg-white/5 px-8 py-3.5 rounded-lg font-bold hover:bg-white/10 text-white transition-colors cursor-pointer active:scale-95 flex items-center gap-2 text-sm sm:text-base"
              >
                <span>Our Services</span>
                <ChevronDown className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Metrics Row */}
            <div className="mt-4 grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono">99.9%</div>
                <div className="text-xs uppercase text-slate-500 tracking-wider font-semibold mt-1">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono">256-bit</div>
                <div className="text-xs uppercase text-slate-500 tracking-wider font-semibold mt-1">Encryption Std</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Cyber HUD Visual */}
          <div className="lg:col-span-5 w-full flex flex-col gap-4">
            <CyberHeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
