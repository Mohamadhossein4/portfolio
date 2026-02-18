import React from "react";

interface EducationProps {
  educationItems: {
    title: string;
    description: string;
    educationName: string;
    date: string;
  }[];
}

const Education = ({ educationItems }: EducationProps) => {
  return (
    <div>
      <span className="text-2xl text-white/80 ml-1">My Education</span>
      <div className="grid grid-cols-1 gap-3 mt-6 mb-30 lg:mb-16">
        {educationItems.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-4 leading-3 border-2 border-white/5 bg-secondary p-4 rounded-2xl"
            >
              <div className="text-lg text-white">{item.title}</div>
              <div className="flex items-center justify-between">
                <div className="text-white/60 text-sm lg:text-base">{item.educationName}</div>
                <div className="text-white text-sm lg:text-base">{item.date}</div>
              </div>
              <div className="text-sm text-white/60">{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
