import "./CardProyects.css";
import github from "../../../assets/img/Socials/github_git_icon_145985.png";
import proyectSeven from "../../../../public/Proyects/pelis-trailer.jpg";
import html from "../../../../public/Skills/html-5-svgrepo-com.svg";
import css from "../../../../public/Skills/css-3-svgrepo-com.svg";
import JS from "../../../../public/Skills/javascript-svgrepo-com.svg";
import react from "../../../../public/Skills/react-svgrepo-com.svg";
import { LinksNavigate } from "../../LinksNavigate.jsx";

export const CardSeven = () => {
  return (
    <section className="card">
      <figcaption className="container-img">
        <a href="https://trailer-movie.netlify.app/">
          <img className="img" src={proyectSeven} alt="Foto mejore info" />
        </a>
      </figcaption>
      <LinksNavigate className="link-cards" to="https://trailer-movie.netlify.app/">
        <h3 className="card-title ">Trailer Peliculas</h3>
      </LinksNavigate>
      <p className="card-descr">
        Encuentra tu película favorita y disfruta del último tráiler, junto con las
        adiciones más recientes a nuestra selección de películas. Explora los avances de
        las últimas incorporaciones y sumérgete en el mundo del cine.
      </p>
      <section className="card-tech">
        <img src={html} className="crad-tech-img" alt="Icono html"></img>
        <img src={css} className="crad-tech-img" alt="Icono css"></img>
        <img src={JS} className="crad-tech-img" alt="Icono JS"></img>
        <img src={react} className="crad-tech-img" alt="Icono react"></img>

        <a href="https://github.com/Pibe0010/Web-trailer-movies">
          <img className="card-descr-tech " src={github} alt="logo github" />
        </a>
      </section>
    </section>
  );
};
