"use client";

import { FileUser, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import Button from "../ui/Button";
const aboutItems = [
  {
    status: "Available fore hire",
    interduce: "Hey, I'm Mohamad Hosein a",
    position: "Frontend Developer",
    about:
      "My name is Mohamad Hossein Gholikhah, I am a Frontend Developer with a passion for creating,  beautiful and functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS. I am always looking for new challenges and opportunities to learn and grow as a developer.",
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
    link: "https://www.instagram.com/org.mohamad.84/",
    icon: <Instagram size={20} />,
  },
];
const cvItem = [
  {
    name: "cv",
    link: "/cv/resume.pdf",
    icon: <FileUser size={20} />,
  },
];
const About = () => {
  return (
    <div>
      {aboutItems.map((items, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-12 -mb-18 lg:mb-0"
          >
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="flex items-center gap-6"
            >
              <div className="relative mb-4">
                <div className="absolute w-1.5 h-1.5 bg-amber-300 rounded-full z-10 left-1 top-1" />
                <div className="absolute w-3.5 h-3.5 bg-amber-100 rounded-full opacity-10" />
              </div>

              <div className="text-white">
                {items.status}
              </div>
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="text-white text-4xl lg:text-7xl leading-14 lg:leading-28 text-pretty"
            >
              {items.interduce}

              <span className="text-white/40 ml-4">
                {items.position}
              </span>
            </motion.div>

            {/* Social buttons */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="grid grid-cols-2 lg:grid-cols-4 items-center gap-2 lg:gap-8 -mt-6"
            >
              {socialItems.map((item, index) => {
                return (
                  <Button
                    variant="primary"
                    href={item.link}
                    key={index}
                    target="_blank"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div>{item.icon}</div>
                      <div>{item.name}</div>
                    </div>
                  </Button>
                );
              })}

              <Button variant="primary" href="/cv/resume.pdf">
                <div className="flex items-center justify-center gap-3">
                  <FileUser size={20} />
                  <div>Resume</div>
                </div>
              </Button>
            </motion.div>

            {/* About text */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: "easeOut",
              }}
              className="text-white/40 text-justify text-pretty leading-relaxed border-b border-white/40 pb-14"
            >
              {items.about}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default About;