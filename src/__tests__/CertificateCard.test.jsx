import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CertificateCard } from '../components/ui/CertificateCard.jsx';

const mockCertificate = {
  id: 1,
  title: 'Test Certificate',
  description: 'A test certificate description',
  image: '/test-certificate.png',
  technologies: ['React', 'JavaScript'],
  institution: 'Test University',
  startDate: '2023-01-01',
  endDate: '2023-06-01',
};

describe('CertificateCard', () => {
  it('renders certificate title', () => {
    render(<CertificateCard certificate={mockCertificate} />);
    expect(screen.getByText('Test Certificate')).toBeInTheDocument();
  });

  it('renders institution', () => {
    render(<CertificateCard certificate={mockCertificate} />);
    expect(screen.getByText('Test University')).toBeInTheDocument();
  });

  it('renders all technology tags', () => {
    render(<CertificateCard certificate={mockCertificate} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('formats date correctly', () => {
    render(<CertificateCard certificate={mockCertificate} />);
    // Dates should be formatted (e.g., "ene 2023 - jun 2023")
    const dateText = screen.getByText(/2023/);
    expect(dateText).toBeInTheDocument();
  });

  it('has correct structure with article element', () => {
    render(<CertificateCard certificate={mockCertificate} />);
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });
});