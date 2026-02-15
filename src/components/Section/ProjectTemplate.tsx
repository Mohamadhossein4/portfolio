"use client";
import { ArrowUpRight, RectangleVertical } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import bonrail from "../../../public/img/projectImages/bonrail.png";
import raheparvaz from "../../../public/img/projectImages/raheparvaz.png";
import dkd from "../../../public/img/projectImages/dkd.png";
import dkdpagecraft from "../../../public/img/projectImages/dkdpagecraft.png";

const projectiItems = [
  {
    name: "bonrail rail way company",
    description:
      "functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS.",
    image: bonrail,
    status: "coming soon",
  },
  {
    name: "raheparvaz Travel Agency",
    description:
      "functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS.",
    image: raheparvaz,
    status: "public",
  },
  {
    name: "raheparvaz Travel Agency",
    description:
      "functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS.",
    image: dkd,
    status: "private",
  },
  {
    name: "bonrail rail way company",
    description:
      "functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS.",
    image: dkdpagecraft,
    status: "private",
  },
];

interface ProjectProp {
  items: {
    name: string;
    description: string;
    image: StaticImageData;
  }[];
}

const ImageStyle = {
  width: "300px",
  height: "800px",
};

const ProjectTemplate = () => {
  return (
    <div>
      <span className="text-2xl text-white/80 ml-1">My Projects</span>
      <div className="grid grid-cols-2 gap-3 mt-20">
        {projectiItems.map((items, index) => {
          return (
            <div
              key={index}
              className="flex flex-col bg-secondary rounded-2xl p-2 group ../"
            >
              <div className="flex w-full items-center justify-between mb-6 ">
                <div className="border border-white/10 text-white/80 text-sm py-2 px-5 rounded-xl ">
                  project
                </div>
                <div>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-white/80 delay-150" />
                </div>
              </div>
              <div className="flex flex-col text-white/80 mb-10">
                <div className="">{items.name}</div>
                <div className="text-white/30">Description</div>
              </div>
              <div className="flex">
                <div className="h-50 overflow-hidden group  rounded-2xl opacity-70">
                  <Image
                    src={items.image}
                    alt=""
                    className="h-auto transition-transform duration-3000  delay-150 ease-linear group-hover:-translate-y-[calc(100%-200px)]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTemplate;
