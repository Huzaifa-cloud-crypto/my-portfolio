import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2, Shield } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#080b12] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & University Milestones
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-2xl">
            Software Engineering undergraduate curriculum emphasizing computer science foundations and rigorous engineering practices.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-[#0b0f17] border border-slate-800 shadow-xl"
            >
              {/* Header Details */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-medium">
                      Status: {edu.stage}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {edu.institution}
                  </h3>
                  <div className="text-lg font-medium text-sky-400 mt-1">
                    {edu.degree}
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Grid: Highlights & Coursework */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                {/* Academic Highlights */}
                <div className="lg:col-span-6 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Key Milestones & Focus</span>
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {edu.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2">
                        <span className="text-sky-400 mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coursework Matrix */}
                <div className="lg:col-span-6 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center space-x-1.5">
                    <BookOpen className="w-4 h-4 text-sky-400" />
                    <span>Foundational Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800 rounded-md"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 pt-2 text-[11px] text-slate-400 font-mono">
                    <Shield className="w-3 h-3 text-emerald-400" />
                    <span>Student privacy preserved: No sensitive academic seat numbers or internal IDs exposed.</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
