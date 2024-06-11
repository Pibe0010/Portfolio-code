import "./CardSerticated.css";
import { Image } from "../../Image.jsx";
import serticatedTwo from "../../../../public/Serticated/UniversidaJavaScript.png";
import html from "../../../../public/Skills/html-5-svgrepo-com.svg";
import css from "../../../../public/Skills/css-3-svgrepo-com.svg";
import JS from "../../../../public/Skills/javascript-svgrepo-com.svg";
import node from "../../../../public/Skills/node-svgrepo-com.svg";
import react from "../../../../public/Skills/react-svgrepo-com.svg";
import solidity from "../../../../public/Skills/light-solidity-svgrepo-com.svg";
import python from "../../../../public/Skills/python-svgrepo-com.svg";

export const CardSerticatedTwo = () => {
  return (
    <div className="card__serticated">
      <Image className="img__serticated" src={serticatedTwo} />
      <div className="card__content">
        <p className="card__title">Máster Completo De Blockchain y web3</p>
        <p className="card__description">
          De cero a experto. Bolckchain y Web3. Dónde trabajamos con varios
          fremaworks, usamos las teconogias como JavaScript, HTML, CSS, NODEJS,
          React, Solidity, Ganache, Docker, Truffle Suite, Hardhat, Python,
          Web3.js, Remix IDE, IPFS, Ether.js, Docker.
        </p>
        <p className="card__start">Inicio: 20-6-2023</p>
        <p className="card__end">Fin: 2-7-2023</p>
        <section className="card__Loader">
          <img src={html} className="card-tech-img"></img>
          <img src={css} className="card-tech-img"></img>
          <img src={JS} className="card-tech-img"></img>
          <img src={node} className="card-tech-img"></img>
          <img src={react} className="card-tech-img"></img>
          <img src={solidity} className="card-tech-img"></img>
          <img src={python} className="card-tech-img"></img>
        </section>
      </div>
    </div>
  );
};
