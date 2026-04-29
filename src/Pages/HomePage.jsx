import './Home.css';
import 'animate.css';
import { MainLayout } from '../Layout/MainLayout.jsx';
import { CurriculumnPDF } from '../components/CurriculumnPDF.jsx';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '../components/Buttons/Button.jsx';
import { DownloadBtn } from '../components/Buttons/DownloadBtn.jsx';
import { ButtonGmail } from '../components/Buttons/ButtonGmail.jsx';
import { getProfile, getSocial } from '../data/index.js';
import profileImg from '../assets/img/foto-perfil.png';

/**
 * HomePage - Modern, centered design
 */
export const HomePage = () => {
  const profile = getProfile();
  const social = getSocial();

  return (
    <MainLayout>
      <section className="home-container">
        <div className="home-hero">
          <article className="home-hero__content">
            <h1 className="home-hero__title animate__animated animate__fadeInUp">
              {profile.title || 'Desarrollador Web'}
            </h1>
            <p className="home-hero__description animate__animated animate__fadeInUp animate__delay-1">
              {profile.description}
            </p>
            <div className="home-hero__cta animate__animated animate__fadeInUp animate__delay-2">
              <ButtonGmail className="button-gmail">Contactar</ButtonGmail>

              <PDFDownloadLink
                document={<CurriculumnPDF />}
                fileName="Daniel_Montero_Castro_CV.pdf"
              >
                {({ loading }) =>
                  loading ? (
                    <Button type="button">Cargando...</Button>
                  ) : (
                    <DownloadBtn />
                  )
                }
              </PDFDownloadLink>
            </div>
          </article>

          <div className="home-hero__image animate__animated animate__fadeIn">
            <div className="home-hero__image-wrapper">
              <img 
                src={profileImg} 
                alt="Daniel Montero" 
                className="home-hero__img"
              />
            </div>
          </div>
        </div>

        <div className="home-stats">
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="home-stats__link">
            <span className="home-stats__number">GitHub</span>
            <span className="home-stats__label">Perfil</span>
          </a>
          <div className="home-stats__item">
            <span className="home-stats__number">25+</span>
            <span className="home-stats__label">Proyectos</span>
          </div>
          <div className="home-stats__item">
            <span className="home-stats__number">8+</span>
            <span className="home-stats__label">Certificados</span>
          </div>
          <div className="home-stats__item">
            <span className="home-stats__number">1+</span>
            <span className="home-stats__label">Años Exp.</span>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;