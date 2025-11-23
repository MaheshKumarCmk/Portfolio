export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  techStack: string[];
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  techStack: string[];
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}