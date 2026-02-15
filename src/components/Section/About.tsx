import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";

const aboutItems = [
  {
    status: "Look for better Job",
    interduce: "Hey, I'm Mohamad Hosein a",
    position: "Frontend Developer",
    about:
      "My name is Mohamad Hossein Gholikhah, I am a Frontend Developer with a passion for creating beautiful and functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS. I am always looking for new challenges and opportunities to learn and grow as a developer.",
  },
];
const socialItems = [
  {
    name: "GitHub",
    link: "https://github.com/Mohamadhossein4",
    icon: <Github size={20} />,
  },
  {
     name: "LinkedIn",
     link: "https://www.linkedin.com/in/mohamad-hossein-gholikhah-009032283/",
     icon: <Linkedin size={20} />,
   },
  {
    name: "Instagram",
    link: "https://www.linkedin.com/in/mohamad-hossein-gholikhah-009032283/",
    icon: <Instagram size={20} />,
  },
];
const About = () => {
  return (
    <>
      <div className="">
        {aboutItems.map((items, index) => {
          return (
            <div key={index} className="flex flex-col gap-12">
              <div className="flex items-center gap-6">
                <div className="relative mb-4">
                  <div className="absolute w-1.5 h-1.5 bg-amber-300 rounded-full z-10 left-1 top-1"></div>
                  <div className="absolute w-3.5 h-3.5 bg-amber-100 rounded-full opacity-10"></div>
                </div>
                <div className="text-white">{items.status}</div>
              </div>
              <div className="text-white text-7xl w-230 leading-28">
                {items.interduce}
                <span className="text-white/40 ml-4">{items.position}</span>
              </div>
              <div className="flex items-center gap-8 -mt-6">
                {socialItems.map((items, index) => {
                  return (
                    
                    <Button variant={"primary"} href={items.link} key={index}>
                      <div
                      className="flex items-center justify-center gap-3"
                    >
                      <div>{items.icon}</div>
                      <div>{items.name}</div>
                    </div>
                    </Button>
                  );
                })}
              </div>
              <div className="text-white/40 leading-relaxed border-b border-white/40 pb-14">
                {items.about}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
