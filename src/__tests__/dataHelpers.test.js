import { describe, it, expect } from 'vitest';
import { 
  getProjects, 
  getProjectById, 
  getSkills, 
  getSkillsByCategory,
  getCertificates, 
  getCertificateById,
  getProfile, 
  getStudies, 
  getSocial 
} from '../data/index.js';

describe('Data Helpers', () => {
  describe('getProjects', () => {
    it('returns array of projects', () => {
      const projects = getProjects();
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
    });

    it('has required properties', () => {
      const project = getProjects()[0];
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('url');
      expect(project).toHaveProperty('technologies');
    });
  });

  describe('getProjectById', () => {
    it('returns project by id', () => {
      const project = getProjectById(1);
      expect(project).toBeDefined();
      expect(project.id).toBe(1);
    });

    it('returns undefined for non-existent id', () => {
      const project = getProjectById(999);
      expect(project).toBeUndefined();
    });
  });

  describe('getSkills', () => {
    it('returns array of skills', () => {
      const skills = getSkills();
      expect(Array.isArray(skills)).toBe(true);
      expect(skills.length).toBeGreaterThan(0);
    });

    it('includes AI Programming skill', () => {
      const skills = getSkills();
      const aiSkill = skills.find(s => s.name === 'AI Programming');
      expect(aiSkill).toBeDefined();
      expect(aiSkill.level).toBe(85);
    });
  });

  describe('getSkillsByCategory', () => {
    it('returns skills by category', () => {
      const frontendSkills = getSkillsByCategory('frontend');
      expect(Array.isArray(frontendSkills)).toBe(true);
      frontendSkills.forEach(skill => {
        expect(skill.category).toBe('frontend');
      });
    });
  });

  describe('getCertificates', () => {
    it('returns array of certificates', () => {
      const certificates = getCertificates();
      expect(Array.isArray(certificates)).toBe(true);
      expect(certificates.length).toBeGreaterThan(0);
    });
  });

  describe('getCertificateById', () => {
    it('returns certificate by id', () => {
      const certificate = getCertificateById(1);
      expect(certificate).toBeDefined();
      expect(certificate.id).toBe(1);
    });
  });

  describe('getProfile', () => {
    it('returns profile object', () => {
      const profile = getProfile();
      expect(profile).toBeDefined();
      expect(profile).toHaveProperty('name');
      expect(profile).toHaveProperty('title');
      expect(profile).toHaveProperty('description');
    });
  });

  describe('getStudies', () => {
    it('returns array of studies', () => {
      const studies = getStudies();
      expect(Array.isArray(studies)).toBe(true);
      expect(studies.length).toBeGreaterThan(0);
    });
  });

  describe('getSocial', () => {
    it('returns social object with github', () => {
      const social = getSocial();
      expect(social).toBeDefined();
      expect(social).toHaveProperty('github');
      expect(social.github).toContain('github.com');
    });
  });
});