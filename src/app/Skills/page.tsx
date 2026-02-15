import EgerLearn from "@/components/Section/EagerLearn";
import SkillTemplate from "@/components/Section/SkillTemplate";
import React from "react";

const page = () => {
  return (
    <div className="container flex flex-col gap-14 mt-10">
      <SkillTemplate />
      <EgerLearn/>
    </div>
  );
};

export default page;
