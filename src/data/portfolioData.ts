import { Project, SkillCategory, Certification, EducationItem } from '../types';

export const PROFILE = {
  name: 'Muhammad Huzaifa',
  headline: 'Software Engineering Student | AI & Generative AI | Cloud',
  concept: 'Muhammad Huzaifa — Building Intelligent Software & Cloud Solutions',
  tagline: 'Crafting production-grade Generative AI applications, cloud infrastructure, and resilient software systems.',
  institution: 'NED University of Engineering & Technology (NEDUET)',
  academicStage: 'Completed First Year (BE Software Engineering)',
  primaryInterest: 'Generative AI & LLM Systems',
  careerDirection: 'AI / Software Engineering',
  location: 'Karachi, Pakistan',
  email: 'huzaifaa.ayyazz@gmail.com',
  targetRoles: [
    'AI Engineer',
    'Software Engineer',
    'Generative AI Engineer',
    'Cloud/AI Engineer',
    'Software Trainee Engineer',
    'AI/ML Intern',
  ],
  links: {
    githubUsername: 'HUZAIFA-CLOUD-CRYPTO',
    github: 'https://github.com/HUZAIFA-CLOUD-CRYPTO',
    linkedin: '[ADD YOUR LINKEDIN URL]',
    email: 'huzaifaa.ayyazz@gmail.com',
    portfolioUrl: 'https://github.com/HUZAIFA-CLOUD-CRYPTO',
  },
  bio: `I am a Software Engineering undergraduate at NED University of Engineering & Technology (NEDUET) with an active focus on Generative AI, Cloud architectures, and full-stack software development. 

Having completed my first year with foundational grounding in algorithms, object-oriented design, and computing principles, I actively construct practical, domain-specific AI applications — such as manufacturing landed-cost decision copilots and semantic retrieval engines. I am deeply interested in building production-ready AI workflows that bridge deterministic software engineering with stochastic LLM capabilities.`,
};

