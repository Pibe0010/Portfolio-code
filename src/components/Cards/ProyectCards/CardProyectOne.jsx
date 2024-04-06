import "./CardProyects.css";
import { UrLinks } from "../../UrLinks.jsx";
import github from "../../../assets/img/Socials/github_git_icon_145985.png";
import proyectOne from "../../../../public/Proyects/mejores-info.png";
import wordpress from "../../../../public/Skills/wordpress-svgrepo-com.svg";

export const CardOne = () => {
  return (
    <>
      <section className="card">
        <figcaption className="container-img">
          <a href="https://thegodesigshop.com/">
            <img className="img" src={proyectOne} alt="Foto mejore info" />
          </a>
        </figcaption>

        <UrLinks className="link-cards" to="https://thegodesigshop.com/">
          <h3 className="card-title ">Las mejores info </h3>
        </UrLinks>
        <p className="card-descr">
          Proporcionamos información precisa y confiable para ayudarte a tomar
          la decisión que mejor se adapte a tus necesidades. Descubre
          valoraciones de productos y opiniones genuinas.
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
