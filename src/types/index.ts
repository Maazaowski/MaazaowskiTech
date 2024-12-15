export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: Date;
  image?: string;
  tags: string[];
  featured: boolean;
  readingTime: number;
  comments: Comment[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  startDate: Date;
  endDate?: Date;
  status: 'ongoing' | 'completed';
}

export interface Comment {
  id: string;
  content: string;
  author: string;
  email: string;
  createdAt: Date;
  postId: string;
  parentId?: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'moderator';
}