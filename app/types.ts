export interface ProjectFile {
  name: string;
  url: string;
}

export interface Project {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  period: string;
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
