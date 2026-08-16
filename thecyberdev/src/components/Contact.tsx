import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Terminal, Clock, ShieldCheck, Copy, Check } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: initialService || 'cybersecurity',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message details.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('offensivedeveloper77@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'cybersecurity',
      message: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#020617] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dots-polish opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>COMMENCE INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Work Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Tell us about your project requirements, security goals, or development vision. We're ready to engineer your solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-2xl bg-[#0f172a] border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect directly with our engineering and cybersecurity advisory team.
              </p>

              {/* Direct email card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-white/5 space-y-2">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                  Official Email
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="mailto:offensivedeveloper77@gmail.com"
                    className="text-base font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    offensivedeveloper77@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/5"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-white/5 space-y-2">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                  Operations Location
                </div>
                <div className="flex items-center gap-2 text-base font-semibold text-slate-200">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  Pakistan
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Serving international & local enterprise clients worldwide.
                </div>
              </div>

              {/* Response Time & Security Guarantee */}
              <div className="pt-2 space-y-3 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Response Time: Guaranteed within 12 business hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Strict confidentiality & NDA compliant by default</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation Callout */}
            <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 text-slate-300 text-xs leading-relaxed space-y-2">
              <div className="font-bold text-cyan-300 flex items-center gap-1.5 font-mono">
                <Terminal className="w-4 h-4" />
                Technical Scoping Call
              </div>
              <p className="text-slate-400">
                Need an immediate assessment of your application's vulnerability risk or custom development roadmap? Mention it in your message to fast-track technical triage.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0f172a] border border-white/10 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-white">
                      Message Received!
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Thank you for contacting <strong className="text-cyan-400">TheCyberDev</strong>. Our technical team is reviewing your requirements and will reply to <span className="font-mono text-cyan-300">{formData.email}</span> within 12 hours.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 text-xs font-mono font-bold transition-all cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {errorMsg && (
                    <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-600 text-sm font-sans transition-colors outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                        Business Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-600 text-sm font-sans transition-colors outline-none"
                      />
                    </div>
                  </div>

                  {/* Company & Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-company" className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Enterprises"
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-600 text-sm font-sans transition-colors outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-service" className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                        Service Required <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white text-sm font-sans transition-colors outline-none cursor-pointer"
                      >
                        <option value="cybersecurity">Cybersecurity (Audits, Pentest & Defense)</option>
                        <option value="web-development">Website Development (Responsive, Web Apps)</option>
                        <option value="app-development">App Development (iOS, Android, Custom)</option>
                        <option value="multi-discipline">Full Digital Package (Web + App + Security)</option>
                        <option value="consulting">General Technical Consulting</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Project Details & Goals <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your current systems, goals, estimated timeline, or specific vulnerabilities you would like addressed..."
                      className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-600 text-sm font-sans transition-colors outline-none resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Sending Encrypted Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] font-mono text-slate-500">
                    By submitting, your details remain strictly confidential under our privacy standards.
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
