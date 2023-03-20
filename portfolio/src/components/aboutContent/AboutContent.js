import React from "react";
import "./aboutContent.css";
import { Link } from "react-router-dom";
import React1 from "../../assets/project4.png";
import React2 from "../../assets/project1.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a full stack developer. I create secure website using tools like
          MERN and jsonweb token
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="React1" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="React1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
