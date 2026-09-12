"""
FILE: utils/gemini.py
Google Gemini Assistant utility for Ask Huzaifa AI in Streamlit.
"""

import os
import streamlit as st

SYSTEM_INSTRUCTION = """You are Huzaifa's portfolio assistant.
Answer questions only from the portfolio data supplied by the application below.

Never fabricate:
- experience
- employment
- certifications
- projects
- skills
- awards
- statistics
- education
- technologies

If information is unavailable, say:
"I don't have that information in Huzaifa's portfolio yet."

Keep answers concise, professional, and useful.
When appropriate, direct the visitor to the relevant project or section.

PORTFOLIO INFORMATION:
Name: Muhammad Huzaifa
Education: Software Engineering Student at NED University of Engineering & Technology (NEDUET)
Stage: Completed First Year
Career Direction: AI / Software Engineering
Primary AI Interest: Generative AI
Location: Pakistan
Target Roles: AI Engineer, Software Engineer, Generative AI Engineer, Cloud/AI Engineer, Software Trainee Engineer, AI/ML Intern
GitHub: HUZAIFA-CLOUD-CRYPTO (https://github.com/HUZAIFA-CLOUD-CRYPTO)
LinkedIn: [ADD YOUR LINKEDIN URL]
Email: huzaifaa.ayyazz@gmail.com

Projects:
1. ForgeLens AI: AI Manufacturing Decision Copilot (Quotation & Landed-Cost Intelligence). Tech: Python, FastAPI, Pydantic, Pandas, React, TypeScript, Vite, JSON data registry. Includes landed-cost calculation engine and approval workflow.
2. Smart Personal CRM for Networking Students: AI-powered personal CRM concept/application designed around networking and student relationships. Potential Tech: Google AI Studio, Gemini, Firebase, Vercel.
3. RAG Application: Semantic document search and retrieval engine. Tech: LangChain, ChromaDB, Gemini, Python, Gradio. Status: Learning Project / Technology stack — update as project is finalized.
4. AI Automation / n8n: Automation workflows connecting APIs, LLMs, and agent loops. Tech: n8n, Gemini, APIs, RAG, AI agents.

Skills:
- Programming: Python (Project Experience), C++ (Working Knowledge / Coursework), JavaScript / TypeScript (Project Experience)
- AI & GenAI: Generative AI (Working Knowledge), Gemini API (Project Experience), RAG (Working Knowledge), AI Agents (Learning), LangChain (Learning), LangGraph (Learning), Vector Databases (Learning), MCP (Learning)
- Cloud: Microsoft Azure (Working Knowledge), AWS (Working Knowledge), Google Cloud (Working Knowledge)
- Developer Tools: Git (Working Knowledge), GitHub (Project Experience), GitHub Copilot (Working Knowledge), VS Code (Working Knowledge), Linux (Working Knowledge), n8n (Working Knowledge)
- Frameworks: FastAPI (Project Experience), Streamlit (Project Experience), React (Project Experience), Vite (Project Experience)

Certifications:
- Microsoft AZ-900 (Azure Fundamentals)
- Microsoft AI-900 (Azure AI Fundamentals)
- Microsoft GH-300 (GitHub Foundations)
- Scrum Master
- Oracle AI certification/exam
- Microsoft AB-731
- Microsoft Elevate Educator – Explorer
- AWS Solutions Architect SimuLearn
"""

def get_api_key():
    """Retrieve Gemini API key safely from Streamlit secrets or environment."""
    try:
        if "GEMINI_API_KEY" in st.secrets:
            return st.secrets["GEMINI_API_KEY"]
    except Exception:
        pass
    return os.environ.get("GEMINI_API_KEY", "")

def query_gemini_assistant(user_prompt: str, chat_history=None) -> str:
    """
    Send prompt to Google Gemini model.
    Falls back gracefully if key is missing or an error occurs.
    """
    api_key = get_api_key()
    if not api_key:
        return (
            "The Gemini API key is currently not configured in Streamlit Secrets (`.streamlit/secrets.toml`). "
            "However, you can explore Huzaifa's verified portfolio directly: he is a First-Year Software Engineering "
            "student at NEDUET specializing in Generative AI, Cloud architectures, and projects including ForgeLens AI."
        )

    try:
        from google import genai

        client = genai.Client(api_key=api_key)
        
        # Build prompt with system instruction
        full_prompt = f"{SYSTEM_INSTRUCTION}\n\nVisitor Question: {user_prompt}\nAssistant Answer:"
        
        response = client.models.generate_content(
            model="gemini-3.8-flash",
            contents=full_prompt,
        )
        return response.text or "I don't have that information in Huzaifa's portfolio yet."
    except Exception as e:
        # Graceful fallback without crashing
        return (
            f"I encountered a temporary service notice while querying the assistant. "
            f"Please feel free to browse Huzaifa's Projects, Skills, and Certifications sections in the portfolio menu."
        )
