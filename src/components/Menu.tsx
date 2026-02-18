"use client";
import React, { useState } from "react";
import {
  LayoutGrid,
  Mail,
  MonitorCog,
  SquareCode,
  UserStar,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const menuItems = [
  { name: "About", href: "/", icon: <LayoutGrid size={20} /> },
  { name: "Project", href: "/Projects", icon: <SquareCode size={20} /> },
  { name: "Skills", href: "/Skills", icon: <MonitorCog size={20} /> },
  { name: "Experience", href: "/Experience", icon: <UserStar size={20} /> },
  { name: "Contact", href: "/Contact", icon: <Mail size={20} /> },
];

const Menu = () => {
  const pathName = usePathname();
  return (
    <div>
      <div className="flex flex-row lg:flex-col items-center gap-2 bg-secondary border-2 border-white/5 rounded-4xl lg:w-17 p-1">
        {menuItems.map((item, index) => {
          const isActive = pathName === item.href || pathName.startsWith(`${item.href}/`);
          return (
            <Link
            href={item.href}
              key={index}
            
              className={`group relative p-4 rounded-full cursor-pointer transition-colors 
            ${
              isActive 
                ? "bg-white text-black"
                : "text-white hover:bg-primary"
            }`}
            >
              {item.icon}
              <span
                className="hidden lg:absolute left-full ml-3 top-1/2 -translate-y-1/2
              px-3 py-2 rounded-3xl text-black bg-white text-sm whitespace-nowrap
              opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
              transition-all duration-200 pointer-events-none"
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
