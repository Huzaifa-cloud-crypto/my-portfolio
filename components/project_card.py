"""
FILE: components/project_card.py
Project card presentation component for Streamlit.
"""

import streamlit as st

def render_project_card(project: dict):
    """Render an individual structured project card with badges and expandable details."""
    with st.container():
        st.markdown(
            f"""
            <div class="tech-card">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <div>
                        <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #38bdf8; font-weight: 600;">{project.get("track", "Engineering")}</span>
                        <h3 style="margin: 2px 0 6px 0; font-size: 1.35rem; color: #ffffff;">{project["name"]}</h3>
                    </div>
                    <span class="badge-pill badge-status">{project["status"]}</span>
                </div>
                <p style="color: #cbd5e1; font-size: 0.95rem; margin-bottom: 12px; font-weight: 500;">{project["tagline"]}</p>
                <div style="margin-bottom: 12px;">
                    {"".join([f'<span class="badge-pill">{t}</span>' for t in project["technologies"]])}
                </div>
            </div>
            """,
            unsafe_allow_html=True,
        )

        with st.expander(f"View Technical Breakdown: {project['name']}", expanded=False):
            st.markdown(f"**Problem Statement:**\n{project['problem']}")
            st.markdown(f"**Engineered Solution:**\n{project['solution']}")
            st.markdown(f"**Technical Architecture:**\n{project['architecture']}")

            st.markdown("**Key Capabilities:**")
            for feat in project["key_features"]:
                st.markdown(f"- {feat}")

            if project.get("highlight"):
                st.info(f"**Note:** {project['highlight']}")

            btn_col1, btn_col2 = st.columns(2)
            with btn_col1:
                st.link_button("View Repository ↗", project["github"], use_container_width=True)
            with btn_col2:
                if project["demo"] == "[ADD PROJECT DEMO URL]":
                    st.button(f"Demo ({project['status']})", disabled=True, use_container_width=True, key=f"demo_{project['id']}")
                else:
                    st.link_button("Live Demo ↗", project["demo"], use_container_width=True)
