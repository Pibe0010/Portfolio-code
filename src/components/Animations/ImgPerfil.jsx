import "./ImgPerfil.css";

export const ImgPerfil = () => {
  return (
    <div className="loader_one">
      <div className="loader_cube loader_cube--color"></div>
      <div className="loader_cube loader_cube--glowing">
        <img
          className="img-about"
          src="./src/assets/img/mi-foto-perfil-Photoroom.png"></img>
      </div>
    </div>
  );
};
