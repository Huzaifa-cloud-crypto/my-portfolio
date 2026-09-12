# Muhammad Huzaifa — Personal AI & Software Engineering Portfolio

A production-quality developer command center and technical portfolio designed for **Muhammad Huzaifa**, Software Engineering Student at **NED University of Engineering & Technology (NEDUET)**, specializing in **Generative AI, Cloud architectures, and modern software engineering**.

---

## ⚡ Overview & Core Concept

**"Muhammad Huzaifa — Building Intelligent Software & Cloud Solutions"**

This portfolio demonstrates applied capabilities in:
* **Generative AI & LLM Engineering**: Prompt grounding, system instructions, RAG, and agentic workflows.
* **Modern Software Development**: FastAPI, Python, Pydantic, Pandas, TypeScript, React, and Vite.
* **Cloud Platforms**: Microsoft Azure (AZ-900), AWS (SimuLearn Architecture track), and Google Cloud Run.
* **Interactive AI Assistant**: Grounded Google Gemini 3.8 Flash model answering visitor questions strictly based on verified portfolio data without hallucinations.

---

## 📁 Repository & Architecture Structure

```text
.
├── app.py                      # Main Streamlit application entry point
├── requirements.txt            # Python dependencies for Streamlit Community Cloud
├── README.md                   # Complete architectural & setup documentation
├── .gitignore                  # Git ignore rules including Streamlit & Python secrets
│
├── .streamlit/
│   ├── config.toml             # Custom dark developer theme and server settings
│   └── secrets.toml.example    # Streamlit Cloud secrets template
│
├── data/
│   ├── profile.py              # Centralized user profile & contact info
│   ├── projects.py             # Structured project dossier (ForgeLens AI, CRM, RAG, etc.)
│   ├── skills.py               # Categorized skills matrix with verified proficiency tiers
│   └── certifications.py       # Industry certifications (AZ-900, AI-900, GH-300, etc.)
│
├── components/
│   ├── hero.py                 # Terminal-inspired developer hero section
│   ├── project_card.py         # Expandable technical project breakdown component
│   ├── certification_card.py   # Verified credential badges component
│   ├── timeline.py             # Academic progress timeline (NEDUET SE '27)
│   └── footer.py               # Modern portfolio footer
│
├── utils/
│   ├── helpers.py              # CSS injection and cached GitHub API loader
│   └── gemini.py               # Google GenAI client with defensive error handling
│
├── server.ts                   # Full-stack Node/Express backend with Gemini proxy
└── src/                        # Interactive React + Tailwind web experience
```

---

## 🚀 Running Locally with Streamlit

### 1. Prerequisites
Ensure you have Python 3.10+ installed.

### 2. Clone the Repository
```bash
git clone https://github.com/HUZAIFA-CLOUD-CRYPTO/portfolio.git
cd portfolio
```

### 3. Create a Virtual Environment
```bash
python3 -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate
```

### 4. Install Dependencies
```bash
pip install -r requirements.txt
```

### 5. Configure Secrets (for Gemini Assistant)
Create `.streamlit/secrets.toml` from the example template:
```bash
cp .streamlit/secrets.toml.example .streamlit/secrets.toml
```
Open `.streamlit/secrets.toml` and add your Google Gemini API key:
```toml
GEMINI_API_KEY = "AIzaSy..."
```

*(Note: The portfolio operates gracefully even without the Gemini API key, falling back with informative messages).*

### 6. Launch the Application
```bash
streamlit run app.py
```
Open your browser at `http://localhost:8501`.

---

## ☁️ Deploying to Streamlit Community Cloud

1. Push your repository to your GitHub account: **`HUZAIFA-CLOUD-CRYPTO`**.
2. Visit [share.streamlit.io](https://share.streamlit.io/) and log in with your GitHub account.
3. Click **"New app"**.
4. Select your repository: `HUZAIFA-CLOUD-CRYPTO/portfolio`.
5. Set **Main file path** to: `app.py`.
6. Click **"Advanced settings"** -> **"Secrets"**:
   Paste the following:
   ```toml
   GEMINI_API_KEY = "your-actual-gemini-api-key"
   ```
7. Click **"Deploy!"** Your portfolio will be live in under 2 minutes.

---

## ✦ "Ask Huzaifa AI" Assistant System Prompt

The assistant utilizes **Google Gemini 3.8 Flash** with strict grounding:

> "You are Huzaifa's portfolio assistant. Answer questions only from the portfolio data supplied by the application. Never fabricate experience, employment, certifications, projects, skills, awards, statistics, education, or technologies. If information is unavailable, say: 'I don't have that information in Huzaifa's portfolio yet.' Keep answers concise, professional, and useful. When appropriate, direct the visitor to the relevant project or section."

---

## ✏️ How to Customize Your Portfolio

All personal information is decoupled from UI code in the `data/` directory:

* **Profile & Socials**: Edit `data/profile.py` to change your bio, LinkedIn URL, or email.
* **Projects**: Add or edit projects in `data/projects.py`.
* **Skills**: Adjust skills and proficiency levels (`Project Experience`, `Working Knowledge`, `Learning`) in `data/skills.py`.
* **Certifications**: Add new verified credentials in `data/certifications.py`.

---

## 🛡️ Security & Privacy
* API keys are never hardcoded or committed to git.
* Sensitive academic seat numbers and private student identifiers are strictly omitted.
* Caching is applied to GitHub API requests to avoid hitting rate limits.
