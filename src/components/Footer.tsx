import React from 'react';
import { Terminal, Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="flex items-center space-x-3">
            <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">
                Muhammad Huzaifa
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                Software Engineering @ NEDUET • Class &apos;27
              </div>
            </div>
          </div>

          {/* Socials & Channels */}
          <div className="flex items-center space-x-4">
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center space-x-4 font-mono text-[11px]">
            <span>Crafted for Python + Streamlit & Web</span>
            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
