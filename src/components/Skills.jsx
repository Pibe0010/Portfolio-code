import { getSkills } from '../data/index.js';
import './Skills.css';

/**
 * Skills - Modern skills grid component
 */
export const Skills = () => {
  const skills = getSkills();

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',
    devops: 'DevOps',
    cms: 'CMS',
    web3: 'Web3',
    mobile: 'Mobile',
  };

  return (
    <div className="skills-container">
      <h2 className="skills-title">Habilidades</h2>
      
      <div className="skills-grid">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category__title">
              {categoryLabels[category] || category}
            </h3>
            <div className="skills-list">
              {categorySkills.map((skill) => (
                <div key={skill.id} className="skill-item">
                  <div className="skill-header">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="skill-icon"
                      loading="lazy"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-bar__fill" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;