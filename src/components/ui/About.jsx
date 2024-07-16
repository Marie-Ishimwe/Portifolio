import React from "react";
import Navbar from "../nav";
import Details from "../Details";
import Skills from "../Skills";
import Experience from "../Expereince";

const About = () => {
  return (
    <div className="font-bodyFont bg-color-Nero">
      <Navbar />
      <Details />
      <Experience />
      <Skills />
    </div>
  );
};

export default About;
