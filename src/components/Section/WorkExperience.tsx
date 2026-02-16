import React from "react";

const workExperienceitem = [
  {
    name: "dkd",
    date: "1403 - now",
    position: "Junior FrontEnd developer",
    description: "Design, development and implementation of applications",
    achievement: [
  "Successful collaboration with teams",
  "Delivery of high-quality software within strict deadlines",
  "Optimization of application performance",
  "Effective communication with team members"
],
    technology: ["React", "Next.js", "Docker", "Docker"],
  },
 {
    name: "dkd",
    date: "1403 - now",
    position: "Junior FrontEnd developer",
    description: "Design, development and implementation of applications",
    achievement: [
  "Successful collaboration with teams",
  "Delivery of high-quality software within strict deadlines",
  "Optimization of application performance",
  "Effective communication with team members"
],
    technology: ["React", "Next.js", "Docker", "Docker"],
  },
];

const WorkExperience = () => {
  return (
    <div>
      <span className="text-2xl text-white/80 ml-1">My Work Experience</span>
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        {workExperienceitem.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-4 bg-secondary border-2 border-white/5 rounded-2xl p-4"
            >
              <div className="flex justify-between text-white">
                <div className="flex flex-col">
                  <div>{item.position}</div>
                  <div>{item.name}</div>
                </div>
                <div>{item.date}</div>
              </div>
              <div className="text-sm text-white/60">{item.description}</div>
              <span className="text-white">Achievement :</span>
              <ul className="flex flex-col gap-2 list-disc text-white/60 text-sm px-4 ">
              {item.achievement.map((item, index) => {
                return <li  key={index}>{item}</li>;
              })}
              </ul>
              <div className="flex items-center gap-4">
                {item.technology.map((item, index) => {
                  return <div className="bg-primary/60 text-sm text-white/50 p-2 border border-white/20  rounded-xl" key={index}>{item}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
