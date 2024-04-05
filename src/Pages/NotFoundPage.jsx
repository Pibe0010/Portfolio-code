import "./NotFoundPage.css";
import { Button } from "../components/Buttons/Button.jsx";
import { MenuNavLink } from "../components/MenuNavLink.jsx";

export const NotFoundPage = () => {
  return (
    <section className="container-notFound">
      <h1 className="title-notFound">404 Pagina no encontroda </h1>
      <div className="loader-radar">
        <span></span>
      </div>
      <Button name="INICIO">
        <MenuNavLink className="button-notFount" name="INICIO" url="/" />
      </Button>
    </section>
  );
};
