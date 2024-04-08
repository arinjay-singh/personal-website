import Experience from "@/components/sections/experience";
import Intro from "@/components/sections/intro";
import Research from "@/components/sections/research";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <main className="flex top-0 min-h-screen flex-col items-center justify-between z-1 w-full max-w-[1500px] m-auto relative">
        <div className="px-24">
          <Intro />
          <Experience />
          <Research />
          <Projects />
          <Skills />
          <Contact />
        </div>
        <div className="bg-slate-600 w-screen p-20 flex">
        </div>
      </main>
    </>
  );
}
