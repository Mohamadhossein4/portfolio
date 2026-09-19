"use client"
import Education from "@/components/Section/Education";
import WorkExperience from "@/components/Section/WorkExperience";
import { motion } from "motion/react";
import React from "react";

const workExperienceitems = [
  {
    name: "iranZak",
    date: "1401 - 1401",
    position: "Network Intern",
    description: "Configuration, monitoring and troubleshooting of network infrastructure",
    achievement: [
      "Assisted in network setup and configuration",
  "Monitored network performance and connectivity",
  "Troubleshot basic network issues",
  "Collaborated with IT and network teams",
    ],
    technology: ["Network", "CCNA", "TCP/IP", "Linux"],
  },
  {
    name: "dkd",
    date: "1403 - now",
    position: "Junior FrontEnd developer",
    description: "Development and maintenance of user-friendly web interfaces",
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
      <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }} className="container flex flex-col gap-10 mt-10">
      <WorkExperience workExperienceitems={workExperienceitems} />
      <Education educationItems={educationItems} />
    </motion.div>
  );
};

export default page;
