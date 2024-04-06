import "./CardProyects.css";
import { DataProyects } from "../../Utils/DataProyects.js";
import { UrLinks } from "../UrLinks.jsx";
import github from "../../assets/img/Socials/github_git_icon_145985.png";

export const Cards = () => {
  return (
    <>
      {DataProyects.map((card) => {
        return (
          <section key={card.id} className="card">
            <figcaption className="container-img">
              <a href={card.url}>
                <img className="img" src={card.img} alt={card.name} />
              </a>
            </figcaption>
            <UrLinks className="link-cards" to={card.url}>
              <h3 className="card-title ">{card.name}</h3>
            </UrLinks>
            <p className="card-descr">{card.description}</p>
            <section className="card-tech">
              <img src={card.tech.img1} className="crad-tech-img"></img>
              <img src={card.tech.img2} className="crad-tech-img"></img>
              <img src={card.tech.img3} className="crad-tech-img"></img>
              <img src={card.tech.img4} className="crad-tech-img"></img>
              <img src={card.tech.img5} className="crad-tech-img"></img>
              <a href={card.link}>
                <img
                  className="card-descr-tech "
                  src={github}
                  alt="logo github"
                />
              </a>
            </section>
          </section>
        );
      })}
    </>
  );
};
