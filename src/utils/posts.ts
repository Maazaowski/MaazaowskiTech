import type { Post } from '../types';

// Temporary mock data until we implement the backend
const mockPosts: Post[] = [
  {
    title: 'Building a Modern Tech Blog with Astro',
    slug: 'building-modern-tech-blog-astro',
    excerpt: 'Learn how I built this blog using Astro, React, and Tailwind CSS. A deep dive into the architecture and design decisions.',
    content: '# Full content will go here',
    publishDate: new Date('2024-02-10'),
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['Astro', 'Web Development', 'Tutorial'],
    featured: true,
    readingTime: 5
  },
  {
    title: 'The Power of TypeScript in Modern Development',
    slug: 'power-of-typescript',
    excerpt: 'Why TypeScript has become an essential tool in modern web development and how it can improve your code quality.',
    content: '# Full content will go here',
    publishDate: new Date('2024-02-08'),
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    tags: ['TypeScript', 'Programming', 'Best Practices'],
    featured: true,
    readingTime: 7
  },
  {
    title: 'Mastering Git Workflows',
    slug: 'mastering-git-workflows',
    excerpt: 'A comprehensive guide to Git workflows, branching strategies, and collaboration best practices.',
    content: '# Full content will go here',
    publishDate: new Date('2024-02-05'),
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498',
    tags: ['Git', 'DevOps', 'Tutorial'],
    featured: true,
    readingTime: 6
  }
];

export const getFeaturedPosts = async (): Promise<Post[]> => {
  // In the future, this will fetch from your backend
  return mockPosts.filter(post => post.featured);
};

export const getAllPosts = async (): Promise<Post[]> => {
  // In the future, this will fetch from your backend
  return mockPosts;
};

export const getPostBySlug = async (slug: string): Promise<Post | undefined> => {
  // In the future, this will fetch from your backend
  return mockPosts.find(post => post.slug === slug);
};