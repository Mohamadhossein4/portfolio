import { Input, Textarea } from "@mantine/core";
import React from "react";
import Button from "./ui/Button";
import { Send } from "lucide-react";
const contactForm = [{ inputName: "Name" }, { inputName: "Email" }];

const Contact = () => {
  return (
    <div className="container">
      <div className="flex flex-col">
        <span className="text-white/80 text-lg mb-10">send a message</span>
        <form action="https://formspree.io/f/mvgqkgbq" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactForm.map((item, index) => {
              return (
                <Input
                  key={index}
                  name={item.inputName}
                  variant="unstyled"
                  style={{ width: "100%" }}
                  placeholder={item.inputName}
                  size="3xl"
                  className="inline-block! w-full! bg-secondary text-white text-xl  px-3 py-2 rounded-lg"
                  classNames={{
                    input:
                      "w-full bg-secondary text-white border border-zinc-700 rounded-md px-4 py-2.5 " +
                      "placeholder:text-zinc-500 " +
                      "outline-none transition-all duration-150",
                    wrapper: "w-full",
                  }}
                />
              );
            })}
          </div>

          <div className="pb-6 space-y-2 mt-6">
            <Textarea
              name="Message"
              placeholder="Message"
              variant="unstyled"
              className="w-full h-40 bg-secondary text-xl text-white rounded px-3 py-2"
              classNames={{
                input:
                  "w-full h-36 bg-secondary text-white border border-zinc-700 rounded-md px-4 py-2.5 " +
                  "placeholder:text-zinc-500 " +
                  "outline-none transition-all duration-150",
                wrapper: "w-full",
              }}
            />
          </div>

          <Button
            type="submit"
            variant={"secondary"}
            className=" w-full transition-all font-bold duration-300"
          >
            send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
