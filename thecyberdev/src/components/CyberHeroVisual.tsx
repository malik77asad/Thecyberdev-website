import React, { useState, useEffect } from 'react';
import { Shield, Lock, Terminal, Cpu, CheckCircle2, Activity, Server, Zap, Code, ShieldAlert } from 'lucide-react';

export const CyberHeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'security' | 'architecture' | 'code'>('security');
  const [packetsCount, setPacketsCount] = useState(14820);
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'secured'>('secured');
  const [activeNode, setActiveNode] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPacketsCount(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const runSimulatedScan = () => {
    setScanStatus('scanning');
    setTimeout(() => {
      setScanStatus('secured');
    }, 1800);
  };

  return (
    <div id="cyber-hero-visual" className="flex flex-col gap-4 w-full max-w-lg mx-auto lg:max-w-none">
      
      {/* Main Terminal/HUD Container with Professional Polish styling */}
      <div className="relative bg-[#0f172a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-40 pointer-events-none" />
        
        {/* Terminal Header Bar */}
        <div className="relative z-10 flex items-center justify-between px-5 py-3.5 bg-slate-950/60 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">STATUS: SECURE_ACTIVE</span>
          </div>

          <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-white/10 text-[11px] font-mono">
            <button
              onClick={() => setActiveTab('security')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                activeTab === 'security' ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Security HUD
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                activeTab === 'architecture' ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Network
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                activeTab === 'code' ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Code Guard
            </button>
          </div>
        </div>

        {/* Tab 1: Security HUD */}
        {activeTab === 'security' && (
          <div className="relative z-10 p-5 space-y-4 font-mono text-xs">
            {/* Top Status Indicators */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Firewall</div>
                <div className="mt-1 flex items-center gap-1.5 font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  ACTIVE (99.9%)
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Encryption</div>
                <div className="mt-1 font-semibold text-cyan-300 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-cyan-400" />
                  256-bit AES
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Audit Grade</div>
                <div className="mt-1 font-semibold text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  A+ (0 Vulns)
                </div>
              </div>
            </div>

            {/* Simulated Live System Diagram */}
            <div className="relative p-4 rounded-xl bg-slate-950/80 border border-white/5 overflow-hidden">
              <div className="relative z-10 flex items-center justify-between text-slate-300">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-slate-400">WAF / Shield</span>
                </div>

                <div className="flex-1 mx-2 flex flex-col items-center">
                  <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500 via-emerald-400 to-blue-500 relative">
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
                  </div>
                  <span className="text-[9px] text-slate-500 mt-1">TLS 1.3 Pipe</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                    <Server className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-slate-400">App Core</span>
                </div>

                <div className="flex-1 mx-2 flex flex-col items-center">
                  <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500" />
                  <span className="text-[9px] text-slate-500 mt-1">Zero-Trust</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-slate-400">DB Vault</span>
                </div>
              </div>

              {/* Real-time telemetry row */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  Packets Analyzed: <strong className="text-slate-200">{packetsCount.toLocaleString()}</strong>
                </span>
                <span className="text-cyan-400">Latency: 11ms</span>
              </div>
            </div>

            {/* Quick Interactive Action */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Active Threat Intelligence
              </div>
              <button
                onClick={runSimulatedScan}
                disabled={scanStatus === 'scanning'}
                className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
              >
                {scanStatus === 'scanning' ? (
                  <>
                    <Activity className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    Run Live Security Check
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Architecture Network */}
        {activeTab === 'architecture' && (
          <div className="relative z-10 p-5 space-y-4 font-mono text-xs">
            <div className="text-slate-400 text-[11px]">Select a digital infrastructure node to inspect security parameters:</div>
            
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { id: 1, name: 'Web Application Layer', tech: 'React / Next.js / Edge', status: 'Hardened (XSS/CSRF Safe)', color: 'text-cyan-400' },
                { id: 2, name: 'Mobile App Endpoints', tech: 'GraphQL / OAuth2 / JWT', status: 'Biometric Auth Ready', color: 'text-blue-400' },
                { id: 3, name: 'Cyber Defense Mesh', tech: 'OWASP / DDoS Mitigation', status: 'Zero-Day Shield Active', color: 'text-emerald-400' },
                { id: 4, name: 'Cloud Database Vault', tech: 'PostgreSQL / 256-bit AES', status: 'Encrypted at Rest', color: 'text-purple-400' }
              ].map(node => (
                <div
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className={`p-3 rounded-xl border transition-all cursor-pointer ${
                    activeNode === node.id
                      ? 'bg-cyan-950/60 border-cyan-400/80 shadow-md shadow-cyan-950'
                      : 'bg-slate-950/50 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className={`font-semibold ${node.color} flex items-center justify-between`}>
                    {node.name}
                    {activeNode === node.id && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">{node.tech}</div>
                  <div className="text-[9px] text-slate-500 mt-0.5">{node.status}</div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 text-slate-300 text-[11px]">
              <span className="text-cyan-400 font-bold">Node #{activeNode} Verified:</span> Modular boundary with isolated zero-trust token validation and automated regression testing.
            </div>
          </div>
        )}

        {/* Tab 3: Code Guard */}
        {activeTab === 'code' && (
          <div className="relative z-10 p-5 font-mono text-xs space-y-3 bg-[#060911]">
            <div className="text-slate-400 text-[11px] flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>// TheCyberDev Defensive Architecture Blueprint</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-white/5 text-slate-300 text-[11px] leading-relaxed overflow-x-auto">
              <p className="text-slate-500">1  <span className="text-purple-400">import</span> &#123; createSecurePipeline &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@thecyberdev/core'</span>;</p>
              <p className="text-slate-500">2  </p>
              <p className="text-slate-500">3  <span className="text-blue-400">export const</span> <span className="text-yellow-300">enterpriseShield</span> = <span className="text-cyan-400">createSecurePipeline</span>(&#123;</p>
              <p className="text-slate-500">4    threatDefense: <span className="text-emerald-400">'STRICT_OWASP_TOP_10'</span>,</p>
              <p className="text-slate-500">5    frontendStack: [<span className="text-emerald-400">'Responsive'</span>, <span className="text-emerald-400">'Performant'</span>],</p>
              <p className="text-slate-500">6    mobileSync: <span className="text-emerald-400">'AES_256_E2EE'</span></p>
              <p className="text-slate-500">7  &#125;);</p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="text-emerald-400">✓ 0 Vulnerabilities Detected</span>
              <span className="text-slate-500">CI/CD Pipeline: Verified</span>
            </div>
          </div>
        )}

        {/* Bottom Feature Card inside main panel */}
        <div className="p-4 bg-slate-950/50 border-t border-white/5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-base font-bold font-mono">
              &lt;/&gt;
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wide">Modern Development</div>
              <div className="text-[10px] text-slate-500">v2.4.0 Stable Build</div>
            </div>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 w-[72%] rounded-full"></div>
          </div>
        </div>

      </div>

      {/* 2 Bottom Feature Cards matching the Professional Polish mockup */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-900/50 p-4 sm:p-5 rounded-xl border border-white/5 flex flex-col gap-2 shadow-lg">
          <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
            <Shield className="w-4 h-4" />
          </div>
          <span className="font-bold text-white text-sm">Security First</span>
          <span className="text-xs text-slate-400 leading-relaxed">Built-in protection for every line of code we write.</span>
        </div>

        <div className="bg-slate-900/50 p-4 sm:p-5 rounded-xl border border-white/5 flex flex-col gap-2 shadow-lg">
          <div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
            <Zap className="w-4 h-4" />
          </div>
          <span className="font-bold text-white text-sm">Scalable Tech</span>
          <span className="text-xs text-slate-400 leading-relaxed">Ready to handle growth from 10 to 10M users.</span>
        </div>
      </div>

    </div>
  );
};
