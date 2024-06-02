import { MainLayout } from "../Layout/MainLayout.jsx";
import { CardSerticatedOne } from "../components/Cards/CardSerticateds/CardSerticatedOne.jsx";
import { CardSerticatedTwo } from "../components/Cards/CardSerticateds/CardSerticatedTwo.jsx";
import { CardSerticatedTree } from "../components/Cards/CardSerticateds/CardSerticatedTree.jsx";
import { CardSerticatedFor } from "../components/Cards/CardSerticateds/CardSerticatedFor.jsx";
import { CardSerticatedFive } from "../components/Cards/CardSerticateds/CardSeticatedFive.jsx";
import { CardSerticatedSix } from "../components/Cards/CardSerticateds/CardSerticatedSix.jsx";
import "./StylePages/Serticated.css";

export const SerticatedPage = () => {
  return (
    <MainLayout>
      <section className="seticated-container">
        <h1 className="title-serticated">Sertificados Optenidos</h1>
        <section className="section-card">
          <CardSerticatedOne />
          <CardSerticatedTwo />
          <CardSerticatedTree />
          <CardSerticatedFor />
          <CardSerticatedFive />
          <CardSerticatedSix />
        </section>
      </section>
    </MainLayout>
  );
};
