import { MainLayout } from "../Layout/MainLayout.jsx";
import { CardOne } from "../components/Cards/ProyectCards/CardProyectOne.jsx";
import { CardTwo } from "../components/Cards/ProyectCards/CardProyectTwo.jsx";
import { CardTree } from "../components/Cards/ProyectCards/CardProyetTree.jsx";
import { CardFor } from "../components/Cards/ProyectCards/CardProyectFor.jsx";
import { CardFive } from "../components/Cards/ProyectCards/CardProyectFive.jsx";
import { CardSix } from "../components/Cards/ProyectCards/CardProyectSix.jsx";
import { CardSeven } from "../components/Cards/ProyectCards/CardProyectSeven.jsx";
import { CardEight } from "../components/Cards/ProyectCards/CardProyectEight.jsx";
import { CardNinth } from "../components/Cards/ProyectCards/CardProyectNinth.jsx";
import "./StylePages/Proyects.css";
import { CardTen } from "../components/Cards/ProyectCards/CardProyectTen.jsx";
import { CardEleven } from "../components/Cards/ProyectCards/CardProjectEleven.jsx";
import { CardTweeleve } from "../components/Cards/ProyectCards/CardProjectTweeleve.jsx";

export const ProyectsPage = () => {
  return (
    <MainLayout>
      <h1 className="title-proyect">Proyectos</h1>
      <section className="container-proyects">
        <article className="proyects">
          <CardTweeleve />
          <CardEleven />
          <CardTen />
          <CardNinth />
          <CardOne />
          <CardTwo />
          <CardTree />
          <CardFor />
          <CardFive />
          <CardSix />
          <CardSeven />
          <CardEight />
        </article>
      </section>
    </MainLayout>
  );
};
