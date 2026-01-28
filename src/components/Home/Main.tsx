import React from "react";
import About from "../About";
import Experience from "../Experience";
import Project from "../Project";
import bonrail from "../../../public/img/projectImages/bonrail.png";
import raheparvaz from "../../../public/img/projectImages/raheparvaz.png";

const projectiItems = [
  { name: "bonrail rail way company", description: "functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS.", image: bonrail },
  { name: "raheparvaz Travel Agency", description: "functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS.", image: raheparvaz },
];

const Main = () => {
  return (
    <div className="flex flex-col  gap-20 container h-1000 mt-40">
      <About />
      <Project items={projectiItems} />
      <Experience />
    </div>
  );
};

export default Main;
