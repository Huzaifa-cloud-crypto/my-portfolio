import React, { useState } from 'react';
import { X, Copy, Check, Terminal, ExternalLink, FileCode, Layers, ShieldCheck } from 'lucide-react';

interface StreamlitCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StreamlitCodeModal: React.FC<StreamlitCodeModalProps> = ({ isOpen, onClose }) => {
  const [selectedTab, setSelectedTab] = useState<
    'app.py' | 'requirements.txt' | 'config.toml' | 'secrets.toml' | 'projects.py' | 'deploy'
  >('app.py');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const fileContents: Record<string, string> = {
    'app.py': `# app.py — Streamlit Community Cloud Entry Point
import streamlit as st
from data.profile import PROFILE
from data.projects import PROJECTS
from data.skills import SKILLS_DATA
from data.certifications import CERTIFICATIONS_DATA
from components.hero import render_hero
from components.project_card import render_project_card
from components.certification_card import render_certification_card
from components.timeline import render_education_timeline
from components.footer import render_footer
from utils.helpers import load_css, fetch_github_repos
from utils.gemini import query_gemini_assistant

st.set_page_config(
    page_title="Muhammad Huzaifa | AI & Software Engineering Portfolio",
    page_icon="⚡",
    layout="wide",
)

load_css()
# Full source code is present in /app.py in this workspace!
`,
    'requirements.txt': `streamlit>=1.35.0
google-genai>=0.1.1
requests>=2.31.0
pandas>=2.0.0
pydantic>=2.5.0
python-dotenv>=1.0.0
`,
    'config.toml': `[theme]
primaryColor = "#0284c7"
backgroundColor = "#090d16"
secondaryBackgroundColor = "#111827"
textColor = "#f3f4f6"
font = "sans serif"

[server]
headless = true
enableCORS = false
enableXsrfProtection = true
port = 8501
`,
    'secrets.toml': `# .streamlit/secrets.toml
# NEVER COMMIT THIS FILE TO GITHUB!
GEMINI_API_KEY = "your-actual-google-gemini-api-key"
`,
    'projects.py': `# data/projects.py
PROJECTS = [
    {
        "id": "forgelens-ai",
        "name": "ForgeLens AI",
        "tagline": "AI Manufacturing Decision Copilot",
        "track": "Quotation & Landed-Cost Intelligence",
        "technologies": ["Python", "FastAPI", "Pydantic", "Pandas", "React", "TypeScript", "Vite"],
        "github": "https://github.com/HUZAIFA-CLOUD-CRYPTO/ForgeLens-AI",
        "status": "Prototype",
        "highlight": "Includes landed-cost calculation engine and approval workflow.",
    },
    # ... and Smart Personal CRM, RAG Assistant, n8n Agent Workflows
]
`,
    'deploy': `# Streamlit Community Cloud Deployment Guide

1. Push this entire repository to GitHub:
   git init
   git add .
   git commit -m "feat: complete Huzaifa AI & SWE portfolio"
   git remote add origin https://github.com/HUZAIFA-CLOUD-CRYPTO/portfolio.git
   git push -u origin main

2. Go to https://share.streamlit.io and Sign In with GitHub.
3. Click "New app", select your repository 'HUZAIFA-CLOUD-CRYPTO/portfolio'.
4. Set Main file path to: app.py
5. In 'Advanced settings' -> 'Secrets', enter:
   GEMINI_API_KEY = "your-google-gemini-api-key"
6. Click 'Deploy!'. Done!
`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(fileContents[selectedTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0b0f17] border border-slate-700 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0e1320] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <span>Python + Streamlit Community Cloud Codebase</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Inspect and copy the Python files created for your Streamlit deployment
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 py-2.5 bg-[#080b12] border-b border-slate-800 flex items-center justify-between overflow-x-auto gap-2">
          <div className="flex items-center space-x-2">
            {(
              [
                ['app.py', 'app.py'],
                ['requirements.txt', 'requirements.txt'],
                ['config.toml', '.streamlit/config.toml'],
                ['secrets.toml', 'secrets.toml'],
                ['projects.py', 'data/projects.py'],
                ['deploy', 'Deployment Guide'],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedTab(key)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-medium transition-colors ${
                  selectedTab === key
                    ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy File</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content Display */}
        <div className="flex-1 p-6 overflow-y-auto bg-[#07090e] font-mono text-xs text-slate-300 leading-relaxed">
          <pre className="whitespace-pre-wrap">{fileContents[selectedTab]}</pre>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#0c101a] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>All Python Streamlit files are saved in the project root (`/app.py`, `/data/`, `/components/`, `/utils/`).</span>
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
