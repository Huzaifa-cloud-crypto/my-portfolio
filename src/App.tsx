/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { GitHubSection } from './components/GitHubSection';
import { AskHuzaifaAI } from './components/AskHuzaifaAI';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StreamlitCodeModal } from './components/StreamlitCodeModal';

export default function App() {
  const [streamlitModalOpen, setStreamlitModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about',
        'projects',
        'skills',
        'certifications',
        'education',
        'github',
        'ask-ai',
        'contact',
      ];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-sky-500 selection:text-slate-950 font-sans">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenStreamlitModal={() => setStreamlitModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onAskAIClick={() => scrollToSection('ask-ai')}
          onExploreProjectsClick={() => scrollToSection('projects')}
        />

        <About />

        <Projects />

        <Skills />

        <Certifications />

        <Education />

        <GitHubSection />

        <AskHuzaifaAI />

        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Python Streamlit Code Inspector Modal */}
      <StreamlitCodeModal
        isOpen={streamlitModalOpen}
        onClose={() => setStreamlitModalOpen(false)}
      />
    </div>
  );
}

