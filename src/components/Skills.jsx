import "./StyleComponents/Skills.css";
import { DataTechs } from "../Utils/DataTech.js";

export const Skills = () => {
  return (
    <>
      {DataTechs.map((skill) => {
        return (
          <div className="tooltip-container" key={skill.id}>
            <span className="tooltip"></span>
            <span className="text">{skill.name}</span>
            <span className="star">{skill.star}</span>
          </div>
        );
      })}
    </>
  );
};
