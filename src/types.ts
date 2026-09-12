export type SkillLevel = 'Project Experience' | 'Working Knowledge' | 'Learning';

export type ProjectStatus = 'Completed' | 'In Progress' | 'Prototype' | 'Learning Project';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  architectureOverview: string;
  githubUrl: string;
  demoUrl: string;
  status: ProjectStatus;
  statusNote?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: SkillLevel;
    description?: string;
  }[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  badgeCode: string;
  category: 'Cloud' | 'AI' | 'Methodology' | 'Software';
}

export interface EducationItem {
  institution: string;
  degree: string;
  stage: string;
  period: string;
  location: string;
  highlights: string[];
  coursework: string[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  updated_at: string;
  html_url: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isStreaming?: boolean;
}
