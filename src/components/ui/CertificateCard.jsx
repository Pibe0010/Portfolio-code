import PropTypes from 'prop-types';
import './CertificateCard.css';

/**
 * CertificateCard - Modern centered certificate card
 */
export const CertificateCard = ({ certificate }) => {
  const {
    title,
    description,
    image,
    technologies = [],
    institution,
    startDate,
    endDate,
  } = certificate;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
  };

  return (
    <article className="certificate-card">
      <figure className="certificate-card__figure">
        <img src={image} alt={title} className="certificate-card__image" loading="lazy" />
      </figure>

      <div className="certificate-card__content">
        <span className="certificate-card__institution">{institution}</span>
        <h3 className="certificate-card__title">{title}</h3>
        <p className="certificate-card__description">{description}</p>

        <div className="certificate-card__dates">
          <svg className="certificate-card__date-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
          </svg>
          <span>
            {formatDate(startDate)} - {formatDate(endDate)}
          </span>
        </div>

        <div className="certificate-card__tech">
          {technologies.map((tech, index) => (
            <span key={index} className="certificate-card__tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

CertificateCard.propTypes = {
  certificate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    institution: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }).isRequired,
};

export default CertificateCard;