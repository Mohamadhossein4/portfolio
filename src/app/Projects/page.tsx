import ProjectTemplate from "@/components/Section/ProjectTemplate";
import bonrail from "../../../public/img/projectImages/bonrail.png";
import raheparvaz from "../../../public/img/projectImages/raheparvaz.png";
import dkd from "../../../public/img/projectImages/dkd.png";
import dkdpagecraft from "../../../public/img/projectImages/dkdpagecraft.png";


const projectTemplateitems = [
  {
    name: "bonrail rail way company",
    description:
      "functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS.",
    image: bonrail,
    status: "coming soon",
  },
  {
    name: "raheparvaz Travel Agency",
    description:
      "functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS.",
    image: raheparvaz,
    status: "public",
  },
  {
    name: "raheparvaz Travel Agency",
    description:
      "functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS.",
    image: dkd,
    status: "private",
  },
  {
    name: "bonrail rail way company",
    description:
      "functional web applications. I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS.",
    image: dkdpagecraft,
    status: "private",
  },
];

const Project = () => {
  return (
    <div className="container mt-10">
      <ProjectTemplate projectTemplateitems={projectTemplateitems}/>
    </div>
  );
};

export default Project;
