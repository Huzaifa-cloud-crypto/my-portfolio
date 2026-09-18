"""
FILE: app.py
Main Streamlit Application Entry Point for Muhammad Huzaifa's Portfolio.
Deployable directly to Streamlit Community Cloud.
"""

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
import streamlit as st

# ---- FIX FOR LINE 20: WRAP THE ADSENSE CODE IN STREAMLIT MARKDOWN ----
st.markdown(
    """
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7638472632035578"
     crossorigin="anonymous"></script>
    """,
    unsafe_allow_html=True
)
# ----------------------------------------------------------------------

# Page Configuration
st.set_page_config(
    page_title="Muhammad Huzaifa | AI & Software Engineering Portfolio",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="expanded",
)

# Apply styling
load_css()

# Initialize session state for navigation
if "nav_selection" not in st.session_state:
    st.session_state["nav_selection"] = "Home"

# Sidebar Navigation
with st.sidebar:
    st.markdown(
        f"""
        <div style="padding: 10px 0 20px 0;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <div style="width: 42px; height: 42px; border-radius: 10px; background: linear-gradient(135deg, #0284c7, #1e293b); display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem; color: #fff;">
                    MH
                </div>
                <div>
                    <div style="font-weight: 700; font-size: 1.05rem; color: #fff;">{PROFILE["name"]}</div>
                    <div style="font-size: 0.75rem; color: #38bdf8;">SWE @ NEDUET</div>
                </div>
            </div>
            <div style="font-size: 0.8rem; color: #94a3b8; line-height: 1.4;">
                {PROFILE["headline"]}
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )

    st.markdown("---")

    nav_options = [
        "Home",
        "About",
        "Projects",
        "Skills",
        "Certifications",
        "Education",
        "GitHub",
        "Ask Huzaifa AI",
        "Contact",
    ]

    current_nav = st.session_state.get("nav_selection", "Home")
    default_idx = nav_options.index(current_nav) if current_nav in nav_options else 0

    selected_nav = st.radio(
        "Navigation",
        options=nav_options,
        index=default_idx,
        label_visibility="collapsed",
    )

    # Keep in sync
    if selected_nav != st.session_state["nav_selection"]:
        st.session_state["nav_selection"] = selected_nav
        st.rerun()

    st.markdown("---")
    st.markdown("**Quick Connect**")
    st.markdown(f"- 🐙 [GitHub Profile]({PROFILE['github_url']})")
    st.markdown(f"- 💼 [LinkedIn Profile]({PROFILE['linkedin_url']})")
    st.markdown(f"- ✉️ [Email Me](mailto:{PROFILE['email']})")

    st.markdown(
        f"""
        <div style="margin-top: 2rem; padding: 12px; background: #111827; border: 1px solid #1e293b; border-radius: 8px; font-size: 0.75rem; color: #94a3b8;">
            <strong style="color: #38bdf8;">Target Roles:</strong><br>
            • AI / GenAI Engineer<br>
            • Software Engineer<br>
            • Cloud/AI Engineer
        </div>
        """,
        unsafe_allow_html=True,
    )

# ROUTE RENDERING
page = st.session_state["nav_selection"]

if page == "Home":
    render_hero()

    st.markdown("### Featured Projects")
    p_col1, p_col2 = st.columns(2)
    for idx, project in enumerate(PROJECTS[:2]):
        col = p_col1 if idx % 2 == 0 else p_col2
        with col:
            render_project_card(project)

    st.markdown("### Core Technical Strengths")
    s_col1, s_col2, s_col3 = st.columns(3)
    with s_col1:
        st.markdown(
            """
            <div class="tech-card">
                <h4 style="color: #38bdf8; margin-top: 0;">Generative AI & LLMs</h4>
                <p style="font-size: 0.85rem; color: #cbd5e1;">Practical experience with Google Gemini API, RAG systems, vector indexing, and autonomous agent loops.</p>
            </div>
            """,
            unsafe_allow_html=True,
        )
    with s_col2:
        st.markdown(
            """
            <div class="tech-card">
                <h4 style="color: #38bdf8; margin-top: 0;">Applied Software Engineering</h4>
                <p style="font-size: 0.85rem; color: #cbd5e1;">Modern Python, FastAPI backends, Pydantic data modeling, Pandas computational pipelines, and TypeScript interfaces.</p>
            </div>
            """,
            unsafe_allow_html=True,
        )
    with s_col3:
        st.markdown(
            """
            <div class="tech-card">
                <h4 style="color: #38bdf8; margin-top: 0;">Cloud & Infrastructure</h4>
                <p style="font-size: 0.85rem; color: #cbd5e1;">Microsoft Azure (AZ-900), AWS Architecture fundamentals, and containerized Cloud Run deployments.</p>
            </div>
            """,
            unsafe_allow_html=True,
        )

elif page == "About":
    st.markdown("## About Muhammad Huzaifa")
    st.markdown(f"*{PROFILE['concept']}*")

    col1, col2 = st.columns([2, 1])
    with col1:
        st.markdown("### Background & Engineering Focus")
        st.markdown(PROFILE["bio"])

        st.markdown("### Target Positions")
        roles_html = "".join([f'<span class="badge-pill badge-level">{role}</span>' for role in PROFILE["target_roles"]])
        st.markdown(roles_html, unsafe_allow_html=True)

        st.markdown("### Core Principles")
        st.markdown(
            """
            - **No Resume Fluff:** Build real, functional software rather than inflated resumes.
            - **Deterministic Engineering for Stochastic AI:** Surround LLMs with robust validation, typed schemas, and error boundaries.
            - **Continuous Active Learning:** Rigorous academic progression at NEDUET paired with modern cloud & AI certifications.
            """
        )

    with col2:
        st.markdown("### Quick Facts")
        st.markdown(
            f"""
            <div class="tech-card">
                <div style="font-size: 0.85rem; margin-bottom: 8px;"><strong>Location:</strong> {PROFILE["location"]}</div>
                <div style="font-size: 0.85rem; margin-bottom: 8px;"><strong>Institution:</strong> {PROFILE["institution"]}</div>
                <div style="font-size: 0.85rem; margin-bottom: 8px;"><strong>Stage:</strong> {PROFILE["academic_stage"]}</div>
                <div style="font-size: 0.85rem; margin-bottom: 8px;"><strong>Specialty:</strong> {PROFILE["primary_ai_interest"]}</div>
                <div style="font-size: 0.85rem; margin-bottom: 8px;"><strong>Direction:</strong> {PROFILE["career_direction"]}</div>
            </div>
            """,
            unsafe_allow_html=True,
        )

elif page == "Projects":
    st.markdown("## Featured & Active Projects")
    st.markdown(
        "A selection of software and AI systems designed with practical engineering objectives."
    )

    for project in PROJECTS:
        render_project_card(project)

elif page == "Skills":
    st.markdown("## Technical Skills Matrix")
    st.markdown("Categorized with verified proficiency tiers based on coursework and project implementation.")

    # Proficiency legend
    st.markdown(
        """
        <div style="margin-bottom: 1.5rem;">
            <span class="badge-pill" style="background: #0284c7; color: white;">Project Experience</span> Hands-on production / prototype code
            <span class="badge-pill" style="background: #1e293b; color: #38bdf8; margin-left: 10px;">Working Knowledge</span> Coursework & practical familiarity
            <span class="badge-pill" style="background: #132238; color: #94a3b8; margin-left: 10px;">Learning</span> Active study & experimentation
        </div>
        """,
        unsafe_allow_html=True,
    )

    for category, skills in SKILLS_DATA.items():
        st.markdown(f"### {category}")
        cols = st.columns(min(len(skills), 3))
        for i, skill in enumerate(skills):
            with cols[i % 3]:
                st.markdown(
                    f"""
                    <div class="tech-card" style="padding: 1rem;">
                        <div style="font-weight: 600; color: #fff; font-size: 1rem;">{skill['name']}</div>
                        <span class="badge-pill badge-level" style="margin-top: 6px;">{skill['level']}</span>
                        <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 6px;">{skill['detail']}</div>
                    </div>
                    """,
                    unsafe_allow_html=True,
                )

elif page == "Certifications":
    st.markdown("## Certifications & Technical Badges")
    st.markdown("Verified technical certifications spanning Cloud platforms, AI fundamentals, and developer workflows.")

    cols = st.columns(2)
    for idx, cert in enumerate(CERTIFICATIONS_DATA):
        with cols[idx % 2]:
            render_certification_card(cert)

elif page == "Education":
    st.markdown("## Education & Academic Timeline")
    st.markdown("University coursework, fundamental software engineering milestones, and academic progression.")

    render_education_timeline()

elif page == "GitHub":
    st.markdown("## GitHub Activity & Repositories")
    st.markdown(f"Public repositories and source code for **[{PROFILE['github_username']}]({PROFILE['github_url']})**.")

    repos = fetch_github_repos(PROFILE["github_username"])

    if repos:
        r_cols = st.columns(2)
        for i, repo in enumerate(repos):
            with r_cols[i % 2]:
                st.markdown(
                    f"""
                    <div class="tech-card">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <h4 style="margin: 0; color: #ffffff;"><a href="{repo['url']}" target="_blank" style="color: #38bdf8; text-decoration: none;">{repo['name']} ↗</a></h4>
                            <span class="badge-pill">{repo['language']}</span>
                        </div>
                        <p style="font-size: 0.85rem; color: #94a3b8; margin: 8px 0;">{repo['description']}</p>
                        <div style="font-size: 0.75rem; color: #64748b;">
                            ★ {repo['stars']} Stars • ⑂ {repo['forks']} Forks • Updated: {repo['updated_at']}
                        </div>
                    </div>
                    """,
                    unsafe_allow_html=True,
                )

elif page == "Ask Huzaifa AI":
    st.markdown("## Ask Huzaifa AI (Google Gemini Assistant)")
    st.markdown(
        "Ask questions about Huzaifa's background, projects, skill proficiencies, and certifications. "
        "The assistant answers **strictly from verified portfolio data**."
    )

    st.markdown(
        """
        <div style="background: #0d1929; border: 1px solid #1e3a8a; border-radius: 8px; padding: 12px; margin-bottom: 1.5rem; font-size: 0.85rem; color: #93c5fd;">
            ✦ <strong>Strict Grounding:</strong> The assistant is instructed to never fabricate employment or experience. If information is not in Huzaifa's portfolio, it will clearly let you know.
        </div>
        """,
        unsafe_allow_html=True,
    )

    # Quick sample prompt chips
    st.markdown("**Suggested Questions:**")
    q_col1, q_col2, q_col3 = st.columns(3)
    with q_col1:
        if st.button("What is ForgeLens AI?", use_container_width=True):
            st.session_state["ai_query"] = "What is ForgeLens AI and what technologies does it use?"
    with q_col2:
        if st.button("What cloud technologies does he know?", use_container_width=True):
            st.session_state["ai_query"] = "What cloud technologies and certifications does Huzaifa have?"
    with q_col3:
        if st.button("Which project demonstrates RAG?", use_container_width=True):
            st.session_state["ai_query"] = "Which project demonstrates RAG and what is the tech stack?"

    user_query = st.text_input(
        "Your question:",
        value=st.session_state.get("ai_query", ""),
        placeholder="e.g., What are Huzaifa's target roles and academic background?",
    )

    if st.button("Ask Assistant ✦", type="primary"):
        if user_query.strip():
            with st.spinner("Querying Gemini with portfolio context..."):
                answer = query_gemini_assistant(user_query)
                st.markdown(
                    f"""
                    <div class="tech-card" style="border-color: #0284c7; background: #0c1524;">
                        <div style="font-size: 0.8rem; color: #38bdf8; font-weight: 600; margin-bottom: 8px;">✦ Ask Huzaifa AI Response:</div>
                        <div style="color: #f1f5f9; font-size: 0.95rem; line-height: 1.6;">{answer}</div>
                    </div>
                    """,
                    unsafe_allow_html=True,
                )
        else:
            st.warning("Please enter a question to ask the assistant.")

elif page == "Contact":
    st.markdown("## Get In Touch")
    st.markdown("### Let's build something useful.")
    st.markdown(
        "I am open to software engineering internships, AI/ML research collaborations, "
        "and generative AI project opportunities."
    )

    c_col1, c_col2 = st.columns([1.5, 1])

    with c_col1:
        st.markdown(
            f"""
            <div class="tech-card">
                <h4 style="color: #fff; margin-top: 0;">Direct Channels</h4>
                <p style="margin-bottom: 12px;"><strong>Email:</strong> <a href="mailto:{PROFILE['email']}" style="color: #38bdf8;">{PROFILE['email']}</a></p>
                <p style="margin-bottom: 12px;"><strong>GitHub:</strong> <a href="{PROFILE['github_url']}" target="_blank" style="color: #38bdf8;">{PROFILE['github_username']} ↗</a></p>
                <p style="margin-bottom: 12px;"><strong>LinkedIn:</strong> <a href="{PROFILE['linkedin_url']}" target="_blank" style="color: #38bdf8;">{PROFILE['linkedin_url']} ↗</a></p>
                <p style="margin-bottom: 0;"><strong>Location:</strong> {PROFILE['location']}</p>
            </div>
            """,
            unsafe_allow_html=True,
        )

    with c_col2:
        with st.form("contact_form"):
            st.markdown("**Send a Direct Message**")
            sender_name = st.text_input("Name")
            sender_email = st.text_input("Email")
            message_text = st.text_area("Message", placeholder="Tell me about your project, idea, or opportunity...")
            submit_btn = st.form_submit_button("Send Message", type="primary", use_container_width=True)

            if submit_btn:
                if sender_name and sender_email and message_text:
                    st.success("Thank you for reaching out! Huzaifa will review your message shortly.")
                else:
                    st.error("Please fill in all contact form fields.")

render_footer()
