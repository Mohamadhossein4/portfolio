import React from "react";
import Button from "../ui/Button";
import { FileUser } from "lucide-react";

interface ContactIntroProps {
  socialItems: {
    name: string;
    link: string;
    icon: React.ReactNode;
  }[];
  contactItems: {
    contactText: string;
    contactDescription: string;
  }[];
}

const ContactIntro = ({ socialItems, contactItems }: ContactIntroProps) => {
  return (
    <div className="flex flex-col gap-8 -mt-14">
      {contactItems.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-2 lg:gap-8">
            <div className="text-white  text-6xl lg:text-8xl leading-28">
              {item.contactText}
            </div>
            <div className="text-white/40 text-lg ml-1.5">
              {item.contactDescription}
            </div>
          </div>
        );
      })}
     <div className="grid grid-cols-2 lg:grid-cols-4  items-center gap-2 lg:gap-8 mt-10">
        {socialItems.map((items, index) => {
          return (
            <Button variant={"primary"} href={items.link} key={index}>
              <div className="flex items-center justify-center gap-3 delay-150 ">
                <div>{items.icon}</div>
                <div>{items.name}</div>
              </div>
            </Button>
          );
        })}
         <Button className="lg:hidden" variant={"primary"} href={"/cv/resume.pdf"} >
                  <div className="flex items-center justify-center gap-3">
                    <div>
                      <FileUser size={20} />
                    </div>
                    <div>Resume</div>
                  </div>
                </Button>
      </div>
    </div>
  );
};

export default ContactIntro;
