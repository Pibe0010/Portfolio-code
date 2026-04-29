import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '../components/ui/ProjectCard.jsx';

const mockProject = {
  id: 1,
  title: 'Test Project',
  description: 'A test project description',
  url: 'https://test.com',
  github: 'https://github.com/test',
  image: '/test image.png',
  technologies: ['React', 'Node.js'],
};

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('A test project description')).toBeInTheDocument();
  });

  it('renders all technology tags', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('renders GitHub link when provided', () => {
    render(<ProjectCard project={mockProject} />);
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test');
  });

  it('does not render GitHub link when null', () => {
    const projectWithoutGithub = { ...mockProject, github: null };
    render(<ProjectCard project={projectWithoutGithub} />);
    expect(screen.queryByRole('link', { name: /GitHub/i })).not.toBeInTheDocument();
  });

  it('has correct structure with article element', () => {
    render(<ProjectCard project={mockProject} />);
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });
});