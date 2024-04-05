import "./CardSerticated.css";
import { Image } from "../Image.jsx";
import { DataSertications } from "../../Utils/DataSertications.js";

export const CardSerticated = () => {
  return (
    <>
      {DataSertications.map((serticated) => {
        return (
          <div className="card__serticated" key={serticated.id}>
            <Image className="img__serticated" src={serticated.img} />
            <div className="card__content">
              <p className="card__title">{serticated.name}</p>
              <p className="card__description">{serticated.description}</p>
              <p className="card__start">Inicio: {serticated.start}</p>
              <p className="card__end">Fin: {serticated.end}</p>
              <section className="card__Loader">
                <img src={serticated.tech.img1} className="card-tech-img"></img>
                <img src={serticated.tech.img2} className="card-tech-img"></img>
                <img src={serticated.tech.img3} className="card-tech-img"></img>
                <img src={serticated.tech.img4} className="card-tech-img"></img>
                <img src={serticated.tech.img5} className="card-tech-img"></img>
                <img src={serticated.tech.img6} className="card-tech-img"></img>
                <img src={serticated.tech.img7} className="card-tech-img"></img>
              </section>
            </div>
          </div>
        );
      })}
    </>
  );
};
