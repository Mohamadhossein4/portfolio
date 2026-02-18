"use client"
import Snowfall from "react-snowfall";
import About from "../Section/About";
import Colabrate from "../Section/Colabrate";

const Main = () => {
  return (
    <div className="flex flex-col  gap-20 container mt-10">
      <About />
      <Colabrate />
    </div>
  );
};

export default Main;
