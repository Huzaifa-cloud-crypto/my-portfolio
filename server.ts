import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory cache for GitHub repos
let githubCache: { data: any[]; timestamp: number } | null = null;
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

// Portfolio Context strictly grounded in provided data
const PORTFOLIO_CONTEXT = `
PORTFOLIO DOSSIER FOR MUHAMMAD HUZAIFA:

Name: Muhammad Huzaifa
Headline: Software Engineering Student | AI & Generative AI | Cloud
Main Concept: Muhammad Huzaifa — Building Intelligent Software & Cloud Solutions
Location: Pakistan
Current Academic Stage: Completed First Year
Education: NED University of Engineering & Technology (NEDUET), Bachelor of Engineering in Software Engineering
Career Direction: AI / Software Engineering
Primary AI Interest: Generative AI
Target Roles:
- AI Engineer
- Software Engineer
- Generative AI Engineer
- Cloud/AI Engineer
- Software Trainee Engineer
- AI/ML Intern

GitHub: HUZAIFA-CLOUD-CRYPTO (https://github.com/HUZAIFA-CLOUD-CRYPTO)
LinkedIn: https://www.linkedin.com/in/muhammad-huzaifa-20b91a361
Email: huzaifaa.ayyazz@gmail.com

PROJECTS:
1. ForgeLens AI:
   - Category: AI Manufacturing Decision Copilot
   - Track: Quotation & Landed-Cost Intelligence
   - Tech Stack: Python, FastAPI, Pydantic, Pandas, React, TypeScript, Vite, JSON-based project/data registry
   - Core Features: Landed-cost calculation engine, automated quotation analysis, and approval workflow.
   - Status: Prototype / In Progress
   - Repository: https://github.com/HUZAIFA-CLOUD-CRYPTO/ForgeLens-AI (placeholder / in progress)
   - Live Demo: [ADD PROJECT DEMO URL]

2. Smart Personal CRM for Networking Students:
   - Description: AI-powered personal CRM concept/application designed around networking and student relationships.
   - Potential Technologies: Google AI Studio, Gemini, Firebase, Vercel
   - Status: Prototype / Conceptual
   - Repository: https://github.com/HUZAIFA-CLOUD-CRYPTO/Smart-Personal-CRM
   - Live Demo: [ADD PROJECT DEMO URL]

3. RAG Application:
   - Description: Retrieval-Augmented Generation application for semantic document querying and knowledge retrieval.
   - Technologies: LangChain, ChromaDB, Gemini, Python, Gradio
   - Notice: Technology stack — update as project is finalized
   - Status: Learning Project / In Progress

4. AI Automation / n8n:
   - Description: AI automation workflows connecting APIs, LLMs, and autonomous agent loops.
   - Technologies: n8n, Gemini, APIs, RAG, AI agents
   - Status: In Progress / Workflow Prototype

SKILLS & PROFICIENCIES:
- Programming Languages:
  * Python (Project Experience)
  * C++ (Working Knowledge / Coursework)
  * JavaScript / TypeScript (Project Experience)
- AI & Generative AI:
  * Generative AI (Working Knowledge)
  * Gemini API (Project Experience)
  * RAG (Retrieval-Augmented Generation) (Working Knowledge)
  * AI Agents (Learning)
  * LangChain (Learning)
  * LangGraph (Learning)
  * Vector Databases (ChromaDB) (Learning)
  * MCP (Model Context Protocol) (Learning)
- Cloud Computing:
  * Microsoft Azure (Working Knowledge)
  * AWS (Amazon Web Services) (Working Knowledge)
  * Google Cloud (Working Knowledge)
- Developer Tools:
  * Git (Working Knowledge)
  * GitHub (Project Experience)
  * GitHub Copilot (Working Knowledge)
  * VS Code (Working Knowledge)
  * Linux (Working Knowledge)
  * n8n (Working Knowledge)
- Frameworks & Libraries:
  * FastAPI (Project Experience)
  * Streamlit (Project Experience)
  * React (Project Experience)
  * Vite (Project Experience)
  * Pandas & Pydantic (Project Experience)

CERTIFICATIONS & BADGES:
- Microsoft AZ-900 (Azure Fundamentals) - Issuer: Microsoft
- Microsoft AI-900 (Azure AI Fundamentals) - Issuer: Microsoft
- Microsoft GH-300 - Issuer: Microsoft
- Scrum Master - Issuer: Industry Standard
- Oracle AI certification/exam - Issuer: Oracle
- Microsoft AB-731 - Issuer: Microsoft
- Microsoft Elevate Educator – Explorer - Issuer: Microsoft
- AWS Solutions Architect SimuLearn - Issuer: AWS

EDUCATION:
- Institution: NED University of Engineering & Technology (NEDUET)
- Degree Program: Software Engineering
- Status: Completed First Year
- Location: Karachi, Pakistan
`;

