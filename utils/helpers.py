"""
FILE: utils/helpers.py
Helper functions and styling utilities for Streamlit portfolio.
"""

import streamlit as st
import requests
import datetime

def load_css():
    """Inject modern developer dark theme CSS."""
    st.markdown(
        """
        <style>
        /* Modern Tech Dark Theme Customization */
        .stApp {
            background-color: #090d16;
            color: #f3f4f6;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        /* Gradient & Typography Accents */
        .hero-title {
            font-size: 2.75rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            color: #ffffff;
            margin-bottom: 0.25rem;
            line-height: 1.15;
        }
        .hero-subtitle {
            font-size: 1.15rem;
            color: #38bdf8;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        .hero-tagline {
            font-size: 1rem;
            color: #94a3b8;
            max-width: 680px;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }

        /* Card Containers */
        .tech-card {
            background-color: #111827;
            border: 1px solid #1e293b;
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1.25rem;
            transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .tech-card:hover {
            border-color: #0284c7;
            transform: translateY(-2px);
        }

        /* Badge Pills */
        .badge-pill {
            display: inline-block;
            background-color: #1e293b;
            color: #38bdf8;
            border: 1px solid #334155;
            padding: 0.2rem 0.6rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
            margin-right: 0.4rem;
            margin-bottom: 0.4rem;
        }
        .badge-status {
            background-color: #0f2d3f;
            color: #38bdf8;
            border: 1px solid #0284c7;
        }
        .badge-level {
            background-color: #1a2233;
            color: #a5f3fc;
            border: 1px solid #164e63;
        }

        /* Terminal box */
        .terminal-box {
            background-color: #040711;
            border: 1px solid #1e293b;
            border-radius: 8px;
            padding: 1rem;
            font-family: monospace;
            font-size: 0.85rem;
            color: #38bdf8;
            margin-bottom: 1rem;
        }

        /* Footer */
        .footer-text {
            text-align: center;
            color: #64748b;
            font-size: 0.85rem;
            margin-top: 3rem;
            padding-top: 1.5rem;
            border-top: 1px solid #1e293b;
        }
        </style>
        """,
        unsafe_allow_html=True,
    )

@st.cache_data(ttl=900)
def fetch_github_repos(username="HUZAIFA-CLOUD-CRYPTO"):
    """
    Fetch public repositories for the given GitHub username.
    Cached for 15 minutes to respect GitHub rate limits.
    """
    url = f"https://api.github.com/users/{username}/repos?sort=updated&per_page=8"
    headers = {"Accept": "application/vnd.github.v3+json", "User-Agent": "Huzaifa-Portfolio"}
    try:
        response = requests.get(url, headers=headers, timeout=5)
        if response.status_code == 200:
            repos = response.json()
            return [
                {
                    "name": r.get("name"),
                    "description": r.get("description") or "No description provided.",
                    "stars": r.get("stargazers_count", 0),
                    "forks": r.get("forks_count", 0),
                    "language": r.get("language") or "Python",
                    "url": r.get("html_url"),
                    "updated_at": r.get("updated_at", "")[:10],
                }
                for r in repos
            ]
    except Exception:
        pass
    
    # Fallback repositories if API request is rate-limited or offline
    return [
        {
            "name": "ForgeLens-AI",
            "description": "AI Manufacturing Decision Copilot — Landed-cost calculation engine & quotation intelligence.",
            "stars": 4,
            "forks": 1,
            "language": "Python",
            "url": f"https://github.com/{username}/ForgeLens-AI",
            "updated_at": datetime.date.today().strftime("%Y-%m-%d"),
        },
        {
            "name": "Smart-Personal-CRM",
            "description": "AI-powered personal CRM concept designed around networking and student relationships.",
            "stars": 2,
            "forks": 0,
            "language": "TypeScript",
            "url": f"https://github.com/{username}/Smart-Personal-CRM",
            "updated_at": datetime.date.today().strftime("%Y-%m-%d"),
        },
        {
            "name": "Generative-AI-RAG-Lab",
            "description": "RAG experiments combining LangChain, ChromaDB vector search, and Gemini models.",
            "stars": 3,
            "forks": 0,
            "language": "Python",
            "url": f"https://github.com/{username}/Generative-AI-RAG-Lab",
            "updated_at": datetime.date.today().strftime("%Y-%m-%d"),
        },
        {
            "name": "AI-Automation-n8n-Pipelines",
            "description": "Autonomous workflow automations integrating LLM agents, webhooks, and REST APIs.",
            "stars": 2,
            "forks": 0,
            "language": "Python",
            "url": f"https://github.com/{username}/AI-Automation-n8n-Pipelines",
            "updated_at": datetime.date.today().strftime("%Y-%m-%d"),
        },
    ]
