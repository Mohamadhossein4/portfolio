"use client";
import React, { useState } from "react";
import {
  LayoutGrid,
  Mail,
  MonitorCog,
  SquareCode,
  UserStar,
} from "lucide-react";
const menuItems = [
  { name: "About", link: "/", icon: <LayoutGrid size={20}/> },
  { name: "Project", link: "/project", icon: <SquareCode size={20} /> },
  { name: "Skills", link: "/skills", icon: <MonitorCog size={20}/> },
  { name: "Experience", link: "/experience", icon: <UserStar size={20}/> },
  { name: "Contact", link: "/contact", icon: <Mail size={20}/> },
];

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <div className="flex flex-col items-center gap-2 bg-secondary border-2 border-white/5 rounded-4xl w-17 p-1">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`group relative p-4 rounded-full cursor-pointer transition-colors 
            ${
              activeIndex === index
                ? "bg-white text-black"
                : "text-white hover:bg-primary"
            }`}
          >
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
        ))}
      </div>
    </div>
  );
};

export default Menu;
