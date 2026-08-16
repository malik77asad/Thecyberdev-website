import React from 'react';
import { Shield, Github, Linkedin, Instagram, ArrowUp, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#020617] border-t border-white/5 text-slate-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand & Description */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                TheCyber<span className="text-cyan-400">Dev</span>
              </span>
            </a>

            <p className="text-slate-300 text-sm font-medium">
              Cybersecurity & Digital Development Solutions
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Helping businesses build high-performance web and mobile systems while keeping digital infrastructure completely secure against evolving cyber threats.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0f172a] border border-white/10 hover:border-cyan-500/40 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="TheCyberDev LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0f172a] border border-white/10 hover:border-cyan-500/40 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="TheCyberDev GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0f172a] border border-white/10 hover:border-cyan-500/40 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="TheCyberDev Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Focus */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Core Capabilities
            </h4>
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div className="p-3 rounded-lg bg-[#0f172a] border border-white/5">
                <span className="text-cyan-400 font-bold block mb-0.5">01. Cybersecurity</span>
                <span className="text-slate-400">Audits &bull; Vulnerability Assessments &bull; WAF Defense</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0f172a] border border-white/5">
                <span className="text-emerald-400 font-bold block mb-0.5">02. Web Engineering</span>
                <span className="text-slate-400">Fast Business Sites &bull; Web Applications &bull; Portals</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0f172a] border border-white/5">
                <span className="text-blue-400 font-bold block mb-0.5">03. App Development</span>
                <span className="text-slate-400">iOS &bull; Android &bull; Custom Cloud APIs</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            &copy; 2026 TheCyberDev. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Pakistan
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0f172a] hover:bg-slate-800 border border-white/10 text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
