import "./ImgPerfil.css";
import perfil from "../../assets/img/foto-perfil.png";

export const ImgPerfil = () => {
  return (
    <div className="loader_one">
      <div className="loader_cube loader_cube--color"></div>
      <div className="loader_cube loader_cube--glowing">
        <img className="img-about" src={perfil} alt="Imagen de perfil"></img>
      </div>
    </div>
  );
};
