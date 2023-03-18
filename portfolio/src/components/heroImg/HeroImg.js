import React from "react";
import "./heroImg.css";
import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, MY NAME'S BORIS,</p>
        <h1>I'M FULLSTACK DEVELOPER</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
