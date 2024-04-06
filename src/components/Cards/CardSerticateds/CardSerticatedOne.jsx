import "./CardSerticated.css";
import { Image } from "../../Image.jsx";
import serticatedOne from "../../../../public/Serticated/UniversidaJavaScript.png";
import html from "../../../../public/Skills/html-5-svgrepo-com.svg";
import css from "../../../../public/Skills/css-3-svgrepo-com.svg";
import JS from "../../../../public/Skills/javascript-svgrepo-com.svg";
import angular from "../../../../public/Skills/angular-svgrepo-com.svg";
import node from "../../../../public/Skills/node-svgrepo-com.svg";
import TS from "../../../../public/Skills/typescript-official-svgrepo-com.svg";
import fireBase from "../../../../public/Skills/firebase-svgrepo-com.svg";

export const CardSerticatedOne = () => {
  return (
    <>
      <div className="card__serticated">
        <Image className="img__serticated" src={serticatedOne} />
        <div className="card__content">
          <p className="card__title">Universidad JavaScript</p>
          <p className="card__description">
            De cero a experto. JavaScript. Dónde trabajamos con varios
            fremaworks, usamos las teconogias como JavaScript, HTML, CSS,
            NODEJS, TypeScript, Angular, FireBase, Angular CLI, Angulas.js.
          </p>
          <p className="card__start">Inicio: 4-5-2023</p>
          <p className="card__end">Fin: 8-5-2023</p>
          <section className="card__Loader">
            <img src={html} className="card-tech-img"></img>
            <img src={css} className="card-tech-img"></img>
            <img src={JS} className="card-tech-img"></img>
            <img src={angular} className="card-tech-img"></img>
            <img src={node} className="card-tech-img"></img>
            <img src={fireBase} className="card-tech-img"></img>
            <img src={TS} className="card-tech-img"></img>
          </section>
        </div>
      </div>
    </>
  );
};
