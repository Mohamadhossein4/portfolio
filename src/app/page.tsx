import Main from "@/components/Home/Main";
import Menu from "@/components/Menu";
import Social from "@/components/Social";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-10 fixed top-40 left-6">
        <Menu />
        <Social/>
      </div>
      <Main />
    </div>
  );
}
