import React, { useState } from 'react';
import { Layers, Github, ExternalLink, ChevronDown, ChevronUp, AlertCircle, Sparkles, CheckCircle, Code, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>('forgelens-ai');

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Prototype':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'Completed':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'In Progress':
        return 'bg-sky-500/10 text-sky-300 border-sky-500/30';
      case 'Learning Project':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl">
              Practical software and AI architectures designed to solve real-world domain challenges.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-xs text-slate-400 font-mono">
            Showing {PROJECTS.length} verified project architectures
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="rounded-xl bg-[#0b0f17] border border-slate-800 hover:border-slate-700/80 transition-all shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Card Top Info */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                      {project.category}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono border font-medium ${getStatusBadge(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Problem & Solution Snapshot */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-lg border border-slate-800/80">
                    <div>
                      <span className="text-rose-400 font-semibold font-mono text-xs uppercase tracking-wide mr-1.5">[Problem]</span>
                      {project.problem}
                    </div>
                    <div className="pt-1 border-t border-slate-800/60">
                      <span className="text-emerald-400 font-semibold font-mono text-xs uppercase tracking-wide mr-1.5">[Solution]</span>
                      {project.solution}
                    </div>
                  </div>

                  {/* Status Note or Technology Stack Warning */}
                  {project.statusNote && (
                    <div className="flex items-center space-x-2 text-xs text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-md">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.statusNote}</span>
                    </div>
                  )}

                  {/* Technology Badges */}
                  <div>
                    <div className="text-xs font-mono text-slate-400 mb-2">Technology Stack:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-slate-900 text-sky-300 border border-slate-800 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Technical Details */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-800/80 space-y-4 text-xs sm:text-sm text-slate-300 animate-fadeIn">
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                          Key Capabilities:
                        </h4>
                        <ul className="space-y-1.5">
                          {project.keyFeatures.map((feat, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                          Architecture / Technical Overview:
                        </h4>
                        <p className="text-slate-400 leading-relaxed bg-[#070a10] p-3 rounded border border-slate-800 font-mono text-xs">
                          {project.architectureOverview}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer & Action Bar */}
                <div className="px-6 py-4 bg-[#090d14] border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    id={`project-expand-btn-${project.id}`}
                    className="inline-flex items-center space-x-1 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <span>{isExpanded ? 'Collapse Overview' : 'View Architecture'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <div className="flex items-center space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-github-${project.id}`}
                      className="inline-flex items-center space-x-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    {project.demoUrl !== '[ADD PROJECT DEMO URL]' ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        id={`project-demo-${project.id}`}
                        className="inline-flex items-center space-x-1 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/60">
                        Demo: In Prototype
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
