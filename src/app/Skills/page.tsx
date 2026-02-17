import EgerLearn from "@/components/Section/EagerLearn";
import SkillTemplate from "@/components/Section/SkillTemplate";
import React from "react";
import react from "../../../public/img/skillImages/react.png";
import javascript from "../../../public/img/skillImages/javascript.png";
import typescript from "../../../public/img/skillImages/typescript.png";
import { ArrowUpRight, Github } from "lucide-react";

const skillTemplateItems = [
  {
    name: "react",
    description:
      "React is a powerful JavaScript library for building fast, interactive, and reusable user interfaces.",
    image: react,
    star: 3,
  },
  {
    name: "react",
    description:
      "React is a powerful JavaScript library for building fast, interactive, and reusable user interfaces.",
    image: javascript,
    star: 3,
  },
  {
    name: "react",
    description:
      "React is a powerful JavaScript library for building fast, interactive, and reusable user interfaces.",
    image: typescript,
    star: 3,
  },
  {
    name: "react",
    description:
      "React is a powerful JavaScript library for building fast, interactive, and reusable user interfaces.",
    image: react,
    star: 3,
  },
  {
    name: "react",
    description:
      "React is a powerful JavaScript library for building fast, interactive, and reusable user interfaces.",
    image: javascript,
    star: 3,
  },
  {
    name: "react",
    description:
      "React is a powerful JavaScript library for building fast, interactive, and reusable user interfaces.",
    image: typescript,
    star: 3,
  },
  {
    name: "react",
    description:
      "React is a powerful JavaScript library for building fast, interactive, and reusable user interfaces.",
    image: react,
    star: 3,
  },
  {
    name: "react",
    description:
      "React is a powerful JavaScript library for building fast, interactive, and reusable user interfaces.",
    image: javascript,
    star: 3,
  },
  {
    name: "react",
    description:
      "React is a powerful JavaScript library for building fast, interactive, and reusable user interfaces.",
    image: typescript,
    star: 3,
  },
  {
    name: "react",
    description:
      "React is a powerful JavaScript library for building fast, interactive, and reusable user interfaces.",
    image: typescript,
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
