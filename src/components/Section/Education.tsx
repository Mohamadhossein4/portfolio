import React from "react";

const educationItem = [
  { title: "Web developmen diploma", description: "Introduction to software engineering", educationName: "Talash high school", date: "1399 - 1402" },
  { title: "Software post graduate", description: "Fundamentals of Software Engineering", educationName: "Azad University, Ray Branch", date: "1402 - 1404" },
  { title: "Software Bachelor's degree", description: "Principles of Software Engineering", educationName: "Azad University, Ray Branch", date: "1404 - now" },
];

const Education = () => {
  return (
    <div>
      <span className="text-2xl text-white/80 ml-1">My Education</span>
      <div className="grid grid-cols-1 gap-3 mt-6 ">
      {educationItem.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-4 leading-3 border-2 border-white/5 bg-secondary p-4 rounded-2xl">
            <div className="text-lg text-white">{item.title}</div>
            <div className="flex items-center justify-between">
              <div className="text-white/60">{item.educationName}</div>
              <div className="text-white">{item.date}</div>
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
