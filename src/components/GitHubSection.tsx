import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, Code2, RefreshCw, Clock } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { GitHubRepo } from '../types';

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCached, setIsCached] = useState(false);

  const fetchRepos = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/github/repos?username=${PROFILE.links.githubUsername}`);
      const data = await res.json();
      if (data && data.repos) {
        setRepos(data.repos);
        setIsCached(Boolean(data.cached));
      }
    } catch (err) {
      console.error('Failed to load GitHub repos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-20 bg-[#07090e] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
              <Github className="w-3.5 h-3.5" />
              <span>Source Code & Open Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              GitHub Repositories
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl">
              Public code repositories, system prototypes, and development experiments for{' '}
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-sky-400 hover:underline font-mono"
              >
                @{PROFILE.links.githubUsername}
              </a>
              .
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <button
              onClick={fetchRepos}
              disabled={loading}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors disabled:opacity-50"
              title="Refresh repository cache"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>{loading ? 'Refreshing...' : 'Refresh'}</span>
            </button>

            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Open GitHub ↗</span>
            </a>
          </div>
        </div>

        {/* Repos Grid */}
        {loading && repos.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="p-5 rounded-xl bg-[#0b0f17] border border-slate-800/80 animate-pulse h-36"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                id={`repo-card-${repo.name}`}
                className="p-5 rounded-xl bg-[#0b0f17] border border-slate-800/90 hover:border-sky-500/40 hover:bg-[#0e131e] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-mono text-sm font-semibold text-white group-hover:text-sky-400 transition-colors flex items-center gap-1.5">
                      <Code2 className="w-4 h-4 text-slate-500 group-hover:text-sky-400 shrink-0" />
                      <span className="truncate">{repo.name}</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 shrink-0 transition-colors" />
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1 text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />
                      <span>{repo.language}</span>
                    </span>

                    <span className="flex items-center space-x-1 text-slate-400">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span>{repo.stars}</span>
                    </span>

                    <span className="flex items-center space-x-1 text-slate-400">
                      <GitFork className="w-3 h-3 text-slate-500" />
                      <span>{repo.forks}</span>
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-600">
                    {repo.updated_at.slice(0, 10)}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
