"use client";
import { ArrowRight, ArrowUpRight, RectangleVertical } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";



interface ProjectTemplateProps {
  projectTemplateitems: {
    name: string;
    description: string;
    image: StaticImageData;
  }[];
}

const ProjectTemplate = ({projectTemplateitems}:ProjectTemplateProps) => {
  return (
    <div>
      <span className="text-2xl text-white/80 ml-1">My Projects</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10 mb-26 lg:mb-0">
        {projectTemplateitems.map((items, index) => {
          return (
            <div
              key={index}
              className="flex flex-col bg-secondary border-2 border-white/5 rounded-2xl p-2 group ../"
            >
              <div className="flex w-full items-center justify-between mb-6 ">
                <div className="border border-white/10 text-white/80 text-sm py-2 px-5 rounded-xl ">
                  project
                </div>
                <div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 text-white/80 delay-150 group-hover:-rotate-45 transition-all" />
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
