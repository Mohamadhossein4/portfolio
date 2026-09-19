"use client"
import Snowfall from "react-snowfall";
import About from "../Section/About";
import Colabrate from "../Section/Colabrate";
import { motion } from "motion/react";

const Main = () => {
  return (
     <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }} className="flex flex-col  gap-20 container mt-10">
      <About />
      <Colabrate />
    </motion.div>
  );
};

export default Main;
