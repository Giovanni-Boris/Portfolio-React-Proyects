import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroImg2/HeroImg2";
import Work from "../components/workCard/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="My recent works using MERN" />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
