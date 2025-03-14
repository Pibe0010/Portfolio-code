import "./CardProyects.css";
import github from "../../../assets/img/Socials/github_git_icon_145985.png";
import proyectFor from "../../../../public/Proyects/pedra.papel-tijera.png";
import html from "../../../../public/Skills/html-5-svgrepo-com.svg";
import css from "../../../../public/Skills/css-3-svgrepo-com.svg";
import JS from "../../../../public/Skills/javascript-svgrepo-com.svg";
import { LinksNavigate } from "../../LinksNavigate.jsx";

export const CardFor = () => {
  return (
    <section className="card">
      <figcaption className="container-img">
        <a href="https://piedra-papel-tijera-spock-lagarto.netlify.app/">
          <img className="img" src={proyectFor} alt="Foto mejore info" />
        </a>
      </figcaption>
      <LinksNavigate
        className="link-cards"
        to="https://piedra-papel-tijera-spock-lagarto.netlify.app/"
      >
        <h3 className="card-title ">Piedra Papel Tijera Spock </h3>
      </LinksNavigate>
      <p className="card-descr">
        Disfruta del clásico juego de piedra, papel y tijera contra la máquina, con la
        emoción añadida de un nivel extra: piedra, papel, tijeras, Spock. Sumérgete en
        este divertido desafío.
      </p>
      <section className="card-tech">
        <img src={html} className="crad-tech-img" alt="Icono html"></img>
        <img src={css} className="crad-tech-img" alt="Icono css"></img>
        <img src={JS} className="crad-tech-img" alt="Icono JS"></img>
        <a href="https://github.com/Pibe0010/Piedra-papel-tijera">
          <img className="card-descr-tech " src={github} alt="logo github" />
        </a>
      </section>
    </section>
  );
};
