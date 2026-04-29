import PropTypes from 'prop-types';
import './ProjectCard.css';

/**
 * ProjectCard - Modern, centered card component
 * @param {Object} project - Project data from JSON
 */
export const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    url,
    github,
    image,
    technologies = [],
  } = project;

  return (
    <article className="project-card">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__image-link"
      >
        <figure className="project-card__figure">
          <img
            src={image}
            alt={title}
            className="project-card__img"
            loading="lazy"
          />
          <div className="project-card__overlay">
            <span className="project-card__view">Ver Proyecto</span>
          </div>
        </figure>
      </a>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <div className="project-card__tech">
          {technologies.map((tech) => (
            <span key={tech} className="project-card__tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            <svg
              className="project-card__github-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.69 1.845 1.005.825 1.365 2.115 1.665 2.505 1.665.42 0 .795-.15 1.125-.435.315-.285.84-.99 1.125-1.26-.855-.09-1.665-.435-1.665-1.74 0-.405.15-.765.42-1.035-.045-.18-.18-.405.03-.99.18-.18.48-.27.795-.285 1.23-.015 2.16.81 2.16 1.815 0 1.305.015 2.295.015 2.61 0 .225.18.39.48.39 1.155 0 2.04-.99 2.04-2.205 0-1.275-.945-2.205-2.16-2.205-1.515 0-2.34-.915-2.34-2.04 0-.855.435-1.515 1.095-1.665-.285-.24-.48-.765-.48-1.26 0-1.035.81-2.16 2.43-2.16 1.095 0 1.86.465 2.115.855.315-.21.735-.315 1.065-.3 1.14.015 2.1.45 2.235 1.275.045.27.135.555.24.795-.675.285-1.14.81-1.14 1.515 0 .9.015 1.455.015 1.65 0 .315.18.57.48.57.6.03 1.035-.54 1.035-1.425 0-.675-.255-1.305-.48-1.74.42-.18.765-.645.765-1.275z" />
            </svg>
            <span>GitHub</span>
          </a>
        )}
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string,
    github: PropTypes.string,
    image: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;