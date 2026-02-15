import { Input, Textarea } from "@mantine/core";
import Button from "../ui/Button";
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
                  className="inline-block! w-full! bg-secondary text-white text-xl  px-3 py-2 rounded-xl"
                  classNames={{
                    input:
                      "w-full bg-secondary  text-white rounded-xl px-4 py-2.5 " +
                      "placeholder:text-white/60 " +
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
              resize="none"
              className="bg-secondary text-xl text-white rounded-xl px-3 py-2"
              classNames={{
                input:
                  "w-full h-40 resize-none bg-secondary text-white rounded-xl px-4 py-2.5 " +
                  "placeholder:text-white/60 " +
                  "outline-none transition-all duration-150",
                wrapper: "w-full",
              }}
            />
          </div>
          <Button
            type="submit"
            variant={"secondary"}
            className=" w-full py-4 transition-all text-xl font-bold rounded-xl duration-300 hover:bg-white/80"
          >
            send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
