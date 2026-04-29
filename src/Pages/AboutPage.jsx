import './About.css';
import { MainLayout } from '../Layout/MainLayout.jsx';
import { Skills } from '../components/Skills.jsx';
import { getProfile, getStudies } from '../data/index.js';
import profileImg from '../assets/img/foto-perfil.png';

/**
 * AboutPage - Modern centered design
 */
export const AboutPage = () => {
  const profile = getProfile();
  const studies = getStudies();

  return (
    <MainLayout>
      <section className="about-container">
        <h1 className="about-title">Sobre Mí</h1>
        
        <div className="about-hero">
          <div className="about-hero__image">
            <img src={profileImg} alt={profile.name} />
          </div>
          
          <div className="about-hero__content">
            <p className="about-hero__text">{profile.description}</p>
          </div>
        </div>

        <div className="about-studies">
          <h2 className="about-section-title">Formación</h2>
          <div className="about-studies__list">
            {studies.map((study) => (
              <div key={study.id} className="about-study__card">
                <span className="about-study__period">{study.period}</span>
                <h3 className="about-study__title">{study.title}</h3>
                <span className="about-study__institution">{study.institution}</span>
                <div className="about-study__tech">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="about-study__tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-skills">
          <Skills />
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;