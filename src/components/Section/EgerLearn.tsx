import { ArrowUpRight, Github } from 'lucide-react';
import React from 'react'
import Button from '../ui/Button';
const learnItems = [
  {
    learnText: "Ready To Learn",
    learnDescription: "I am always eager to learn new technologies and continuously improve my skills. The world of technology is constantly evolving, and I strive to grow alongside it to become the best in my field.",
  
  },
];


const sourceItems = [
  {
    name: "My Source",
    link: "https://devsub.ir/",
     icon: <ArrowUpRight className="text-white/80 delay-150" size={22} />,
  },
  
];

const EgerLearn = () => {
  return (
    <div className="flex flex-col gap-8 mb-10">
      {learnItems.map((item, index) => {
        return (
            <div key={index}>
          <div className="text-white text-4xl w-230 leading-28">
            {item.learnText}
          </div>
          <div className='text-white/70 w-230'>{item.learnDescription}</div>
          </div>
        );
      })}
      {sourceItems.map((item, index) => {
        return (
          <Button className='w-47' variant={"primary"} target='_blank' href={item.link} key={index}>
            <div className="flex items-center justify-between gap-4">
              <div className="text-lg">{item.name}</div>
              <div>{item.icon}</div>
            </div>
          </Button>
        );
      })}
      
    </div>
  )
}

export default EgerLearn