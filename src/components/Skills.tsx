import React, { useState } from 'react';
import { Cpu, Terminal, Sparkles, Cloud, Wrench, LayoutGrid, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillLevel } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  const getLevelBadge = (level: SkillLevel) => {
    switch (level) {
      case 'Project Experience':
        return 'bg-sky-500/15 text-sky-300 border-sky-500/30';
      case 'Working Knowledge':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'Learning':
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Terminal className="w-4 h-4 text-sky-400" />;
      case 'AI & Generative AI':
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Cloud Computing':
        return <Cloud className="w-4 h-4 text-cyan-400" />;
      case 'Developer Tools':
        return <Wrench className="w-4 h-4 text-emerald-400" />;
      case 'Frameworks & Libraries':
        return <LayoutGrid className="w-4 h-4 text-purple-400" />;
      default:
        return <Cpu className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#080b12] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills & Proficiencies
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl">
              Accurately classified into verified proficiency tiers based on real university lab coursework and practical projects.
            </p>
          </div>

          {/* Realistic Tiers Legend */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-slate-400 font-medium mr-1">Proficiency Legend:</span>
            <span className="px-2 py-0.5 rounded border bg-sky-500/15 text-sky-300 border-sky-500/30">
              Project Experience
            </span>
            <span className="px-2 py-0.5 rounded border bg-emerald-500/15 text-emerald-300 border-emerald-500/30">
              Working Knowledge
            </span>
            <span className="px-2 py-0.5 rounded border bg-purple-500/15 text-purple-300 border-purple-500/30">
              Learning
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((categoryGroup) => (
            <div key={categoryGroup.category} className="space-y-4">
              <div className="flex items-center space-x-2.5 pb-2 border-b border-slate-800/80">
                {getCategoryIcon(categoryGroup.category)}
                <h3 className="text-lg font-semibold text-white">
                  {categoryGroup.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-[#0b0f17] border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="font-semibold text-white text-sm">
                          {skill.name}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[11px] font-mono border shrink-0 ${getLevelBadge(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
