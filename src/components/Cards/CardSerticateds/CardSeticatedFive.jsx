import "./CardSerticated.css";
import { Image } from "../../Image.jsx";
import serticatedFive from "../../../../public/Serticated/HackABoss3.png";
import html from "../../../../public/Skills/html-5-svgrepo-com.svg";
import css from "../../../../public/Skills/css-3-svgrepo-com.svg";
import JS from "../../../../public/Skills/javascript-svgrepo-com.svg";
import node from "../../../../public/Skills/node-svgrepo-com.svg";
import react from "../../../../public/Skills/react-svgrepo-com.svg";
import mysql from "../../../../public/Skills/mysql-logo-svgrepo-com.svg";
import github from "../../../../public/Skills/github-svgrepo-com.svg";

export const CardSerticatedFive = () => {
  return (
    <div className="card__serticated">
      <Image className="img__serticated" src={serticatedFive} />
      <div className="card__content">
        <p className="card__title">Aptitud En Pruebas Técnicas</p>
        <p className="card__description">
          Desarrollo web Full-Stack. JavaScript. Dónde trabajamos con varios fremaworks,
          usamos las teconogias como JavaScript, HTML, CSS, MySql NODEJS, React, Vite,
          Workbench, Postman, Git Bash, GitLap, GitHub, NPM, Express.
        </p>
        <p className="card__start">Inicio: 2-11-2023</p>
        <p className="card__end">Fin: 14-3-2024</p>
        <section className="card__Loader">
          <img src={html} className="card-tech-img" alt="Icono html"></img>
          <img src={css} className="card-tech-img" alt="Icono css"></img>
          <img src={JS} className="card-tech-img" alt="Icono JS"></img>
          <img src={node} className="card-tech-img" alt="Icono node"></img>
          <img src={react} className="card-tech-img" alt="Icono react"></img>
          <img src={mysql} className="card-tech-img" alt="Icono mysql"></img>
          <img src={github} className="card-tech-img" alt="Icono github"></img>
        </section>
      </div>
    </div>
  );
};
