import { Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface SkillTemplateProps {
  skillTemplateItems: {
    name: string;
    description: string;
    image: StaticImageData;
    star: number;
  }[];
}

const SkillTemplate = ({ skillTemplateItems }: SkillTemplateProps) => {
  return (
    <div>
      <span className="text-2xl text-white/80 ml-1">My Skills</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
        {skillTemplateItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-4 border-2 border-white/5 bg-secondary rounded-xl p-3 text-white/70 hover:scale-103 transition-all delay-150"
            >
              <div className="flex items-center justify-between">
                <Image
                  className="w-10 h-10"
                  src={item.image}
                  alt={item.name}
                ></Image>
                <div className="flex gap-0.5 text-white ">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < item.star ? (
                        <Star fill="white" size={12} />
                      ) : (
                        <Star className="text-white/40" size={12} />
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-lg">{item.name}</div>
              <div className="text-sm">{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillTemplate;
