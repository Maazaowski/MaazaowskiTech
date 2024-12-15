import type { Project } from '../types';

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'TechMaaz Blog',
    slug: 'techmaaz-blog',
    description: 'A modern tech blog built with Astro and React',
    content: '# Full content will go here',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    tags: ['Astro', 'React', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/Maazaowski/techmaaz-blog',
    liveUrl: 'https://techmaaz.dev',
    featured: true,
    startDate: new Date('2024-01-01'),
    status: 'ongoing'
  },
  {
    id: '2',
    title: 'Project Management Dashboard',
    slug: 'project-management-dashboard',
    description: 'A comprehensive project management tool with real-time updates',
    content: '# Full content will go here',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    githubUrl: 'https://github.com/Maazaowski/project-dashboard',
    featured: true,
    startDate: new Date('2023-10-01'),
    endDate: new Date('2023-12-31'),
    status: 'completed'
  }
];

export const getAllProjects = async (): Promise<Project[]> => {
  return mockProjects;
};

export const getProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  return mockProjects.find(project => project.slug === slug);
};