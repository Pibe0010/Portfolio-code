import "./CardProyects.css";
import { LinksNavigate } from "../../LinksNavigate.jsx";
import github from "../../../assets/img/Socials/github_git_icon_145985.png";
import proyectEight from "../../../../public/Proyects/NFT-market.jpg";
import html from "../../../../public/Skills/html-5-svgrepo-com.svg";
import css from "../../../../public/Skills/css-3-svgrepo-com.svg";
import JS from "../../../../public/Skills/javascript-svgrepo-com.svg";
import react from "../../../../public/Skills/react-svgrepo-com.svg";
import solidity from "../../../../public/Skills/light-solidity-svgrepo-com.svg";

export const CardEight = () => {
  return (
    <section className="card">
      <figcaption className="container-img">
        <a href="https://nft-dapp-thegodesingcode.netlify.app/">
          <img className="img" src={proyectEight} alt="Foto mejore info" />
        </a>
      </figcaption>
      <LinksNavigate
        className="link-cards"
        to="https://nft-dapp-thegodesingcode.netlify.app/"
      >
        <h3 className="card-title ">Dapp NFT Market</h3>
      </LinksNavigate>
      <p className="card-descr">
        Transforma una foto en un NFT y publícalo en el marketplace para compartir y
        exhibir tu obra digital. Descubre cómo tus creaciones cobran vida en el mercado
        del arte digital.
      </p>
      <section className="card-tech">
        <img src={html} className="crad-tech-img" alt="Icono html"></img>
        <img src={css} className="crad-tech-img" alt="Icono css"></img>
        <img src={JS} className="crad-tech-img" alt="Icono JS"></img>
        <img src={react} className="crad-tech-img" alt="Icono react"></img>
        <img src={solidity} className="crad-tech-img" alt="Icono solidity"></img>

        <a href="https://github.com/Pibe0010/Market-PLace-NFT">
          <img className="card-descr-tech " src={github} alt="logo github" />
        </a>
      </section>
    </section>
  );
};
