import "./CardProyects.css";
import github from "../../../assets/img/Socials/github_git_icon_145985.png";
import proyectNinth from "../../../../public/Proyects/Rick-And-Morty.png";
import html from "../../../../public/Skills/html-5-svgrepo-com.svg";
import css from "../../../../public/Skills/css-3-svgrepo-com.svg";
import JS from "../../../../public/Skills/javascript-svgrepo-com.svg";
import react from "../../../../public/Skills/react-svgrepo-com.svg";
import { LinksNavigate } from "../../LinksNavigate.jsx";

export const CardNinth = () => {
  return (
    <section className="card">
      <figcaption className="container-img">
        <a href="https://react-rick-and-morty-code-and-co.netlify.app/">
          <img className="img" src={proyectNinth} alt="Foto mejore info" />
        </a>
      </figcaption>
      <LinksNavigate
        className="link-cards"
        to="https://react-rick-and-morty-code-and-co.netlify.app/"
      >
        <h3 className="card-title ">React Rick And Morty</h3>
      </LinksNavigate>
      <p className="card-descr">
        Encuentra tu personaje favorito de la serie animada rick and morty,
        busca los capítulos que te gustaron, mira su localizaciones,
        dimensiones, encontraras toda la información y personajes que
        aparecieron en el episodio.
      </p>
      <section className="card-tech">
        <img src={html} className="crad-tech-img"></img>
        <img src={css} className="crad-tech-img"></img>
        <img src={JS} className="crad-tech-img"></img>
        <img src={react} className="crad-tech-img"></img>

        <a href="https://github.com/Pibe0010/Rick-And-Morty">
          <img className="card-descr-tech " src={github} alt="logo github" />
        </a>
      </section>
    </section>
  );
};
