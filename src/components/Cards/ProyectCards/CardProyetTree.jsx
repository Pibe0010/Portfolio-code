import "./CardProyects.css";
import github from "../../../assets/img/Socials/github_git_icon_145985.png";
import proyectTree from "../../../../public/Proyects/nave.png";
import html from "../../../../public/Skills/html-5-svgrepo-com.svg";
import css from "../../../../public/Skills/css-3-svgrepo-com.svg";
import JS from "../../../../public/Skills/javascript-svgrepo-com.svg";
import { LinksNavigate } from "../../LinksNavigate.jsx";

export const CardTree = () => {
  return (
    <section className="card">
      <figcaption className="container-img">
        <a href="https://thegodesigcode-naves.netlify.app/">
          <img className="img" src={proyectTree} alt="Foto mejore info" />
        </a>
      </figcaption>

      <LinksNavigate
        className="link-cards"
        to="https://thegodesigcode-naves.netlify.app/"
      >
        <h3 className="card-title ">Destrulle Meteoritos </h3>
      </LinksNavigate>
      <p className="card-descr">
        Destruye los meteoritos lo más rápido posible para alcanzar la mayor puntuación en
        menos de 60 segundos. Tendrás 5 vidas para lograrlo. ¡Ponte a prueba y supera este
        desafío cósmico!
      </p>
      <section className="card-tech">
        <img src={html} className="crad-tech-img" alt="Icono html"></img>
        <img src={css} className="crad-tech-img" alt="Icono css"></img>
        <img src={JS} className="crad-tech-img" alt="Icono JS"></img>
        <a href="https://github.com/Pibe0010/juego-demo-nave">
          <img className="card-descr-tech " src={github} alt="logo github" />
        </a>
      </section>
    </section>
  );
};
