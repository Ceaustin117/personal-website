export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'ai' | 'ml' | 'cloud' | 'tools' | 'all';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  phone?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  location: string;
  contact: ContactInfo;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
} 