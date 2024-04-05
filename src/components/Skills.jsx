import "./Skills.css";
import { DataTechs } from "../Utils/DataTech.js";

export const Skills = () => {
  return (
    <>
      {DataTechs.map((skill) => {
        return (
          <div className="tooltip-container" key={skill.id}>
            <img className="tooltip" src={skill.img} alt="" />
            <span className="text">{skill.name}</span>
            <span className="star">{skill.star}</span>
          </div>
        );
      })}
    </>
  );
};
