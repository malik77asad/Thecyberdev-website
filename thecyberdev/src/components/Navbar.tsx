import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Lock, Code, Terminal } from 'lucide-react';
import cyberdevLogo from '../../assets/cyberdev-logo.png';

interface NavbarProps {
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'about',
        'services',
        'why-us',
        'projects',
        'process',
        'contact',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#020617]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-[#020617]/60 backdrop-blur-sm border-b border-white/5 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group focus:outline-none"
            aria-label="CyberDev Home"
          >
            <img
              src={cyberdevLogo}
              alt="CyberDev"
              className="w-16 h-16 sm:w-[72px] sm:h-[72px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenGetStarted}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2 rounded-lg font-semibold text-sm transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label={
                mobileMenuOpen ? 'Close Menu' : 'Open Menu'
              }
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bg-[#020617]/98 border-b border-white/10 backdrop-blur-2xl px-6 py-6 shadow-2xl transition-all animate-fadeIn">

          <div className="flex flex-col space-y-3">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20'
                    : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                }`}
              >
                <span>{link.label}</span>

                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                )}
              </a>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-white/10 space-y-3">

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full py-3 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm text-center shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Mobile Features */}
              <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2">

                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-cyan-400" />
                  Secure
                </span>

                <span>&bull;</span>

                <span className="flex items-center gap-1">
                  <Code className="w-3 h-3 text-emerald-400" />
                  Scalable
                </span>

                <span>&bull;</span>

                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-blue-400" />
                  Modern
                </span>

              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
