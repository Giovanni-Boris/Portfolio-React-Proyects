import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroImg2/HeroImg2";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="Im a friendly Full-stack Develpoer." />
      <Footer />
    </div>
  );
};

export default About;
