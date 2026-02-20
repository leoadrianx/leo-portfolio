export interface Project {
  id?: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
}