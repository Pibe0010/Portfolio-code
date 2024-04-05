import "./Serticated.css";
import { MainLayout } from "../Layout/MainLayout.jsx";
import { CardSerticated } from "../components/Cards/CardSerticated.jsx";

export const SerticatedPage = () => {
  return (
    <MainLayout>
      <section className="seticated-container">
        <h1 className="title-serticated">Sertificados Optenidos</h1>
        <section className="section-card">
          <CardSerticated />
        </section>
      </section>
    </MainLayout>
  );
};
