"use client";

import { useRef } from "react";

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
      className=" snap-center h-[35rem] w-[50rem] rounded-lg ring-1 ring-slate-200 shadow-xl hover:shadow-2xl transition ease-in-out cursor-pointer"
      ref={projectRef}
    ></div>
  );
}
