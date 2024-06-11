import "./CardProyects.css";
import github from "../../../assets/img/Socials/github_git_icon_145985.png";
import proyectSix from "../../../../public/Proyects/snake.webp";
import html from "../../../../public/Skills/html-5-svgrepo-com.svg";
import css from "../../../../public/Skills/css-3-svgrepo-com.svg";
import JS from "../../../../public/Skills/javascript-svgrepo-com.svg";
import { LinksNavigate } from "../../LinksNavigate.jsx";

export const CardSix = () => {
  return (
    <section className="card">
      <figcaption className="container-img">
        <a href="https://thegodesigcode-snake.netlify.app/">
          <img className="img" src={proyectSix} alt="Foto mejore info" />
        </a>
      </figcaption>
      <LinksNavigate
        className="link-cards"
        to="https://thegodesigcode-snake.netlify.app/"
      >
        <h3 className="card-title ">Snake</h3>
      </LinksNavigate>
      <p className="card-descr">
        Sumérgete en el clásico juego de Snake, donde controlas una serpiente y
        debes recolectar todas las frutas para alcanzar la mayor puntuación
        posible. ¡Demuestra tu destreza y habilidad en este desafío retro.
      </p>
      <section className="card-tech">
        <img src={html} className="crad-tech-img"></img>
        <img src={css} className="crad-tech-img"></img>
        <img src={JS} className="crad-tech-img"></img>
        <a href="https://github.com/Pibe0010/juego-snake-demo">
          <img className="card-descr-tech " src={github} alt="logo github" />
        </a>
      </section>
    </section>
  );
};
