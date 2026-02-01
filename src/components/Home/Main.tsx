import React from "react";
import About from "../About";
import Experience from "../Experience";
import Colabrate from "../Colabrate";

const Main = () => {
  return (
    <div className="flex flex-col  gap-20 container mt-10">
      <About />
      <Colabrate />
    </div>
  );
};

export default Main;
