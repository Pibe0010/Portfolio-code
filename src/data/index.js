/**
 * Data index - Export all data files
 */

import projects from './projects.json';
import skills from './skills.json';
import certificates from './certificates.json';
import experience from './experience.json';

export { projects, skills, certificates, experience };

/**
 * Get all projects
 */
export const getProjects = () => projects.projects;

/**
 * Get project by ID
 */
export const getProjectById = (id) => projects.projects.find(p => p.id === id);

/**
 * Get all skills
 */
export const getSkills = () => skills.skills;

/**
 * Get skills by category
 */
export const getSkillsByCategory = (category) =>
  skills.skills.filter(s => s.category === category);

/**
 * Get skill categories
 */
export const getSkillCategories = () => {
  const categories = new Set(skills.skills.map(s => s.category));
  return Array.from(categories);
};

/**
 * Get all certificates
 */
export const getCertificates = () => certificates.certificates;

/**
 * Get certificate by ID
 */
export const getCertificateById = (id) =>
  certificates.certificates.find(c => c.id === id);

/**
 * Get profile data
 */
export const getProfile = () => experience.profile;

/**
 * Get studies
 */
export const getStudies = () => experience.studies;

/**
 * Get social links
 */
export const getSocial = () => experience.social;