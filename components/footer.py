"""
FILE: components/footer.py
Footer component for Streamlit application.
"""

import streamlit as st

def render_footer():
    """Render clean developer footer."""
    st.markdown(
        """
        <div class="footer-text">
            <strong>Muhammad Huzaifa</strong> — Software Engineering Student @ NEDUET • Pakistan<br>
            Designed with Python & Streamlit • Deployable on Streamlit Community Cloud
        </div>
        """,
        unsafe_allow_html=True,
    )
