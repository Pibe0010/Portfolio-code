import "./CardSerticated.css";
import { Image } from "../../Image.jsx";
import serticatedSix from "../../../../public/Serticated/TiendaOnline.png";
import wordPress from "../../../../public/Skills/wordpress-svgrepo-com.svg";
import php from "../../../../public/Skills/php-svgrepo-com.svg";

export const CardSerticatedSix = () => {
  return (
    <div className="card__serticated">
      <Image className="img__serticated" src={serticatedSix} />
      <div className="card__content">
        <p className="card__title">Crea Una Tienda Online</p>
        <p className="card__description">
          De cero. WordPress. Dónde trabajamos con WordPress, usamos las
          tecnologías y Plugins como WordPress, Elementor, Paypal, PHP, Yoast
          SEO, WPForms Lite, WP Mail SMTP, WP Show Posts, Adapta RGPD
        </p>
        <p className="card__start">Inicio: 27-9-2023</p>
        <p className="card__end">Fin: 29-9-2023</p>
        <section className="card__Loader">
          <img src={wordPress} className="card-tech-img"></img>
          <img src={php} className="card-tech-img"></img>
        </section>
      </div>
    </div>
  );
};
