import React from 'react';
import { GraduationCap, Brain, Cloud, Code, Compass, CheckCircle2, Shield } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#080b12] border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Orientation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Muhammad Huzaifa
          </h2>
          <p className="mt-2 text-base text-slate-400 max-w-3xl">
            {PROFILE.concept}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 shadow-sm space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-sky-400" />
                <span>Academic Foundation & Evolution</span>
              </h3>
              <p>
                I am currently a Software Engineering student at <strong>NED University of Engineering & Technology (NEDUET)</strong>, having successfully completed my first year. My coursework has provided a grounded foundation in object-oriented programming, algorithmic thinking, and discrete computation.
              </p>
              <p>
                Rather than limiting my education to lecture halls, I actively direct my time toward building <strong>practical, production-ready AI applications</strong>. My primary technical interest lies in <strong>Generative AI</strong> — exploring how modern foundational models can be structured with deterministic software patterns, validation schemas, and automated agent loops to solve real-world problems.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 shadow-sm space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Brain className="w-5 h-5 text-sky-400" />
                <span>The Engineering Philosophy: Truth Over Fluff</span>
              </h3>
              <p>
                I believe in building software that functions end-to-end, with explicit schemas, error handling, and clean architecture. In an industry filled with superficial buzzwords, I emphasize:
              </p>
              <ul className="space-y-2.5 pt-1">
                <li className="flex items-start space-x-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Deterministic Boundaries for LLMs:</strong> Utilizing Pydantic schemas, typed parameters, and validation guards to eliminate hallucinations.</span>
                </li>
                <li className="flex items-start space-x-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Full-Stack Ownership:</strong> Architecting backends in Python (FastAPI/Streamlit) and pairing them with high-performance responsive web interfaces in TypeScript/React.</span>
                </li>
                <li className="flex items-start space-x-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Multi-Cloud Curiosity:</strong> Active continuous study across Azure, AWS, and Google Cloud with recognized foundational certifications.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar Metrics & Technical Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Snapshot Card */}
            <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Technical Profile Snapshot
              </h4>

              <div className="divide-y divide-slate-800/80 text-sm">
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-400">Current Stage</span>
                  <span className="text-white font-medium text-right">Completed 1st Year (SE &apos;27)</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-400">University</span>
                  <span className="text-white font-medium text-right">NED University (NEDUET)</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-400">Primary Focus</span>
                  <span className="text-sky-400 font-medium text-right">Generative AI & LLMs</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-400">Core Languages</span>
                  <span className="text-white font-medium text-right">Python, C++, TypeScript</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-400">Cloud Tracks</span>
                  <span className="text-white font-medium text-right">Azure (AZ-900), AWS, GCP</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-400">Location</span>
                  <span className="text-white font-medium text-right">Pakistan</span>
                </div>
              </div>
            </div>

            {/* Target Trajectory Card */}
            <div className="p-6 rounded-xl bg-sky-950/20 border border-sky-800/40 space-y-3">
              <div className="flex items-center space-x-2 text-sky-400 text-sm font-semibold">
                <Shield className="w-4 h-4" />
                <span>Target Career Trajectory</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Actively seeking internship and trainee opportunities where strong fundamental software engineering, Python problem-solving, and generative AI prototyping can add measurable value.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {PROFILE.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-2 py-0.5 text-xs font-mono bg-sky-900/40 text-sky-200 border border-sky-700/50 rounded"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
