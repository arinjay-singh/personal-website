"use client";

import { useRef } from "react";
import GithubLogo from "./github-logo";

export default function ProjectModule({ project }) {
  const projectRef = useRef();

  const handleClick = () => {
    projectRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <div
      onClick={handleClick}
      className=" snap-center h-[35rem] w-[50rem] rounded-lg ring-1 ring-slate-200 shadow-xl hover:shadow-2xl hover:scale-[1.00] transition ease-in cursor-pointer bg-gray-100 overflow-hidden "
      ref={projectRef}
    >
      <div className="flex flex-row">
        {project.image}
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-slate-600 pt-8 px-3">
              {project.title}
            </h1>
            <div className="flex flex-row flex-wrap items-center justify-center space-x-4 pt-3 px-3">
              {project.skills.map((skill, index) => (
                <p
                  key={index}
                  className=" font-medium text-xs bg-cyan-600 text-gray-200 p-2 mb-2 rounded-lg shadow-lg"
                >
                  {skill}
                </p>
              ))}
            </div>
            <p className="text-lg font-extralight text-slate-600 pt-4 px-3 ml-3">
              {project.description}
            </p>
          </div>
          <div className=" flex flex-row justify-end w-full p-5">
            <GithubLogo link={project.github} />
          </div>
        </div>
      </div>
    </div>
  );
}
