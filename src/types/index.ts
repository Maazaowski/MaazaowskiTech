export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: Date;
  image?: string;
  tags: string[];
  featured: boolean;
  readingTime: number;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}