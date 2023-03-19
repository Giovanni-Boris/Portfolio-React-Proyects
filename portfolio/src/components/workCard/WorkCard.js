import "./workCard.css";
import { NavLink } from "react-router-dom";

const WorkCard = ({ imgsrc, title, text, view, source }) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="projects" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <div className="pro-btns">
          <NavLink to={view} className="btn">
            View
          </NavLink>
          <NavLink to={source} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
