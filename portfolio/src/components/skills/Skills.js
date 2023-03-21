import React from "react";
import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skillsTitle">Skills</h2>
      <span className="skillsSubtitle">My technical level</span>
      <div className="skillsContainer">
        <Backend />
        <Frontend />
      </div>
    </div>
  );
};

export default Skills;
