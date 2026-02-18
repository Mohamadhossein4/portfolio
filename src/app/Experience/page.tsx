import Education from "@/components/Section/Education";
import WorkExperience from "@/components/Section/WorkExperience";
import React from "react";

const workExperienceitems = [
  {
    name: "dkd",
    date: "1403 - now",
    position: "Junior FrontEnd developer",
    description: "Design, development and implementation of applications",
    achievement: [
      "Successful collaboration with teams",
      "Delivery of high-quality software within strict deadlines",
      "Optimization of application performance",
      "Effective communication with team members",
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
      "Effective communication with team members",
    ],
    technology: ["React", "Next.js", "Docker", "Docker"],
  },
];

const educationItems = [
  {
    title: "Web developmen diploma",
    description: "Introduction to software engineering",
    educationName: "Talash high school",
    date: "1399 - 1402",
  },
  {
    title: "Software post graduate",
    description: "Fundamentals of Software Engineering",
    educationName: "Azad University, Yadegar Branch",
    date: "1402 - 1404",
  },
  {
    title: "Software Bachelor's degree",
    description: "Principles of Software Engineering",
    educationName: "Azad University, Yadegar Branch",
    date: "1404 - now",
  },
];

const page = () => {
  return (
    <div className="container flex flex-col gap-10 mt-10">
      <WorkExperience workExperienceitems={workExperienceitems} />
      <Education educationItems={educationItems} />
    </div>
  );
};

export default page;
