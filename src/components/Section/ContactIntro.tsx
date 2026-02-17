import React from "react";
import Button from "../ui/Button";

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
    <div className="flex flex-col gap-8">
      {contactItems.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-8">
            <div className="text-white text-8xl w-230 leading-28">
              {item.contactText}
            </div>
            <div className="text-white/40 text-lg ml-1.5">
              {item.contactDescription}
            </div>
          </div>
        );
      })}
      <div className="flex items-center gap-10 mt-6">
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
      </div>
    </div>
  );
};

export default ContactIntro;
