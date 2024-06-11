import "./CardProyects.css";
import github from "../../../assets/img/Socials/github_git_icon_145985.png";
import proyectFive from "../../../../public/Proyects/raz3r.png";
import html from "../../../../public/Skills/html-5-svgrepo-com.svg";
import css from "../../../../public/Skills/css-3-svgrepo-com.svg";
import JS from "../../../../public/Skills/javascript-svgrepo-com.svg";
import { LinksNavigate } from "../../LinksNavigate.jsx";

export const CardFive = () => {
  return (
    <section className="card">
      <figcaption className="container-img">
        <a href="https://thegodesigs-juego-phaser3.netlify.app/">
          <img className="img" src={proyectFive} alt="Foto mejore info" />
        </a>
      </figcaption>
      <LinksNavigate
        className="link-cards"
        to="https://thegodesigs-juego-phaser3.netlify.app/"
      >
        <h3 className="card-title ">Phaser 3 </h3>
      </LinksNavigate>
      <p className="card-descr">
        Embárcate en la aventura de recolectar estrellas a lo largo de la
        pantalla. Al acumular 120 puntos, avanzarás al siguiente nivel. Pero
        cuidado: una bomba caerá, y si chocas con ella, será el fin del juego.
      </p>
      <section className="card-tech">
        <img src={html} className="crad-tech-img"></img>
        <img src={css} className="crad-tech-img"></img>
        <img src={JS} className="crad-tech-img"></img>
        <a href="https://github.com/Pibe0010/Juego-Phaser3">
          <img className="card-descr-tech " src={github} alt="logo github" />
        </a>
      </section>
    </section>
  );
};
