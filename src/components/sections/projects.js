import Section from "../subcomponents/section";
import ProjectModule from "../subcomponents/project-module";
import projects from "../data/project-content";
import GithubLogo from "../subcomponents/github-logo";

export default function Projects() {
  return (
    <Section section_id="projects" className={"pt-24"}>
      <h1 className=" text-5xl font-bold text-slate-600 pt-8">Projects</h1>
      <div className=" grid grid-flow-col snap-mandatory snap-x space-x-5 w-[82rem] px-64 pt-14 pb-20 overflow-x-auto overflow-y-hidden no-scrollbar">
        {projects.map((project, index) => (
          <ProjectModule key={index}>
            <div className="flex flex-row">
              {project.image}
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center">
                  <h1 className="text-xl font-bold text-slate-600 pt-8">
                    {project.title}
                  </h1>
                  <div className="flex flex-row flex-wrap items-center justify-center space-x-4 pt-3 px-3">
                    {project.skills.map((skill, index) => (
                      <p
                        key={index}
                        className=" font-normal text-xs bg-cyan-600 text-gray-200 p-2 mb-2 rounded-lg shadow-lg"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                  <p className="text-lg font-thin text-slate-600 pt-4 ml-3">
                    {project.description}
                  </p>
                </div>
                <div className=" flex flex-row justify-end w-full p-5">
                  <GithubLogo link={project.github} />
                </div>
              </div>
            </div>
          </ProjectModule>
        ))}
      </div>
    </Section>
  );
}
