import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#07090e] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-2 text-base text-slate-400 leading-relaxed">
            I am actively interested in software engineering internships, Generative AI engineering roles,
            and collaborative research. Feel free to reach out directly through email or connect on LinkedIn and GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Channels Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0b0f17] border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-lg font-semibold text-white font-mono">
                // Direct Communication
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${PROFILE.email}`}
                  id="contact-email-link"
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Direct Email</div>
                      <div className="text-slate-200 font-medium group-hover:text-sky-400 transition-colors">
                        {PROFILE.email}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                </a>

                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-github-link"
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">GitHub Profile</div>
                      <div className="text-slate-200 font-medium group-hover:text-sky-400 transition-colors">
                        @{PROFILE.links.githubUsername}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                </a>

                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-linkedin-link"
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-sky-600/10 text-sky-400 border border-sky-600/20">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Professional Network</div>
                      <div className="text-slate-200 font-medium group-hover:text-sky-400 transition-colors">
                        LinkedIn Profile ↗
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                </a>

                <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center space-x-3 text-xs text-slate-400 font-mono">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Based in {PROFILE.location} • Available for Remote & Hybrid Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f17] border border-slate-800 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Transmitted!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for contacting Muhammad Huzaifa. You can also send an email directly to{' '}
                    <span className="text-sky-400 font-mono">{PROFILE.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5" htmlFor="contact-name">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full bg-[#07090e] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5" htmlFor="contact-email">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ada@domain.com"
                        className="w-full bg-[#07090e] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5" htmlFor="contact-message">
                      Project or Role Description *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Huzaifa, I reviewed your ForgeLens AI and RAG projects..."
                      className="w-full bg-[#07090e] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-md shadow-sky-500/20 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
