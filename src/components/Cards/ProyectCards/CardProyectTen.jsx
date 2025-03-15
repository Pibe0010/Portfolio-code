import "./CardProyects.css";
import { LinksNavigate } from "../../LinksNavigate.jsx";
import github from "../../../assets/img/Socials/github_git_icon_145985.png";
import proyectTen from "../../../../public/Proyects/pexels-googledeepmind-17485657.jpg";
import html from "../../../../public/Skills/html-5-svgrepo-com.svg";
import JS from "../../../../public/Skills/javascript-svgrepo-com.svg";
import node from "../../../../public/Skills/node-svgrepo-com.svg";
import mysql from "../../../../public/Skills/mysql-logo-svgrepo-com.svg";

export const CardTen = () => {
  return (
    <section className="card">
      <figcaption className="container-img">
        <a href="https://nft-dapp-thegodesingcode.netlify.app/">
          <img className="img" src={proyectTen} alt="Foto mejore info" />
        </a>
      </figcaption>
      <LinksNavigate
        className="link-cards"
        to="https://github.com/Pibe0010/Luneva-shop-NodeJS"
      >
        <h3 className="card-title ">Base de datos MYSQL</h3>
      </LinksNavigate>
      <p className="card-descr">
        Base de datos MYSQL para la gestión de una tienda online , con carrito de compras
        y un sistema de pagos seguro, con un panel de administración para agregar, editar
        y eliminar productos de la tienda online.
      </p>
      <section className="card-tech">
        <img src={html} className="crad-tech-img" alt="Icono html"></img>
        <img src={JS} className="crad-tech-img" alt="Icono JS"></img>
        <img src={mysql} className="card-tech-img" alt="Icono mysql"></img>
        <img src={node} className="card-tech-img" alt="Icono node"></img>
        <a href="https://github.com/Pibe0010/Luneva-shop-NodeJS">
          <img className="card-descr-tech " src={github} alt="logo github" />
        </a>
      </section>
    </section>
  );
};
