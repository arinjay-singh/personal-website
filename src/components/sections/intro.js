import Link from "next/link";
import Button from "../subcomponents/button";
import Image from "next/image";
import memoji from "../images/memoji.svg";

export default function Intro() {
  return (
    <div className=" flex flex-col h-screen justify-center" id="introduction">
      <div className="flex flex-row">
        <div className="flex flex-col items-start justify-center pt-20 ml-36 ">
          <h2 className=" font-medium font-sans text-4xl py-1">Hi, my name is</h2>
          <h1 className=" font-bold font-sans text-8xl text-cyan-600 py-1">
            Arinjay Singh.
          </h1>
          <h3 className=" font-medium font-sans text-3xl py-2 text-balance">
            I'm an aspiring software engineer studying Computer Science and
            Economics with a particular interest in the ethical implications of
            sociotechnical systems.
          </h3>
        </div>
        <Image priority src={memoji} width={400} height={400} alt="Memoji" className="mr-36"/>
      </div>
      <div className="flex justify-center my-6">
        <Link href="#contact">
          <Button label="Contact Me" />
        </Link>
      </div>
    </div>
  );
}
