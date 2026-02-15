import ContactForm from "@/components/Section/ContactForm";
import ContactIntro from "@/components/Section/ContactIntro";

const page = () => {
  return (
    <div className="container mt-20 flex flex-col gap-16">
      <ContactIntro />
      <ContactForm />
    </div>
  );
};

export default page;
