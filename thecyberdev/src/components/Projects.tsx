import React, { useState } from 'react';
import { Terminal, ExternalLink, ArrowRight, Filter, Shield, Globe, Smartphone } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { ProjectItem } from '../types';
import { ProjectVisualPlaceholder } from './ProjectVisualPlaceholder';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cybersecurity' | 'web-dev' | 'app-dev'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.categoryKey === activeFilter);

  const filters = [
    { label: 'All Projects', key: 'all' as const, icon: Filter },
    { label: 'Cybersecurity', key: 'cybersecurity' as const, icon: Shield },
    { label: 'Web Development', key: 'web-dev' as const, icon: Globe },
    { label: 'App Development', key: 'app-dev' as const, icon: Smartphone },
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#020617] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-dots-polish opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Work</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Explore recent cybersecurity implementations, responsive business websites, and scalable mobile applications built for our clients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map(filter => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{filter.label}</span>
                <span className="text-[10px] text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded">
                  {filter.key === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.categoryKey === filter.key).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => {
            const isCyber = project.categoryKey === 'cybersecurity';
            const isWeb = project.categoryKey === 'web-dev';

            const badgeColor = isCyber
              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
              : isWeb
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              : 'bg-blue-500/10 text-blue-400 border-blue-500/20';

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#0f172a] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Visual Preview Graphic */}
                  <ProjectVisualPlaceholder project={project} />

                  {/* Content Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${badgeColor}`}>
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">{project.clientType}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                      {project.shortDesc}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 border border-white/10 hover:border-cyan-400 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfolio Notice Banner */}
        <div className="mt-12 text-center p-5 rounded-xl bg-slate-900/40 border border-white/5 text-slate-400 text-xs font-mono max-w-2xl mx-auto flex items-center justify-center gap-2">
          <span>* Portfolio showcased with enterprise anonymized case studies. Full technical architecture available on request.</span>
        </div>

      </div>
    </section>
  );
};
