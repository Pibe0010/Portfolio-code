import "./StylePages/About.css";
import { MainLayout } from "../Layout/MainLayout.jsx";
import { Skills } from "../components/Skills.jsx";
import { ImgPerfil } from "../components/Animations/ImgPerfil.jsx";
import logo from "../assets/4913181.png";

export const AboutPage = () => {
  return (
    <MainLayout>
      <section className="container-about">
        <article className="article-about">
          <ImgPerfil />
          <p className="description-about">
            ¡Hola! Soy programador Jr. con enfoque en el desarrollo web y app.
            Me encanta la tecnología, el poder ayudar. He decidido dar un cambio
            en vida y dedicarme, a lo que más me gusta que es programar. Soy
            resolutivo, me gusta trabajar en equipo, la experiencia en el
            bootcamp que realice me ha gustado mucho el poder conocer a gente
            con mis mismos objetivos y poder ayudarlos y compartir experiencias
            dudas ha sido muy satisfactorio. Actualmente, sigo ampliando mis
            conocimientos en el Boost Academy de Hack a Boss.
          </p>
          <div className="ball">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </article>
        <section className="section-about">
          <article>
            <h2 className="title-about">Estudios</h2>
            <section>
              <h3>HACK A BOSS</h3>
              <span>HTML, CSS, JavaScript, MYSQL, NodeJS, React</span>
            </section>
            <section>
              <h3>Udemy</h3>
              <span>HTML, CSS, JavaScript, TypeScript, NodeJS, Angular</span>
            </section>
            <section>
              <h3>Udemy</h3>
              <span>HTML, CSS, JavaScript, Solidity, NodeJS, React,</span>
            </section>
            <section>
              <h3>Udemy</h3>
              <span>WordPress</span>
            </section>
            <section className="img-logo">
              <img className="logo-about" src={logo} alt="logo" />
            </section>
          </article>
        </section>
        <section className="skills">
          <h2>Conocimientos</h2>
          <article>
            <Skills />
          </article>
        </section>
      </section>
    </MainLayout>
  );
};
