import "./ImgPerfil.css";
import perfil from "../src/assets/img/mi-foto-perfil-Photoroom.png";

export const ImgPerfil = () => {
  return (
    <div className="loader_one">
      <div className="loader_cube loader_cube--color"></div>
      <div className="loader_cube loader_cube--glowing">
        <img className="img-about" src={perfil}></img>
      </div>
    </div>
  );
};