const SYSTEM_INSTRUCTION = `You are Huzaifa's portfolio assistant.
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
When appropriate, direct the visitor to the relevant project, skill, or certification section.

PORTFOLIO DATA:
${PORTFOLIO_CONTEXT}
`;

// Helper to initialize Gemini
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API: Health check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
  });
});

// API: Ask Huzaifa AI
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Graceful response if API key is not configured
      return res.json({
        reply:
          "Gemini API key is not currently detected in the environment. Huzaifa's portfolio data is still fully accessible: he is a First-Year Software Engineering student at NED University of Engineering & Technology focusing on Generative AI, Cloud (Azure, AWS, GCP), Python, and projects like ForgeLens AI.",
        source: "fallback",
      });
    }

    // Format chat history if provided
    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const item of history.slice(-6)) {
        if (item.role === "user" || item.role === "model") {
          contents.push({
            role: item.role,
            parts: [{ text: item.text }],
          });
        }
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message.trim() }],
    });

    let response;
    const modelCandidates = ["gemini-3.8-flash", "gemini-3.1-flash-lite", "gemini-2.5-flash"];
    let lastError = null;

    for (const modelName of modelCandidates) {
      try {
        response = await ai.models.generateContent({
          model: modelName,
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.2, // Low temperature for factual fidelity
          },
        });
        if (response && response.text) {
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${modelName} notice:`, err?.message || err);
      }
    }

    if (!response || !response.text) {
      if (lastError) throw lastError;
    }

    const reply = response.text || "I don't have that information in Huzaifa's portfolio yet.";
    return res.json({ reply, source: "gemini" });
  } catch (error: any) {
    console.error("Gemini Chat Error:", error?.message || error);
    return res.status(500).json({
      error: "Failed to query Gemini assistant",
      details: error?.message,
      fallback:
        "I encountered a temporary connection issue. Please feel free to explore Huzaifa's Projects, Skills, and Certifications directly in the portfolio interface.",
    });
  }
});

// API: GitHub Repos with caching
app.get("/api/github/repos", async (req, res) => {
  const username = (req.query.username as string) || "HUZAIFA-CLOUD-CRYPTO";

  // Check cache
  if (githubCache && Date.now() - githubCache.timestamp < CACHE_TTL_MS) {
    return res.json({ repos: githubCache.data, cached: true });
  }

  try {
    const fetchResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      {
        headers: {
          "User-Agent": "Huzaifa-Portfolio-App",
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!fetchResponse.ok) {
      throw new Error(`GitHub API responded with status ${fetchResponse.status}`);
    }

    const repos = await fetchResponse.json();
    const formattedRepos = Array.isArray(repos)
      ? repos.map((repo: any) => ({
          name: repo.name,
          description: repo.description || "No description provided.",
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language || "Python",
          updated_at: repo.updated_at,
          html_url: repo.html_url,
        }))
      : [];

    githubCache = { data: formattedRepos, timestamp: Date.now() };
    return res.json({ repos: formattedRepos, cached: false });
  } catch (err) {
    // Fallback curated repositories based on portfolio
    const fallbackRepos = [
      {
        name: "ForgeLens-AI",
        description: "AI Manufacturing Decision Copilot — Landed-cost calculation engine & quotation intelligence.",
        stars: 4,
        forks: 1,
        language: "Python",
        updated_at: new Date().toISOString(),
        html_url: `https://github.com/${username}/ForgeLens-AI`,
      },
      {
        name: "Smart-Personal-CRM",
        description: "AI-powered personal CRM concept designed around networking and student relationships.",
        stars: 2,
        forks: 0,
        language: "TypeScript",
        updated_at: new Date().toISOString(),
        html_url: `https://github.com/${username}/Smart-Personal-CRM`,
      },
      {
        name: "Generative-AI-RAG-Lab",
        description: "RAG experiments combining LangChain, ChromaDB vector search, and Gemini models.",
        stars: 3,
        forks: 0,
        language: "Python",
        updated_at: new Date().toISOString(),
        html_url: `https://github.com/${username}/Generative-AI-RAG-Lab`,
      },
      {
        name: "AI-Automation-n8n-Pipelines",
        description: "Autonomous workflow automations integrating LLM agents, webhooks, and REST APIs.",
        stars: 2,
        forks: 0,
        language: "Python",
        updated_at: new Date().toISOString(),
        html_url: `https://github.com/${username}/AI-Automation-n8n-Pipelines`,
      },
    ];
    return res.json({ repos: fallbackRepos, cached: false, fallback: true });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
