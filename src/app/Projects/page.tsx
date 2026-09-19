"use client";

import ProjectTemplate from "@/components/Section/ProjectTemplate";

import bonrail from "../../../public/img/projectImages/bonrail.png";
import raheparvaz from "../../../public/img/projectImages/raheparvaz.png";
import dkd from "../../../public/img/projectImages/dkd.png";
import dkdpagecraft from "../../../public/img/projectImages/dkdpagecraft.png";
import resume from "../../../public/img/projectImages/resume.png";

import { motion } from "motion/react";

const projectTemplateitems = [
  {
    name: "Bonrail rail way company",
    description:
      "Bonrail is a private Iranian passenger railway company.",
    image: bonrail,
    status: "coming soon",
  },
  {
    name: "Raheparvaz Travel Agency",
    description:
      "Rah Parvaz is an Iranian airline providing domestic flights.",
    image: raheparvaz,
    status: "public",
  },
  {
    name: "dkd page craft",
    description:
      "functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS.",
    image: dkdpagecraft,
    status: "private",
  },
  {
    name: "resume template",
    description:
      "functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS.",
    image: resume,
    status: "private",
  },
  {
    name: "dkd software company",
    description:
      "dkd is an software compony that make application.",
    image: dkd,
    status: "private",
  },
];

const Project = () => {
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
      }}
      className="container mt-10"
    >
      <ProjectTemplate
        projectTemplateitems={projectTemplateitems}
      />
    </motion.div>
  );
};

export default Project;