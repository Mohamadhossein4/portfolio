import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const contactItems = [
  {
    contactText: "contact",
    contactDescription: "Let's collabrate on a new project",
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
const page = () => {
  return (
    <div className="container mt-20">
      <div className="flex flex-col gap-8">
        {contactItems.map((item, index) => {
          return (
            <div className="flex flex-col gap-8">
              <div className="text-white text-8xl w-230 leading-28">
                {item.contactText}
              </div>
              <div className="text-white/40 text-lg ml-1.5">
                {item.contactDescription}
              </div>
            </div>
          );
        })}
        <div className="flex items-center gap-10 mt-6">
          {socialItems.map((items, index) => {
            return (
              <Button variant={"primary"} href={items.link} key={index}>
                <div className="flex items-center justify-center gap-3">
                  <div>{items.icon}</div>
                  <div>{items.name}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
      <ContactForm/>
      </div>
    </div>
  );
};

export default page;
