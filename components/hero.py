"""
FILE: components/hero.py
Hero banner component for Streamlit application.
"""

import streamlit as st
from data.profile import PROFILE

def render_hero():
    """Render modern developer command center hero section."""
    col1, col2 = st.columns([2.5, 1.2])

    with col1:
        st.markdown(
            f"""
            <div style="display: inline-flex; align-items: center; gap: 8px; background: #0f172a; border: 1px solid #1e293b; padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px;">
                <span style="height: 8px; width: 8px; border-radius: 50%; background: #10b981;"></span>
                <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 500;">NEDUET SWE '27 • Generative AI & Cloud</span>
            </div>
            <h1 class="hero-title">{PROFILE["name"]}</h1>
            <div class="hero-subtitle">{PROFILE["headline"]}</div>
            <p class="hero-tagline">{PROFILE["tagline"]}</p>
            """,
            unsafe_allow_html=True,
        )

        c1, c2, c3, c4 = st.columns(4)
        with c1:
            if st.button("Explore Work →", type="primary", use_container_width=True):
                st.session_state["nav_selection"] = "Projects"
                st.rerun()
        with c2:
            st.link_button("GitHub ↗", PROFILE["github_url"], use_container_width=True)
        with c3:
            st.link_button("LinkedIn ↗", PROFILE["linkedin_url"], use_container_width=True)
        with c4:
            if st.button("Ask AI ✦", use_container_width=True):
                st.session_state["nav_selection"] = "Ask Huzaifa AI"
                st.rerun()

    with col2:
        st.markdown(
            f"""
            <div class="terminal-box">
                <div style="color: #64748b; margin-bottom: 6px;">// Developer Command Prompt</div>
                <div style="color: #38bdf8;">$ huzaifa.status()</div>
                <div style="color: #94a3b8; margin-top: 4px;">
                    &gt; Stage: First-Year SE @ NEDUET<br>
                    &gt; Track: GenAI, RAG & Cloud<br>
                    &gt; Location: Pakistan<br>
                    &gt; Engine: Python, FastAPI, React<br>
                    &gt; Target: AI / Software Engineer
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )
