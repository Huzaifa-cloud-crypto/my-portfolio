import React from 'react';
import { Award, ShieldCheck, ExternalLink, CheckCircle, Cloud, Sparkles, Binary } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const getCategoryTag = (category: string) => {
    switch (category) {
      case 'Cloud':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
      case 'AI':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
      case 'Methodology':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
      case 'Software':
        return 'bg-sky-500/10 text-sky-300 border-sky-500/20';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-[#07090e] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Certifications & Badges
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl">
              Industry and academic credentials demonstrating verified competency in Cloud, AI, and developer practices.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-xs font-mono text-emerald-400 flex items-center space-x-1.5">
            <CheckCircle className="w-4 h-4" />
            <span>{CERTIFICATIONS.length} Credentials Verified</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-xl bg-[#0b0f17] border border-slate-800/90 hover:border-slate-700 transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700">
                    {cert.badgeCode}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getCategoryTag(cert.category)}`}>
                    {cert.category}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-semibold text-white text-sm line-clamp-2 mb-1.5" title={cert.name}>
                  {cert.name}
                </h3>
                <div className="text-xs text-slate-400 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Issuer: {cert.issuer}</span>
                </div>
              </div>

              {/* Credential ID / Verification Link */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span title={cert.credentialId}>
                  {cert.credentialId === '[ADD CREDENTIAL ID]' ? 'ID: Pending Input' : `ID: ${cert.credentialId}`}
                </span>

                {cert.credentialUrl !== '[ADD CERTIFICATE URL]' ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-400 hover:text-sky-300 flex items-center space-x-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-emerald-400 font-sans font-medium text-xs">
                    ● Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
