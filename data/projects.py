"""
FILE: data/projects.py
Featured and active projects for Muhammad Huzaifa.
"""

PROJECTS = [
    {
        "id": "forgelens-ai",
        "name": "ForgeLens AI",
        "tagline": "AI Manufacturing Decision Copilot",
        "track": "Quotation & Landed-Cost Intelligence",
        "problem": (
            "Manufacturing estimation teams face complex landed-cost calculations, volatile raw material tariffs, "
            "and unstandardized quote approvals that risk margin erosion."
        ),
        "solution": (
            "An AI manufacturing decision copilot featuring an automated landed-cost calculation engine, "
            "structured quotation analysis, and multi-tier approval workflows."
        ),
        "technologies": [
            "Python",
            "FastAPI",
            "Pydantic",
            "Pandas",
            "React",
            "TypeScript",
            "Vite",
            "JSON-based project/data registry",
        ],
        "key_features": [
            "Deterministic landed-cost calculation engine",
            "Multi-stage quotation review and approval workflow",
            "Pydantic schema validation for contract and BOM integrity",
            "FastAPI REST backend with low-latency Pandas computation",
            "Interactive web dashboard for quote comparison",
        ],
        "architecture": (
            "FastAPI backend orchestrating calculation routines and Pydantic validation, "
            "persisting state to a structured JSON data registry, consumed via typed REST endpoints."
        ),
        "github": "https://github.com/HUZAIFA-CLOUD-CRYPTO/ForgeLens-AI",
        "demo": "[ADD PROJECT DEMO URL]",
        "status": "Prototype",
        "highlight": "Includes landed-cost calculation engine and approval workflow.",
    },
    {
        "id": "smart-personal-crm",
        "name": "Smart Personal CRM for Networking Students",
        "tagline": "AI-Powered Personal CRM for Student Networking",
        "track": "Relationship & Community Intelligence",
        "problem": (
            "University students and developers attend hackathons, seminars, and networking sessions "
            "but struggle to track follow-ups, conversation contexts, and collaborative opportunities."
        ),
        "solution": (
            "An AI-powered personal CRM concept designed around networking and student relationships, "
            "generating follow-up recommendations and structured interaction logs."
        ),
        "technologies": [
            "Google AI Studio",
            "Gemini",
            "Firebase",
            "Vercel",
        ],
        "key_features": [
            "Contact relationship indexing and context tagging",
            "Gemini-assisted follow-up suggestion generator",
            "Interaction timeline and milestone tracking",
            "Lightweight cloud persistence",
        ],
        "architecture": (
            "Google AI Studio API endpoints for conversation recap generation, "
            "paired with Firebase for persistent document storage."
        ),
        "github": "https://github.com/HUZAIFA-CLOUD-CRYPTO/Smart-Personal-CRM",
        "demo": "[ADD PROJECT DEMO URL]",
        "status": "Prototype",
        "highlight": "AI-powered CRM concept designed around networking and student relationships.",
    },
    {
        "id": "rag-application",
        "name": "RAG Knowledge Assistant",
        "tagline": "Retrieval-Augmented Generation Document Engine",
        "track": "Semantic Search & Question Answering",
        "problem": (
            "General-purpose LLMs hallucinate when queried on custom technical manuals, academic papers, "
            "or local documents without factual grounding."
        ),
        "solution": (
            "A document indexing and semantic retrieval pipeline using vector embeddings and grounded LLM generation "
            "to provide verifiable answers with exact source attribution."
        ),
        "technologies": [
            "LangChain",
            "ChromaDB",
            "Gemini",
            "Python",
            "Gradio",
        ],
        "key_features": [
            "Document ingestion & recursive chunking",
            "ChromaDB vector embedding index",
            "Similarity search context injection",
            "Strict anti-hallucination prompt guardrails",
        ],
        "architecture": (
            "Python ingestion pipeline generating ChromaDB embeddings, passing top-K retrieved chunks "
            "to Gemini for grounded synthesis.",
        ),
        "github": "https://github.com/HUZAIFA-CLOUD-CRYPTO/RAG-Knowledge-Assistant",
        "demo": "[ADD PROJECT DEMO URL]",
        "status": "Learning Project",
        "highlight": "Technology stack — update as project is finalized",
    },
    {
        "id": "ai-automation-n8n",
        "name": "AI Automation & Agent Workflows",
        "tagline": "Automated Multi-Agent Pipelines with n8n",
        "track": "Agentic Workflow Orchestration",
        "problem": (
            "Disjointed developer operations and repetitive triaging across GitHub, email, and APIs "
            "waste valuable engineering hours."
        ),
        "solution": (
            "AI automation workflows integrating webhooks, Gemini intelligence, and agent loops "
            "for autonomous event handling."
        ),
        "technologies": [
            "n8n",
            "Gemini",
            "APIs",
            "RAG",
            "AI agents",
        ],
        "key_features": [
            "Webhook-triggered event listener",
            "Autonomous Gemini summarization nodes",
            "Agent routing and conditional triggers",
            "Notification dispatch across communication channels",
        ],
        "architecture": (
            "n8n visual graph coordinating webhook events, calling Gemini APIs, "
            "and dispatching structured actions."
        ),
        "github": "https://github.com/HUZAIFA-CLOUD-CRYPTO/AI-Automation-n8n",
        "demo": "[ADD PROJECT DEMO URL]",
        "status": "In Progress",
        "highlight": "AI automation workflows using n8n, Gemini, APIs, RAG, and AI agents.",
    },
]
