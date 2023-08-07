import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "E-Shop",
  };
  return <HeroSection myData={data}></HeroSection>;
};

export default About;
