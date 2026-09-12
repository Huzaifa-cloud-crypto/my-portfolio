"""
FILE: components/certification_card.py
Certification display component for Streamlit.
"""

import streamlit as st

def render_certification_card(cert: dict):
    """Render structured certification badge card."""
    st.markdown(
        f"""
        <div class="tech-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span class="badge-pill" style="margin: 0; background: #0e1e38; border-color: #1e3a8a; color: #93c5fd;">{cert['badge']}</span>
                <span style="font-size: 0.75rem; color: #10b981; font-weight: 600;">● {cert['date']}</span>
            </div>
            <h4 style="margin: 8px 0 4px 0; color: #ffffff; font-size: 1.05rem;">{cert['title']}</h4>
            <p style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 8px;">Issuer: {cert['issuer']}</p>
            <div style="display: flex; gap: 8px; font-size: 0.75rem; color: #64748b;">
                <span>ID: {cert['credential_id']}</span>
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )
