import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

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
];

const Social = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 bg-secondary border-2 border-white/5 rounded-4xl w-17 p-1">
        {socialItems.map((item, index) => (
          <Link key={index} href={item.link} target="_blank">
            <div className="group relative p-4 rounded-full cursor-pointer transition-colors text-white hover:bg-primary">
              {item.icon}
              <span
                className="absolute left-full ml-3 top-1/2 -translate-y-1/2
              px-3 py-2 rounded-3xl text-black bg-white text-sm whitespace-nowrap
              opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
              transition-all duration-200 pointer-events-none"
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Social;
