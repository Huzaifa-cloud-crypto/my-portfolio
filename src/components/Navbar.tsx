import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, MessageSquareCode, Menu, X, ExternalLink, Code2 } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenStreamlitModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenStreamlitModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'GitHub', href: '#github' },
    { label: 'Ask AI', href: '#ask-ai' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a
            href="#"
            id="nav-logo"
            className="flex items-center space-x-2.5 text-slate-100 hover:text-sky-400 transition-colors group"
          >
            <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:border-sky-500/40">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-mono font-semibold text-sm tracking-tight">
              huzaifa<span className="text-sky-400">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    isActive
                      ? 'text-sky-400 bg-sky-500/10 border border-sky-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label === 'Ask AI' && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse mr-1.5" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenStreamlitModal}
              id="nav-streamlit-code-btn"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-slate-800/80 hover:bg-slate-750 text-slate-200 border border-slate-700 hover:border-slate-600 transition-colors"
              title="Inspect Python Streamlit Cloud source code"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Streamlit App.py</span>
            </button>

            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              id="nav-github-link"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              id="nav-contact-cta"
              className="inline-flex items-center px-3.5 py-1.5 rounded-md text-xs font-medium bg-sky-600 hover:bg-sky-500 text-white shadow-sm transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenStreamlitModal}
              className="p-1.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 text-xs flex items-center space-x-1"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-[10px]">.py</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d14] border-b border-slate-800 px-4 pt-2 pb-5 space-y-1 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStreamlitModal();
              }}
              className="flex items-center space-x-2 text-xs font-mono text-amber-300 bg-amber-500/10 px-3 py-2 rounded-md border border-amber-500/20 w-full justify-center"
            >
              <Code2 className="w-4 h-4" />
              <span>Inspect Python Streamlit App.py</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
