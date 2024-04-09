import Section from "../subcomponents/section";
import ProjectModule from "../subcomponents/project-module";

export default function Projects() {
  return (
    <Section section_id="projects" className={"pt-20"}>
      <h1 className=" text-5xl font-bold text-slate-600 pt-8">Projects</h1>
      <div className=" grid grid-flow-col snap-mandatory snap-x space-x-5 w-[82rem] px-64 pt-14 pb-20 overflow-x-auto overflow-y-hidden no-scrollbar">
        <ProjectModule />
        <ProjectModule />
        <ProjectModule />
        <ProjectModule />
        <ProjectModule />
        <ProjectModule />
      </div>
    </Section>
  );
}
