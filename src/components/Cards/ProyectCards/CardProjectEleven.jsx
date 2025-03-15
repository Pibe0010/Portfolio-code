import "./CardProyects.css";
import { LinksNavigate } from "../../LinksNavigate.jsx";
import github from "../../../assets/img/Socials/github_git_icon_145985.png";
import proyectEleven from "../../../../public/Proyects/Captura-de-pantalla.png";
import html from "../../../../public/Skills/html-5-svgrepo-com.svg";
import JS from "../../../../public/Skills/javascript-svgrepo-com.svg";
import css from "../../../../public/Skills/css-3-svgrepo-com.svg";
import react from "../../../../public/Skills/react-svgrepo-com.svg";

export const CardEleven = () => {
  return (
    <section className="card">
      <figcaption className="container-img">
        <a href="https://nft-dapp-thegodesingcode.netlify.app/">
          <img className="img" src={proyectEleven} alt="Foto mejore info" />
        </a>
      </figcaption>
      <LinksNavigate
        className="link-cards"
        to="https://adorable-quokka-6ca948.netlify.app"
      >
        <h3 className="card-title ">Tienda online Luneva-shop</h3>
      </LinksNavigate>
      <p className="card-descr">
        E-commerce de ventas de jabones artesanales. Puedes añadir jabones al carrito,
        comprarlos. Creado con react para el frontend y node para el backend. Con modo
        administrador para el propetario gestinar la tienda.
      </p>
      <section className="card-tech">
        <img src={html} className="crad-tech-img" alt="Icono html"></img>
        <img src={JS} className="crad-tech-img" alt="Icono JS"></img>
        <img src={css} className="crad-tech-img" alt="Icono css"></img>
        <img src={react} className="crad-tech-img" alt="Icono react"></img>
        <a href="https://github.com/Pibe0010/React-luneva-shop">
          <img className="card-descr-tech " src={github} alt="logo github" />
        </a>
      </section>
    </section>
  );
};
