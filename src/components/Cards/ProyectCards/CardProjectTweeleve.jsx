import "./CardProyects.css";
import { LinksNavigate } from "../../LinksNavigate.jsx";
import github from "../../../assets/img/Socials/github_git_icon_145985.png";
import proyectTweeleve from "../../../../public/Proyects/Captura-de-pantalla-(2).png";
import react from "../../../../public/Skills/react-svgrepo-com.svg";

export const CardTweeleve = () => {
  return (
    <section className="card">
      <figcaption className="container-img">
        <a href="https://github.com/Pibe0010/react-native-rick-and-morty">
          <img className="img" src={proyectTweeleve} alt="Foto mejore info" />
        </a>
      </figcaption>
      <LinksNavigate
        className="link-cards"
        to="https://adorable-quokka-6ca948.netlify.app"
      >
        <h3 className="card-title ">APP mobile Rick and Morty</h3>
      </LinksNavigate>
      <p className="card-descr">
        App de Rick and Morty, con ReactNative, Expo y Api de Rick and Morty, para
        vusualizar los personajes de la serie animada.
      </p>
      <section className="card-tech">
        <img src={react} className="crad-tech-img" alt="Icono react"></img>
        <a href="https://github.com/Pibe0010/react-native-rick-and-morty">
          <img className="card-descr-tech " src={github} alt="logo github" />
        </a>
      </section>
    </section>
  );
};
