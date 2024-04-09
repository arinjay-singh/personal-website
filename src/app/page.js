"use client";

import Experience from "@/components/sections/experience";
import Intro from "@/components/sections/intro";
import Research from "@/components/sections/research";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Image from "next/image";
import signature from "@/components/images/signature-white.svg";
import Section from "@/components/subcomponents/section";
import SectionDivider from "@/components/subcomponents/section-divider";

export default function Home() {
  let year = new Date().getFullYear();

  return (
    <>
      <main className="flex top-0 min-h-screen flex-col items-center justify-between z-1 w-full overflow-x-hidden">
        <div className="max-w-[1500px] m-auto relative px-24">
          <Intro />
          <SectionDivider />
          <Experience />
          <Research />
          <Projects />
          <SectionDivider />
          <Skills />
          <Contact />
        </div>
        <div className="bg-slate-600 w-full p-20 flex justify-between">
          <p className="text-gray-100 text-center font-sans font-thin">
            Copyright © {year} Arinjay Singh. All rights reserved.
          </p>
          <Image priority src={signature} width={240} height={100} alt="Memoji" className="h-16 object-cover"/>
        </div>
      </main>
    </>
  );
}
