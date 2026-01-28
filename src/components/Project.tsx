"use client"
import { ArrowUpRight, RectangleVertical } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

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

const Project = ({ items }: ProjectProp) => {
  const [project , isproject]= useState("project");
  return (
    <div className="flex gap-3">
      {items.map((items, index) => {
        return (
          <div key={index} className="flex flex-col bg-secondary rounded-2xl p-2 group hover:scale-103 transition-all">
            
            <div className="flex w-full items-center justify-between mb-6 ">
              <div className="border border-white/10 text-white/80 text-sm py-2 px-5 rounded-xl ">project</div>
              <div>
                <ArrowUpRight className="hidden group-hover:inline-block text-white/80" />
              </div>
            </div>
            <div className="flex flex-col text-white/80 mb-10">
              <div className="">{items.name}</div>
              <div className="text-white/30">Description</div>
            </div>
            <div className="flex">
              <div className="h-50 overflow-hidden group  rounded-2xl">
                <Image
                  src={items.image}
                  alt=""
                  className="h-auto transition-transform duration-3000 ease-linear
               group-hover:-translate-y-[calc(100%-200px)]"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
