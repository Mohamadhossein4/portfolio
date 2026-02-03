import { ArrowUpRight } from "lucide-react";
import React from "react";
import Button from "./ui/Button";

const colabrateItems = [
  {
    text: "Let's collabrate!",
  },
];

const ColabrateLink = [
  {
    name: "contact",
    link: "/Contact",
    icon: <ArrowUpRight className="text-white/80 delay-150" size={22} />,
  },
];
const Colabrate = () => {
  return (
    <div className="flex flex-col gap-2">
      {colabrateItems.map((items, index) => {
        return (
          <div key={index} className="text-white text-7xl w-230 leading-28">
            {items.text}
          </div>
        );
      })}
      {ColabrateLink.map((items, index) => {
        return (
          <Button variant={"primary"} href={items.link} key={index}>
            <div className="flex items-center justify-between gap-4">
              <div className="text-lg">{items.name}</div>
              <div>{items.icon}</div>
            </div>
          </Button>
        );
      })}
      <div className="text-white/50 mt-10">
        © 2026 Mohamad. All rights reserved.

      </div>
    </div>
  );
};

export default Colabrate;
