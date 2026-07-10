export interface ProjectFile {
  name: string;
  url: string;
}

export type ProjectCategory = 'bts' | 'internship' | 'engineer' | 'work';

export interface Project {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription?: string;
  technologies: string[];
  period: string;
  category: ProjectCategory;
  imageUrl?: string;
  repositoryUrl?: string;
  files: ProjectFile[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl?: string;
  fileUrl: string;
}
