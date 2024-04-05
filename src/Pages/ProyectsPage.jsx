import "./Proyects.css";
import { MainLayout } from "../Layout/MainLayout.jsx";
import { Cards } from "../components/Cards/CardProyects.jsx";

export const ProyectsPage = () => {
  return (
    <MainLayout>
      <h1 className="title-proyect">Proyectos</h1>
      <section className="container-proyects">
        <article className="proyects">
          <Cards />
        </article>
      </section>
    </MainLayout>
  );
};
