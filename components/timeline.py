"""
FILE: components/timeline.py
Education timeline presentation component.
"""

import streamlit as st

def render_education_timeline():
    """Render verified academic timeline for NEDUET."""
    st.markdown(
        """
        <div class="tech-card">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
                <h3 style="margin: 0; color: #ffffff; font-size: 1.25rem;">NED University of Engineering & Technology (NEDUET)</h3>
                <span class="badge-pill" style="background: #14291e; border-color: #166534; color: #4ade80;">Active Student</span>
            </div>
            <div style="color: #38bdf8; font-weight: 600; font-size: 0.95rem; margin-bottom: 4px;">
                Bachelor of Engineering in Software Engineering (BE-SE)
            </div>
            <div style="color: #64748b; font-size: 0.85rem; margin-bottom: 12px;">
                2023 — Present • Karachi, Pakistan • <strong>Status: Completed First Year</strong>
            </div>
            <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.6; margin-bottom: 12px;">
                Rigorous computer science and software engineering curriculum. Academic foundation covers 
                object-oriented programming, algorithmic thinking, discrete mathematical structures, and digital computation.
            </p>
            <div style="background: #090d16; border: 1px solid #1e293b; border-radius: 8px; padding: 12px;">
                <span style="font-size: 0.75rem; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Relevant Coursework:</span>
                <div style="margin-top: 6px;">
                    <span class="badge-pill">Object-Oriented Programming (C++)</span>
                    <span class="badge-pill">Fundamentals of Computer Programming</span>
                    <span class="badge-pill">Discrete Mathematics</span>
                    <span class="badge-pill">Calculus & Linear Algebra</span>
                    <span class="badge-pill">Digital Logic Design</span>
                    <span class="badge-pill">Software Engineering Foundations</span>
                </div>
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )
