import Section from "../subcomponents/section";
import ProjectModule from "../subcomponents/project-module";
import projects from "../data/project-content";

export default function Projects() {
  return (
    <Section section_id="projects" className={"pt-24"}>
      <h1 className=" text-5xl font-bold text-cyan-600 pt-8">Projects</h1>
      <div className=" grid grid-flow-col snap-mandatory snap-x space-x-5 w-[82rem] px-64 pt-14 pb-20 overflow-x-auto overflow-y-hidden no-scrollbar">
        {projects.map((project, index) => (
          <ProjectModule key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
