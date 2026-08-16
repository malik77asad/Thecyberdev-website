import React from 'react';
import { Shield, Lock, Smartphone, Globe, Terminal, Server, Zap, CheckCircle2, Activity, Layers } from 'lucide-react';
import { ProjectItem } from '../types';

interface Props {
  project: ProjectItem;
}

export const ProjectVisualPlaceholder: React.FC<Props> = ({ project }) => {
  switch (project.visualType) {
    case 'cyber-platform':
      return (
        <div className="w-full h-52 bg-[#080d1a] relative overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-cyber opacity-30" />
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-mono text-cyan-400 font-semibold ml-1">VULN_SCAN_MATRIX</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              REAL-TIME
            </span>
          </div>

          <div className="relative z-10 my-auto flex items-center justify-center gap-6">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-950/60">
                <Shield className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-mono text-slate-300 mt-1 block">Threat Scanner</span>
            </div>

            <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-emerald-400 relative">
              <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-950/80 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-950/60">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-mono text-slate-300 mt-1 block">Hardened (0 Vulns)</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-cyan-400" /> 100% Ingress Inspected</span>
            <span className="text-emerald-400">OWASP Verified</span>
          </div>
        </div>
      );

    case 'business-web':
      return (
        <div className="w-full h-52 bg-[#0a1122] relative overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="absolute inset-0 bg-dots-cyber opacity-30" />
          {/* Browser Mockup Top */}
          <div className="relative z-10 flex items-center justify-between bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-slate-600" />
              <div className="w-2 h-2 rounded-full bg-slate-600" />
              <div className="w-2 h-2 rounded-full bg-slate-600" />
            </div>
            <div className="text-[10px] font-mono text-slate-400 bg-slate-950/90 px-3 py-0.5 rounded border border-slate-800 flex items-center gap-1">
              <Lock className="w-2.5 h-2.5 text-emerald-400" />
              https://portal.client-corp.com
            </div>
            <div className="text-[10px] font-mono text-emerald-400">99.9% TTFB</div>
          </div>

          {/* Web layout mockup */}
          <div className="relative z-10 my-auto grid grid-cols-3 gap-2 px-2">
            <div className="col-span-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="w-24 h-2 rounded bg-cyan-400/80" />
              <div className="w-36 h-1.5 rounded bg-slate-700" />
              <div className="w-28 h-1.5 rounded bg-slate-800" />
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col items-center justify-center text-center">
              <Globe className="w-6 h-6 text-emerald-400 mb-1" />
              <span className="text-[9px] font-mono text-slate-300">Responsive UI</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Fast Global Edge CDN</span>
            <span className="text-cyan-400">100/100 Lighthouse</span>
          </div>
        </div>
      );

    case 'mobile-app':
      return (
        <div className="w-full h-52 bg-[#090e1c] relative overflow-hidden flex items-center justify-center p-4 border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-cyber opacity-20" />
          
          <div className="relative z-10 flex items-center gap-4">
            {/* Mobile phone frame */}
            <div className="w-28 h-40 rounded-2xl bg-slate-950 border-2 border-slate-700 p-2 flex flex-col justify-between shadow-xl relative">
              <div className="w-10 h-1.5 bg-slate-800 rounded-full mx-auto" />
              
              <div className="my-auto space-y-1.5">
                <div className="flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-[8px] font-mono text-slate-200 font-bold">App Sync</span>
                </div>
                <div className="w-full h-2 rounded bg-blue-500/40" />
                <div className="w-3/4 h-2 rounded bg-slate-800" />
                <div className="p-1 rounded bg-slate-900 border border-slate-800 text-[7px] font-mono text-emerald-400 text-center">
                  Encrypted Biometrics
                </div>
              </div>

              <div className="w-6 h-1 bg-slate-800 rounded-full mx-auto" />
            </div>

            {/* Mobile stats pill */}
            <div className="space-y-2 font-mono text-[11px]">
              <div className="p-2 rounded-lg bg-slate-900/80 border border-blue-500/30 text-blue-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                Cross-Platform
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Offline-Ready
              </div>
            </div>
          </div>
        </div>
      );

    case 'security-vault':
      return (
        <div className="w-full h-52 bg-[#090b14] relative overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-cyber opacity-20" />
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-purple-400 font-semibold"><Lock className="w-3.5 h-3.5" /> VAULT_AUTH_IAM</span>
            <span className="text-emerald-400">SOC2 COMPLIANT</span>
          </div>

          <div className="relative z-10 my-auto flex items-center justify-center gap-4">
            <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-300 flex items-center gap-2">
              <Server className="w-6 h-6 text-purple-400" />
              <div className="font-mono text-[11px]">
                <div className="text-white font-bold">Encrypted Vault</div>
                <div className="text-[9px] text-purple-300">256-Bit Hardware Key</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Granular RBAC Policies</span>
            <span className="text-purple-400">Zero Leak Record</span>
          </div>
        </div>
      );

    case 'ecommerce-web':
      return (
        <div className="w-full h-52 bg-[#08101e] relative overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="absolute inset-0 bg-dots-cyber opacity-25" />
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="text-cyan-400 font-semibold flex items-center gap-1"><Layers className="w-3.5 h-3.5" /> COMMERCE_STACK</span>
            <span className="text-emerald-400">PCI-DSS SAFE</span>
          </div>

          <div className="relative z-10 my-auto grid grid-cols-2 gap-3">
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px] font-mono space-y-1">
              <div className="text-slate-200 font-semibold">Sub-second Checkout</div>
              <div className="w-full bg-slate-800 h-1 rounded" />
              <div className="text-emerald-400 text-[9px]">+42% Conversion</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px] font-mono space-y-1">
              <div className="text-slate-200 font-semibold">Edge API Cart</div>
              <div className="w-full bg-slate-800 h-1 rounded" />
              <div className="text-cyan-400 text-[9px]">Zero Latency Lag</div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Stripe & Headless API</span>
            <span className="text-cyan-300">100% Mobile Ready</span>
          </div>
        </div>
      );

    case 'fintech-app':
      return (
        <div className="w-full h-52 bg-[#070e17] relative overflow-hidden flex flex-col justify-between p-4 border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-cyber opacity-25" />
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="text-emerald-400 font-semibold flex items-center gap-1"><Activity className="w-3.5 h-3.5" /> FINTECH_ENGINE</span>
            <span className="text-blue-400">WEBSOCKET FEED</span>
          </div>

          <div className="relative z-10 my-auto flex items-center justify-around">
            <div className="text-center font-mono">
              <div className="text-lg font-bold text-emerald-400">$120M+</div>
              <div className="text-[10px] text-slate-400">Tracked Safely</div>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center font-mono">
              <Lock className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
              <div className="text-[9px] text-slate-300">Bank-Grade E2EE</div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Real-time Risk Telemetry</span>
            <span className="text-emerald-400">Microsecond Push</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-52 bg-slate-900 flex items-center justify-center text-slate-500 font-mono text-xs">
          <Terminal className="w-5 h-5 mr-2 text-cyan-400" />
          TheCyberDev Project Blueprint
        </div>
      );
  }
};
