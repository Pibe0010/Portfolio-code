import "./StyleComponents/Skills.css";
import { DataTechs } from "../Utils/DataTech.js";

export const Skills = () => {
  return (
    <>
      {DataTechs.map((skill) => {
        return (
          <div className="skill-container" key={skill.id}>
            <div className="skill-box">
              <div className="title-skill">
                <span className="title">{`${skill.name}`} </span>
                <img src={skill.img} className="img-tech" alt="Icon Techs" />
              </div>

              <div className="skill-bar">
                <span className={`skill-per ${skill.name}`}>
                  <span className="tooltip">{`${skill.star}`}%</span>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
