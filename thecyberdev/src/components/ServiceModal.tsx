import React from 'react';
import { X, CheckCircle2, Shield, Globe, Smartphone, ArrowRight, Layers, FileText } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSelectService }) => {
  if (!service) return null;

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

  const Icon = getIcon(service.iconName);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#0f172a] border border-white/10 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">Service Specification</span>
              <span className="text-xs font-mono text-cyan-400 font-semibold">{service.title}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer border border-white/5"
            aria-label="Close Service Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          <div>
            <h3 className="text-2xl font-bold text-white">
              {service.title} Solutions
            </h3>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Capabilities */}
          <div className="p-5 rounded-xl bg-slate-950/60 border border-white/5 space-y-3">
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Full Scope of Work & Capabilities</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="p-5 rounded-xl bg-slate-950/60 border border-white/5 space-y-3">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>Client Deliverables & Standards</span>
            </div>
            <div className="space-y-2 pt-1">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-900/80 border-t border-white/10 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer border border-white/5"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onSelectService(service);
            }}
            className="px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20 transition-colors"
          >
            <span>Get Started With {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
