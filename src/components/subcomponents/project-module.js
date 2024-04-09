"use client";

import { useRef } from "react";

export default function ProjectModule({ children }) {
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
      className=" snap-center h-[35rem] w-[50rem] rounded-lg ring-1 ring-slate-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition ease-in cursor-pointer bg-gray-100 overflow-hidden "
      ref={projectRef}
    >
      {children}
    </div>
  );
}
