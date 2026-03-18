// src/types/index.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  image: string;
}