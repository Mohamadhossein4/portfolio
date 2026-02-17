import ContactForm from "@/components/Section/ContactForm";
import ContactIntro from "@/components/Section/ContactIntro";
import { Github, Instagram, Linkedin } from "lucide-react";
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
const contactFormItems = [{ inputName: "Name" }, { inputName: "Email" }];

const page = () => {
  return (
    <div className="container mt-20 flex flex-col gap-16">
      <ContactIntro socialItems={socialItems} contactItems={contactItems} />
      <ContactForm contactFormItems={contactFormItems} />
    </div>
  );
};

export default page;
