import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';
import { ProjectVisualPlaceholder } from './ProjectVisualPlaceholder';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProjectForContact: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onSelectProjectForContact }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#0f172a] border border-white/10 shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500">&bull; {project.clientType}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer border border-white/5"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Visual Header */}
        <div className="relative">
          <ProjectVisualPlaceholder project={project} />
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          {/* Challenge vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
              <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>The Challenge</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>The Engineered Solution</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Verified Results & Key Outcomes:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.keyMetrics.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-cyan-500/20 text-center font-mono">
                  <span className="text-xs font-bold text-cyan-300 block">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Stack & Technologies:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-950 border border-white/5 text-xs font-mono text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
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
              onSelectProjectForContact(project.title);
            }}
            className="px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20 transition-colors"
          >
            <span>Request Similar Solution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
