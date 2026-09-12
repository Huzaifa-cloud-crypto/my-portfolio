import React from 'react';
import { ArrowRight, Github, Linkedin, Sparkles, Terminal, ShieldCheck, Layers, Cpu } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  onAskAIClick: () => void;
  onExploreProjectsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAskAIClick, onExploreProjectsClick }) => {
  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glow Elements (clean and technical, non-slop) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-cyan-600/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Information */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic & Focus Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300">
                NEDUET SWE &apos;27 <span className="text-slate-500">•</span> Generative AI & Cloud
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {PROFILE.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-sky-400">
                {PROFILE.headline}
              </p>
            </div>

            {/* Core Narrative / Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Designing and implementing production-grade Generative AI copilots, cloud-native backend systems,
              and deterministic decision engines. Building software that bridges modern foundational models with robust software engineering.
            </p>

            {/* Target Roles Pills */}
            <div className="pt-1">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                Target Roles:
              </span>
              <div className="flex flex-wrap gap-2">
                {PROFILE.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded-md"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreProjectsClick}
                id="hero-explore-projects-btn"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-md shadow-sky-500/20 active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onAskAIClick}
                id="hero-ask-ai-btn"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-slate-600 transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Ask Huzaifa AI</span>
              </button>

              <div className="flex items-center space-x-2 pl-2">
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-github-link"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-linkedin-link"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Terminal Command Center Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#0b0f17] border border-slate-800/90 shadow-2xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0f1420] border-b border-slate-800/80">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-slate-400 text-[11px] flex items-center space-x-1">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>huzaifa@neduet-workstation:~</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 space-y-3.5 text-slate-300">
                <div>
                  <span className="text-emerald-400">huzaifa@engineer</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-sky-400">~</span>
                  <span className="text-slate-400">$ whoami --verbose</span>
                </div>

                <div className="pl-2 border-l-2 border-slate-800 space-y-1.5 text-slate-300">
                  <div><span className="text-slate-400">Name:</span> Muhammad Huzaifa</div>
                  <div><span className="text-slate-400">Education:</span> NED University (BE Software Eng.)</div>
                  <div><span className="text-slate-400">Stage:</span> Completed 1st Year (SE Class &apos;27)</div>
                  <div><span className="text-slate-400">Specialization:</span> Generative AI & Cloud Architecture</div>
                  <div><span className="text-slate-400">GitHub:</span> HUZAIFA-CLOUD-CRYPTO</div>
                </div>

                <div className="pt-1">
                  <span className="text-emerald-400">huzaifa@engineer</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-sky-400">~</span>
                  <span className="text-slate-400">$ cat /etc/portfolio/flagship.json</span>
                </div>

                <div className="p-2.5 rounded bg-[#07090e] border border-slate-800/80 text-[11px] text-slate-300 leading-relaxed">
                  <span className="text-sky-300 font-semibold">{`{`}</span><br />
                  &nbsp;&nbsp;<span className="text-slate-400">&quot;project&quot;:</span> <span className="text-amber-300">&quot;ForgeLens AI&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="text-slate-400">&quot;type&quot;:</span> <span className="text-emerald-300">&quot;Manufacturing Decision Copilot&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="text-slate-400">&quot;backend&quot;:</span> <span className="text-sky-300">&quot;Python + FastAPI + Pandas&quot;</span>,<br />
                  &nbsp;&nbsp;<span className="text-slate-400">&quot;status&quot;:</span> <span className="text-purple-300">&quot;Active Prototype&quot;</span><br />
                  <span className="text-sky-300 font-semibold">{`}`}</span>
                </div>

                <div className="flex items-center space-x-2 text-slate-400 pt-1">
                  <span className="text-emerald-400">huzaifa@engineer</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-sky-400">~</span>
                  <span className="text-slate-400">$ status --deployment</span>
                </div>
                <div className="text-emerald-400 flex items-center space-x-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>All verification checks passed • Ready for collaboration</span>
                </div>
              </div>

              {/* Terminal Footer Info */}
              <div className="px-4 py-2 bg-[#090d14] border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>AZ-900 / AI-900 Certified</span>
                </span>
                <span>Python 3.10 • FastAPI • React</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
