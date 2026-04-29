import { MainLayout } from '../Layout/MainLayout.jsx';
import { CertificateCard } from '../components/ui/CertificateCard.jsx';
import { getCertificates } from '../data/index.js';
import './SerticatedPage.css';

export const SerticatedPage = () => {
  const certificates = getCertificates();

  return (
    <MainLayout>
      <section className="seticated-container">
        <h1 className="title-serticated">Certificados</h1>
        <section className="section-card">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </section>
      </section>
    </MainLayout>
  );
};

export default SerticatedPage;