import "./CardProyects.css";
import github from "../../../assets/img/Socials/github_git_icon_145985.png";
import proyectTwo from "../../../../public/Proyects/pexels-monstera-production-6621323.jpg";
import wordpress from "../../../../public/Skills/wordpress-svgrepo-com.svg";
import { LinksNavigate } from "../../LinksNavigate.jsx";

export const CardTwo = () => {
  return (
    <>
      <section className="card">
        <figcaption className="container-img">
          <a href="https://lunevashop.com/">
            <img className="img" src={proyectTwo} alt="Foto mejore info" />
          </a>
        </figcaption>

        <LinksNavigate className="link-cards" to="https://lunevashop.com/">
          <h3 className="card-title ">Luneva Shop </h3>
        </LinksNavigate>
        <p className="card-descr">
          E-commerce de ventas de jabones artesanales. Puedes añadir jabones al
          carrito, comprarlos, con tres secciones stock de jabones, próximamente
          donde se añadirán nuevos productos y una sección de cuadros con resina
          epoxi.
        </p>
        <section className="card-tech">
          <img src={wordpress} className="crad-tech-img"></img>
          <a href="#">
            <img className="card-descr-tech " src={github} alt="logo github" />
          </a>
        </section>
      </section>
    </>
  );
};
