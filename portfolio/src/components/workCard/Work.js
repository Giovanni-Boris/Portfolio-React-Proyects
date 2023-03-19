import "./workCard.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((card, index) => (
          <WorkCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Work;