export const PROJECTS: Project[] = [
  {
    id: 'forgelens-ai',
    name: 'ForgeLens AI',
    tagline: 'AI Manufacturing Decision Copilot',
    category: 'Quotation & Landed-Cost Intelligence',
    problem:
      'Manufacturing estimation teams struggle with volatile raw material tariffs, fragmented supplier quotations, and manual landed-cost calculations that slow down bid response times and risk margin erosion.',
    solution:
      'Engineered an intelligent manufacturing decision engine with an automated landed-cost calculation pipeline, custom approval workflows, and structured project registries for quotation intelligence.',
    technologies: ['Python', 'FastAPI', 'Pydantic', 'Pandas', 'React', 'TypeScript', 'Vite', 'JSON Data Registry'],
    keyFeatures: [
      'Deterministic landed-cost calculation engine factoring duties, freight, and tooling overheads',
      'Structured approval workflow with multi-tier state checks',
      'Pydantic schema validation for contract and bill-of-materials integrity',
      'FastAPI REST backend with low-latency Pandas computation',
      'High-performance React/TypeScript UI for quote comparisons',
    ],
    architectureOverview:
      'A decoupled architecture featuring a FastAPI backend orchestrating Pandas calculation routines and Pydantic validators, persisting state to a structured JSON data registry, consumed via typed REST endpoints by a Vite-powered React client.',
    githubUrl: 'https://github.com/HUZAIFA-CLOUD-CRYPTO/ForgeLens-AI',
    demoUrl: '[ADD PROJECT DEMO URL]',
    status: 'Prototype',
    statusNote: 'Active prototype with core calculation engine and review workflow implemented.',
    featured: true,
  },
  {
    id: 'smart-personal-crm',
    name: 'Smart Personal CRM for Networking Students',
    tagline: 'AI-Assisted Networking & Relationship Management',
    category: 'Relationship Intelligence',
    problem:
      'Ambitious university students and early-career engineers attend hackathons, conferences, and meetups but lose track of follow-ups, conversation contexts, and shared project opportunities.',
    solution:
      'Designed a focused personal CRM that structures student professional networks, logs interactions, and leverages Gemini intelligence to recommend timely follow-ups and conversational context notes.',
    technologies: ['Google AI Studio', 'Gemini', 'Firebase', 'Vercel', 'TypeScript', 'Tailwind CSS'],
    keyFeatures: [
      'Contact profile indexing with affiliation, skills, and meeting context tags',
      'Gemini-powered conversation recap and follow-up suggestion generator',
      'Interaction timeline logging with reminder triggers',
      'Lightweight cloud persistence with real-time synchronization',
    ],
    architectureOverview:
      'Modern web application leveraging Gemini models via Google AI Studio API endpoints for contextual summary generation, paired with Firebase for auth and relational document storage.',
    githubUrl: 'https://github.com/HUZAIFA-CLOUD-CRYPTO/Smart-Personal-CRM',
    demoUrl: '[ADD PROJECT DEMO URL]',
    status: 'Prototype',
    statusNote: 'Concept and prototype implementation designed around student networking workflows.',
    featured: true,
  },
  {
    id: 'rag-application',
    name: 'RAG Knowledge Assistant',
    tagline: 'Retrieval-Augmented Generation Document Engine',
    category: 'Information Retrieval & GenAI',
    problem:
      'Standard LLM queries suffer from hallucinations and lack domain-specific awareness when answering questions on custom textbooks, internal notes, or technical documentation.',
    solution:
      'Developed a semantic search and RAG pipeline using vector embeddings, chunking strategies, and grounded LLM synthesis to deliver verifiable answers with exact source attribution.',
    technologies: ['LangChain', 'ChromaDB', 'Gemini', 'Python', 'Gradio'],
    keyFeatures: [
      'Document ingestion and recursive character text chunking',
      'ChromaDB vector store indexing semantic embeddings',
      'Top-K similarity search with context window synthesis',
      'Strict grounding to prevent hallucinated citations',
      'Interactive Gradio interface for rapid document testing',
    ],
    architectureOverview:
      'Python ingestion pipeline breaking raw documents into contextual chunks, indexing them in ChromaDB vector database, and executing similarity retrieval to build grounded prompts for Gemini.',
    githubUrl: 'https://github.com/HUZAIFA-CLOUD-CRYPTO/RAG-Knowledge-Assistant',
    demoUrl: '[ADD PROJECT DEMO URL]',
    status: 'Learning Project',
    statusNote: 'Technology stack — update as project is finalized.',
    featured: true,
  },
  {
    id: 'ai-automation-n8n',
    name: 'AI Automation & Agentic Pipelines',
    tagline: 'Automated Workflow Orchestration with n8n & LLMs',
    category: 'Workflow Automation & Agents',
    problem:
      'Repetitive developer operations and information triage across GitHub, email, and messaging platforms waste valuable engineering hours.',
    solution:
      'Architected end-to-end automation pipelines in n8n integrating REST APIs, Gemini multimodal prompts, and conditional agent routing for hands-off operational tasks.',
    technologies: ['n8n', 'Gemini', 'REST APIs', 'RAG', 'AI Agents', 'Webhooks'],
    keyFeatures: [
      'Event-triggered webhooks responding to GitHub commits and issues',
      'Autonomous Gemini summarization and ticket triage pipeline',
      'Agentic loops with conditional branching and failure recovery',
      'Notification dispatch across messaging channels',
    ],
    architectureOverview:
      'Modular n8n workflow graph connecting inbound webhook triggers to Python/LLM nodes, executing structured JSON transformations and automated system dispatches.',
    githubUrl: 'https://github.com/HUZAIFA-CLOUD-CRYPTO/AI-Automation-n8n',
    demoUrl: '[ADD PROJECT DEMO URL]',
    status: 'In Progress',
    statusNote: 'Active workflow automation lab integrating agent loops and external API triggers.',
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'Project Experience', description: 'FastAPI, Pandas, data processing, backend logic, Streamlit' },
      { name: 'JavaScript / TypeScript', level: 'Project Experience', description: 'Modern React, Vite, typed full-stack interfaces' },
      { name: 'C++', level: 'Working Knowledge', description: 'Algorithmic problem solving, object-oriented concepts, academic lab' },
    ],
  },
  {
    category: 'AI & Generative AI',
    skills: [
      { name: 'Generative AI', level: 'Working Knowledge', description: 'Prompt engineering, structured outputs, LLM application architecture' },
      { name: 'Gemini API', level: 'Project Experience', description: '@google/genai SDK, multimodal reasoning, system instructions' },
      { name: 'RAG (Retrieval-Augmented Generation)', level: 'Working Knowledge', description: 'Embeddings, vector indexing, similarity search' },
      { name: 'LangChain', level: 'Learning', description: 'Chains, prompt templates, memory, document loaders' },
      { name: 'LangGraph', level: 'Learning', description: 'Stateful multi-actor agent workflows and cycles' },
      { name: 'Vector Databases (ChromaDB)', level: 'Learning', description: 'Embedding storage, cosine similarity indexing' },
      { name: 'AI Agents', level: 'Learning', description: 'Autonomous task execution and tool calling loops' },
      { name: 'MCP (Model Context Protocol)', level: 'Learning', description: 'Client-server architecture for contextual tool sharing' },
    ],
  },
  {
    category: 'Cloud Computing',
    skills: [
      { name: 'Microsoft Azure', level: 'Working Knowledge', description: 'AZ-900 certified fundamentals, Azure AI Services' },
      { name: 'Amazon Web Services (AWS)', level: 'Working Knowledge', description: 'Cloud fundamentals, AWS SimuLearn architecting track' },
      { name: 'Google Cloud Platform (GCP)', level: 'Working Knowledge', description: 'Cloud Run deployment, Google AI Studio integration' },
    ],
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'Git & GitHub', level: 'Project Experience', description: 'Version control, branch workflows, GH-300 foundation' },
      { name: 'VS Code', level: 'Working Knowledge', description: 'Primary IDE, debugging, extensions, container dev' },
      { name: 'GitHub Copilot', level: 'Working Knowledge', description: 'AI-assisted coding and test scaffolding' },
      { name: 'Linux', level: 'Working Knowledge', description: 'Command-line navigation, Bash scripting, process management' },
      { name: 'n8n', level: 'Working Knowledge', description: 'Visual automation nodes, API chaining, webhook listeners' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'FastAPI', level: 'Project Experience', description: 'High-speed Python REST APIs with automatic OpenAPI docs' },
      { name: 'Streamlit', level: 'Project Experience', description: 'Rapid AI application prototyping, dashboard development' },
      { name: 'React & Vite', level: 'Project Experience', description: 'Component-driven frontends, state hooks, responsive styling' },
      { name: 'Pydantic & Pandas', level: 'Project Experience', description: 'Data modeling, schema enforcement, tabular calculations' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'az-900',
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: 'Verified',
    credentialId: '[ADD CREDENTIAL ID]',
    credentialUrl: '[ADD CERTIFICATE URL]',
    badgeCode: 'AZ-900',
    category: 'Cloud',
  },
  {
    id: 'ai-900',
    name: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    date: 'Verified',
    credentialId: '[ADD CREDENTIAL ID]',
    credentialUrl: '[ADD CERTIFICATE URL]',
    badgeCode: 'AI-900',
    category: 'AI',
  },
  {
    id: 'gh-300',
    name: 'Microsoft GH-300: GitHub Foundations',
    issuer: 'Microsoft / GitHub',
    date: 'Verified',
    credentialId: '[ADD CREDENTIAL ID]',
    credentialUrl: '[ADD CERTIFICATE URL]',
    badgeCode: 'GH-300',
    category: 'Software',
  },
  {
    id: 'scrum-master',
    name: 'Scrum Master Certification',
    issuer: 'Industry Recognized',
    date: 'Verified',
    credentialId: '[ADD CREDENTIAL ID]',
    credentialUrl: '[ADD CERTIFICATE URL]',
    badgeCode: 'SCRUM-M',
    category: 'Methodology',
  },
  {
    id: 'oracle-ai',
    name: 'Oracle Cloud Infrastructure AI Certified',
    issuer: 'Oracle',
    date: 'Verified',
    credentialId: '[ADD CREDENTIAL ID]',
    credentialUrl: '[ADD CERTIFICATE URL]',
    badgeCode: 'OCI-AI',
    category: 'AI',
  },
  {
    id: 'ms-ab-731',
    name: 'Microsoft AB-731 Certification',
    issuer: 'Microsoft',
    date: 'Verified',
    credentialId: '[ADD CREDENTIAL ID]',
    credentialUrl: '[ADD CERTIFICATE URL]',
    badgeCode: 'AB-731',
    category: 'Software',
  },
  {
    id: 'ms-elevate-educator',
    name: 'Microsoft Elevate Educator – Explorer',
    issuer: 'Microsoft',
    date: 'Verified',
    credentialId: '[ADD CREDENTIAL ID]',
    credentialUrl: '[ADD CERTIFICATE URL]',
    badgeCode: 'MS-ELEVATE',
    category: 'Software',
  },
  {
    id: 'aws-simulearn',
    name: 'AWS Solutions Architect SimuLearn',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Completed',
    credentialId: '[ADD CREDENTIAL ID]',
    credentialUrl: '[ADD CERTIFICATE URL]',
    badgeCode: 'AWS-SIMU',
    category: 'Cloud',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'NED University of Engineering & Technology (NEDUET)',
    degree: 'Bachelor of Engineering in Software Engineering',
    stage: 'Completed First Year (Class of 2027)',
    period: '2023 — Present',
    location: 'Karachi, Pakistan',
    highlights: [
      'Comprehensive first-year curriculum spanning computing fundamentals, programming paradigms, and mathematical logic.',
      'Active participation in student technical discussions, hands-on software development, and AI engineering self-study.',
      'Maintaining strong academic standing while executing practical prototypes in GenAI and modern web frameworks.',
    ],
    coursework: [
      'Object-Oriented Programming (C++)',
      'Fundamentals of Computer Programming',
      'Discrete Mathematics',
      'Linear Algebra & Calculus',
      'Digital Logic & Computer Organization',
      'Applied Software Engineering Practices',
    ],
  },
];
