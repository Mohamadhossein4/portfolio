import EgerLearn from "@/components/Section/EagerLearn";
import SkillTemplate from "@/components/Section/SkillTemplate";
import React from "react";
import react from "../../../public/img/skillImages/react.png";
import javascript from "../../../public/img/skillImages/javascript.png";
import typescript from "../../../public/img/skillImages/typescript.png";
import css from "../../../public/img/skillImages/css.png";
import html from "../../../public/img/skillImages/html.png";
import docker from "../../../public/img/skillImages/docker.png";
import git from "../../../public/img/skillImages/git.png";
import nextjs from "../../../public/img/skillImages/nextjs.png";
import redux from "../../../public/img/skillImages/redux.png";
import php from "../../../public/img/skillImages/php.png";
import tailwind from "../../../public/img/skillImages/tailwind.png";
import wordpress from "../../../public/img/skillImages/wordpress.png";
import { ArrowUpRight, Github } from "lucide-react";

const skillTemplateItems = [
  {
    name: "html 5",
    description:
      "The standard markup language used to structure and organize content on web pages.",
    image: html,
    star: 4,
  },
  {
    name: "css 3",
    description:
      "A stylesheet language used to control the appearance, layout, and animations of web pages.",
    image: css,
    star: 3,
  },
  {
    name: "tailwind",
    description:
      "A utility-first CSS framework that enables rapid UI development with predefined classes.",
    image: tailwind,
    star: 4,
  },
  {
    name: "javascript",
    description:
      "A programming language that adds interactivity and dynamic behavior to websites.",
    image: javascript,
    star: 3,
  },
  {
    name: "typescript",
    description:
      "A typed superset of JavaScript that improves code reliability and maintainability.",
    image: typescript,
    star: 3,
  },
  {
    name: "react",
    description:
      "A JavaScript library for building fast, interactive, and component-based user interfaces.",
    image: typescript,
    star: 3,
  },
  {
    name: "next js",
    description:
      "A React framework that provides server-side rendering, routing, and performance optimizations.",
    image: nextjs,
    star: 2,
  },
  {
    name: "redux",
    description:
      "A predictable state management library commonly used to manage application-wide data in React apps.",
    image: redux,
    star: 2,
  },
  {
    name: "docker",
    description:
      "A containerization platform that packages applications and their dependencies into portable containers.",
    image: docker,
    star: 2,
  },
  {
    name: "git",
    description:
      "A distributed version control system used to track code changes and collaborate on software projects.",
    image: git,
    star: 3,
  },{
    name: "php",
    description:
      "A server-side scripting language widely used for web development and dynamic websites.",
    image: php,
    star: 2,
  },{
    name: "wordpress",
    description:
      "An open-source content management system (CMS) used to create and manage websites and blogs.",
    image: wordpress,
    star: 3,
  },
];

const learnItems = [
  {
    learnText: "Ready To Learn",
    learnDescription:
      "I am always eager to learn new technologies and continuously improve my skills. The world of technology is constantly evolving, and I strive to grow alongside it to become the best in my field.",
  },
];

const sourceItems = [
  {
    name: "DevSub.ir",
    link: "https://devsub.ir/",
    icon: <ArrowUpRight className="text-white/80 delay-150" size={22} />,
  },
  {
    name: "Sabzlearn.ir",
    link: "https://sabzlearn.ir/",
    icon: <ArrowUpRight className="text-white/80 delay-150" size={22} />,
  },
  {
    name: "Git.ir",
    link: "https://git.ir/",
    icon: <ArrowUpRight className="text-white/80 delay-150" size={22} />,
  },{
    name: "next1code.ir",
    link: "https://next1code.ir/",
    icon: <ArrowUpRight className="text-white/80 delay-150" size={22} />,
  },
];

const page = () => {
  return (
    <div className="container flex flex-col gap-14 mt-10">
      <SkillTemplate skillTemplateItems={skillTemplateItems} />
      <EgerLearn learnItems={learnItems} sourceItems={sourceItems} />
    </div>
  );
};

export default page;
