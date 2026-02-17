import React from "react";
import Button from "../ui/Button";
interface EagerLearnProps {
  learnItems: {
    learnText: string;
    learnDescription: string;
  }[];
  sourceItems: {
    name: string;
    link: string;
    icon: React.ReactNode;
  }[];
}

const EgerLearn = ({ learnItems, sourceItems }: EagerLearnProps) => {
  return (
    <div className="flex flex-col gap-8 mb-10">
      {learnItems.map((item, index) => {
        return (
          <div key={index}>
            <div className="text-white text-4xl leading-28">
              {item.learnText}
            </div>
            <div className="text-white/70">{item.learnDescription}</div>
          </div>
        );
      })}
      <div className="text-2xl text-white">My Refrence</div>
      <div className="flex items-center gap-4">
        {sourceItems.map((item, index) => {
          return (
            <Button
              className="w-40"
              variant={"primary"}
              target="_blank"
              href={item.link}
              key={index}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="text-lg">{item.name}</div>
                <div>{item.icon}</div>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default EgerLearn;
